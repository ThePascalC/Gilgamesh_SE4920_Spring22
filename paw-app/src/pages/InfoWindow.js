import * as React from 'react';
import './CssPages/InfoWindow.css';
import { useEffect, useState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import { Button, Modal, } from "react-bootstrap";
import reviewService from '../services/review.service';
const InfoWindow = (props) => {

    console.log(props)
    const populationValues = ["Low", "Medium", "High", "Packed"];
    const qualityValues = ["Poor", "Average", "Great"];
    const [population, setPopulation] = useState('')
    const [quality, setQuality] = useState('')
    const [rating, setRating] = useState('')


    const [showGroup, setShowGroup] = useState(false);
    const [modalEvent, setModalEvent] = useState();

    const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
    function handleShowCreateGroupModal() {
        setShowCreateGroupModal(true)
    }
    function handleHideCreateGroupModal() {
        setShowCreateGroupModal(false)
    }
    const [fav, setFav] = React.useState(false);

    function handleGroupClick(event) {
        setShowGroup(true);
    }
    function handleGroupClose() {
        setShowGroup(false)
    }
    const onChangeQuality = e => {
        setQuality(e.target.value);
      }
    const onChangePopulation = e => {
        setPopulation(e.target.value);
      }
    const onChangeRating = e => {
        setRating(e.target.value);
      }
    const createReview = e => {
        e.preventDefault();
        // do something here
        const data = new FormData(e.target);
        data.append('quality', data.get('quality'));
        data.append('population', data.get('population'));
        data.append('rating', data.get('rate'));
        reviewService.createReview(props.id,data.get('quality'),data.get('population'), data.get('rate'))
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
                            <IconButton style={{ color: "#30E98F" }} onClick={() => { setFav(!fav) }}>
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
                <Modal show={showGroup} onHide={handleGroupClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="review-popup">
                            <div className="input-fields">
                                <div className="category-dropBox"><b>Park Quality:</b>
                                    <select name="quality" id="quality-items" onChange={onChangeQuality}>
                                        <option value="Poor">Poor</option>
                                        <option value="Average">Average</option>
                                        <option value="Great">Great</option>
                                    </select>
                                    <div className="category-dropBox"><b>Park Population:</b></div>
                                    <select name="population" id="population-items" onChange={onChangePopulation}>
                                        <option value="Low">Low</option>
                                        <option value="Average">Average</option>
                                        <option value="High">High</option>
                                        <option value="Packed">Packed</option>
                                    </select>
                                    <div className="rate" >
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
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button variant="primary" onClick={createReview}>
                            Confirm Group
                        </Button>
                        <Button variant="secondary" onClick={handleGroupClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <button variant="success" className="btn btn-update" onClick={handleGroupClick}>Leave Review</button>
            </div>
        </div>
    );
};

export default InfoWindow;

