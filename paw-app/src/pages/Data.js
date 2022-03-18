import { useState, useEffect } from 'react';

import DataList from '../components/card/CardList';

function AllMeetupsPage() {
  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is dummy Data',
      image:
        'https://www.institute4learning.com/blog/wp-content/uploads/2020/02/data.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'Users can use the map search function to locate a dog park closet to you, the quality of the park, and how many people are there within a 12 hour time frame',
    },
  ];

  return (
    <section>
      <DataList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;