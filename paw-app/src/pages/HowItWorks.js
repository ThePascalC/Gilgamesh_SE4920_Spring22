
import MeetupList from '../components/card/CardList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is dummy Data',
    image:
      'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'Users can use the map search function to locate a dog park closet to you, the quality of the park, and how many people are there within a 12 hour time frame',
  },
];

function HowItWorksPage() {
  return (
    <section>
      {/* <h1>How Pawsible Works</h1> */}
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default HowItWorksPage;