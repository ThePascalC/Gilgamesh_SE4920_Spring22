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
                    <select name="population-items" id="population-items">
                        <option value="Low">Low</option>
                        <option value="Average">Average</option>
                        <option value="High">High</option>
                        <option value="Packed">Packed</option>

                    </select>
                </div>
                <br></br>
                <button className='btn btn-update'>Update</button>
            </div>
        </div>
    );
};

export default InfoWindow;


{/* <div className="infoWindowStyle">
            <div className='Header'></div>
            <Button className="close-btn" onClick={() => props.setTrigger(false)}>X</Button>
            <div className='Top-info'>
                <div className='Park-Info'>
                    <h3>{props.title}</h3>
                    <div className='btn-fav'>
                        <Button className='btn btn-star'>*</Button>
                    </div>
                    <p>Rating: {props.rating}/5</p>
                    <h6>Address:</h6>
                </div>
            </div>
            <div className='mid-info'>
                <h5>Population: {populationValues[props.population]}</h5>
                <h5>Quality: {qualityValues[props.quality]}</h5>
                <button className='btn btn-feedback'>Give FeedBack</button>
            </div>
            <div className='input-info'>
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
            <div className='Footer'></div>
        </div> */}

        // <button className='bi bi-heart'>
        //                     <svg xmlns="http://www.w3.org/2000/svg"
        //                         width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        //                         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92
        //                         1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878
        //                         10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12
        //                         3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        //                     </svg>
        //                 </button>