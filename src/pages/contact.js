import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Contact = () => {
  const { data, error } = useSWR('/api/yelp', fetcher);

  return (
    <section className="contact-container">
      <div className="map-container">
        <iframe
          className="map"
          width="100%"
          height="500px"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASUj0jxU59Q3jOFVRk5-X_KGCrYqGC2TI&q=Ambrosia+Bakery,San+Francisco,CA"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h4>Hours</h4>
        <div className="row">
        {data?.hours?.map(({day, start, end}) => <p className="four columns">{`${day}: ${start} - ${end}`}</p>)}
        {error && <a href="https://www.yelp.com/biz/ambrosia-bakery-san-francisco">Check hours on Yelp</a>}
        </div>
      </div>
      <div>
        <h4>Closed</h4>
        <div className="row">
          <div className="columns four">
            <p>Day after Thanksgiving</p>
            <p>Christmas Day</p>
          </div>
          <div className="columns four">
            <p>New Years Day</p>
            <p>Memorial Day</p>
          </div>
          <div className="columns four">
            <p>Independence Day</p>
            <p>Labor Day</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:ambrosia2605@gmail.com">ambrosia2605@gmail.com</a>
      </div>
      <style jsx>
        {`
          .contact-container {
            margin-top: 2rem;
            text-align: center;
          }

          .map {
            background-image: url('/public/spinner.gif');
            background-size: 50px 50px;
            background-repeat: no-repeat;
            background-position-x: 50%;
            background-position-y: 50%;
            background-color: white;
            border: 0;
          }

          .temporary-hours {
            border-radius: 10px;
            margin: 20px auto;
            padding: 20px;
            background-color: #cae2ea;
          }

          .temporary-hours::before {
            content: '';
            display: block;
            visibility: hidden;
            margin-top: -150px;
            height: 150px;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
