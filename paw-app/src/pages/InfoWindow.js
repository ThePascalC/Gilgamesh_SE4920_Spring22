import './InfoWindow.css';
import { Button } from 'react-bootstrap';

const InfoWindow = (props) => {
    const {name, rating, population, quality} = props;

    return (
    <div className="infoWindowStyle">
        <h3>Dog Park</h3>
        <p>Rating: 4/5</p>
        <p>Population: High</p>
        <p>Quality: Poor</p>
        <Button className='btn btn-map'>Update</Button>
    </div>
    );
  };

  export default InfoWindow;