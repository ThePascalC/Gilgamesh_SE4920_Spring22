import CardBox from './CardItem';
import classes from './CardList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <CardBox
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          name={meetup.name}
          email={meetup.email}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
