import * as React from 'react';
import './CssPages/InfoWindow.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
const InfoWindow = (props) => {
    
    console.log(props)
    const populationValues = ["Low", "Medium", "High", "Packed"];
    const qualityValues = ["Poor", "Average", "Great"];

    const [fav, setFav] = React.useState(false);
    function handleFav(){
        setFav(!fav)
        if(fav == true){
          //save it to database
        }else{
          //or delete it from database
        }
    }
    
    return (
        <div className="infoWindowStyle">
            <div className='windowHeader'></div>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
            <div className='Top-info'>
                <div className='Park-Info'>
                    <h3>{props.title}{fav &&
                            <IconButton style={{ color: "#30E98reF" }} onClick={() => { setFav(!fav) }}>
                                <FavoriteIcon style={{ width: 32, height: 32 }}></FavoriteIcon>
                            </IconButton>
                        }
                        {!fav &&
                            <IconButton style={{ color: "#30E98F" }}onClick={() => { setFav(!fav) }}>
                                <Favorite style={{ width: 32, height: 32 }}></Favorite>
                            </IconButton>
                        }</h3>
                    <p>Rating: {props.rating}/5</p>
                    <h6>Address:</h6>
                    <h5>Current Population: {populationValues[props.population]}</h5>
                    <p className='updateTime'>last updated 7:55pm</p>
                </div>
            </div>
            <div className='mid-info'>
                <h5>Average Population: {populationValues[props.population]}</h5>
                <h5>Quality: {qualityValues[props.quality]}</h5>

            </div>
            <div className='bottom-info'>
                <h5>User Rating</h5>
                    <div className="rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label htmlFor="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label htmlFor="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label htmlFor="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label htmlFor="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label htmlFor="star1" title="text">1 star</label>
                    </div>
                <div className='quality-box'>
                    <h5>Park Quality Rating</h5>
                    <select name="quality-items" id="quality-items">
                        <option value="Poor">Poor</option>
                        <option value="Average">Average</option>
                        <option value="Great">Great</option>
                    </select>
                </div>
                <br></br>
                <button className='btn btn-update'>Update</button>
            </div>
        </div>
    );
};

export default InfoWindow;

