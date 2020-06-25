import React from 'react';
import Link from 'next/link';

const Notice = () => (
  <div className="covid-notice">
    <div className="container">
      ⚠️ Due to the COVID-19 pandemic and shelter-in-place order, we’re offering{' '}
      <Link href="/contact#temporary-hours">
        <a>limited hours</a>
      </Link>{' '}
      for take-out orders by phone or walk-in while respecting social distancing
      guidelines. Our bakery is proud to continue serving our community, and we
      deeply appreciate our customers’ support to remain open at this time.
    </div>
    <style jsx>{`
      .covid-notice {
        position: relative;
        background-color: #cae2ea;
        padding: 20px;
      }
      .covid-notice > div {
        display: block;
      }
    `}</style>
  </div>
);

export default Notice;
