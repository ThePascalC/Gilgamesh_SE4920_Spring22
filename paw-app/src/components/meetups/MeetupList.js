import SignUpItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <SignUpItem
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
