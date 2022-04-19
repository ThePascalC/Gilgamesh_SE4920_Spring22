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
    const ratingValues = ["One", "Two", "Three", "Four", "Five"];
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
        console.log(props.id, qualityValues.indexOf(quality), populationValues.indexOf(population), ratingValues.indexOf(rating))
        reviewService.createReview(props.id, qualityValues.indexOf(quality)+1, populationValues.indexOf(population)+1, ratingValues.indexOf(rating)+1)
        handleGroupClose();
        props.setTrigger(false);
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
                    <div className='popup-box'>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {props.title}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="review-popup">
                                <div className="review-fields">
                                    <div className="Quality-dropBox"><b>Park Quality:</b>
                                        <select name="quality" id="quality-items" onChange={onChangeQuality}>
                                            <option value="Poor">Poor</option>
                                            <option value="Average">Average</option>
                                            <option value="Great">Great</option>
                                        </select>
                                        <div className="population-dropBox"><b>Park Population:</b>
                                            <select name="population" id="population-items" onChange={onChangePopulation}>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                                <option value="Packed">Packed</option>
                                            </select>
                                        </div>
                                        <div className="rating-dropBox"><b>Park Rating:</b>
                                            <select name="rating-items" id="population-items" onChange={onChangeRating}>
                                                <option value="One">1</option>
                                                <option value="Two">2</option>
                                                <option value="Three">3</option>
                                                <option value="Four">4</option>
                                                <option value="Five">5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="d-flex justify-content-between">
                            <Button variant="primary" onClick={createReview}>
                                Confirm Review
                            </Button>
                            <Button variant="secondary" onClick={handleGroupClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal>
                <button variant="success" className="btn btn-update" onClick={handleGroupClick}>Leave Review</button>
            </div>
        </div>
    );
};

export default InfoWindow;

