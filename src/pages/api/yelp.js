import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import moment from 'moment';

const API_KEY =
  'bV07PMVL1fpRKwKie8s605GxA_S5eBJSdu7R7e2MZnQUFY5wtNqj6mwMTwoEtZ4MP2vPX7BL0iccJUqmBV2JehF0pCRh_kShv4bRpOJpQ3yfk4vNRhjGXA0YoLX3WXYx';

const client = new ApolloClient({
  uri: 'https://api.yelp.com/v3/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });
  },
});

const formatTime = (time) => {
  const t = moment(time, 'HHmm');
  return t.format('m') === '0' ? t.format('ha') : t.format('h:mma');
};

const formatHours = ({ day, start, end }) => {
  return {
    day: moment()
      .isoWeekday(Number(day) + 1)
      .format('ddd'),
    start: formatTime(start),
    end: formatTime(end),
  };
};

export async function fetchHours() {
  const query = gql`
    {
      business(id: "ambrosia-bakery-san-francisco") {
        name
        id
        alias
        rating
        url
        hours {
          hours_type
          is_open_now
          open {
            is_overnight
            end
            start
            day
          }
        }
        special_hours {
          is_overnight
          is_closed
          end
          start
          date
        }
      }
    }
  `;

  const { data } = await client.query({ query }).catch((err) => {
    throw err;
  });

  const hours = data.business.hours[0].open
    .map(formatHours)
    .reduce((acc, cur) => {
      if (acc && acc.length > 0) {
        const lastItem = acc[acc.length - 1];
        if (lastItem.start === cur.start && lastItem.end === cur.end) {
          const [startDay] = lastItem.day.split('-');
          lastItem.day = `${startDay}-${cur.day}`;
        } else {
          acc.push(cur);
        }
      } else {
        acc.push(cur);
      }
      return acc;
    }, []);

  return hours;
}

export default async (req, res) => {
  const hours = await fetchHours().catch((err) => {
    res.status(400).end();
    throw err;
  });
  res.status(200).json({ hours });
};
