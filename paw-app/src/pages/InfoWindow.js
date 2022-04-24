import * as React from 'react';
import './CssPages/InfoWindow.css';
import { useEffect, useState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import { Button, Modal, } from "react-bootstrap";
import reviewService from '../services/review.service';
import axios from 'axios';
const InfoWindow = (props) => {

    const populationValues = ["Low", "Medium", "High", "Packed"];
    const qualityValues = ["Poor", "Average", "Great"];
    const ratingValues = ["One", "Two", "Three", "Four", "Five"];
    const [population, setPopulation] = useState('')
    const [quality, setQuality] = useState('')
    const [rating, setRating] = useState('')
    const [showGroup, setShowGroup] = useState(false);
    const [modalEvent, setModalEvent] = useState();
    const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
    const [parkReviewInfo, setParkReviewInfo] = useState('')

    useEffect(()=>{
        getParkInfo();
    });
    function getParkInfo(){
        axios
        .get("http://localhost:8080/api/reviewInfo?park_id=" + props.id)
        .then((response) => {
            setParkReviewInfo(...response.data);
        })
        .catch((error) => console.log(error.response));
    }


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
        reviewService.createReview(props.id, parseInt(qualityValues.indexOf(quality))+1, populationValues.indexOf(population)+1, ratingValues.indexOf(rating)+1)
        handleGroupClose();
        props.setTrigger(false);
    }
    const validateQuality = () => {

    } 
    const validatePopulation = () => {
        
    } 
    const validateRating = () => {
        
    } 
    return (
        <div className="infoWindowStyle">
            <div className='windowHeader'></div>
            <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
            <div className='Top-info'>
                <div className='Park-Info'>
                    <h3>{props.title}</h3>
                    <h4>Rating: {isNaN(parkReviewInfo.rating) ? 'Not Rated' : (Math.round(parseFloat(parkReviewInfo.rating) * 10) / 10) + "/5"}</h4>
                    <h6>Address: {props.address}</h6>
                </div>
            </div>
            <div className='mid-info'>
                <h5>Population: {populationValues[parseInt(parkReviewInfo.population)-1]}</h5>
                <h5>Quality: {qualityValues[parseInt(parkReviewInfo.quality)-1]}</h5>
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
                                <div className="form-group" style={{top: 0}}>
                                    <div className="Quality-dropBox"><b>Park Quality:</b>
                                        <select className='form-select' name="quality" id="quality-items" onChange={onChangeQuality} required>
                                         <option selected disabled hidden>How is the park quality?</option>
                                            <option value="Poor">Poor</option>
                                            <option value="Average">Average</option>
                                            <option value="Great">Great</option>
                                        </select>
                                        <div className="population-dropBox"><b>Park Population:</b>
                                            <select className='form-select' name="population" id="population-items" onChange={onChangePopulation} required>
                                                <option selected disabled hidden>How busy is the park?</option>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                                <option value="Packed">Packed</option>
                                            </select>
                                        </div>
                                        <div className="rating-dropBox"><b>Park Rating:</b>
                                            <select  className='form-select' name="rating-items" id="rating-items" onChange={onChangeRating} required>
                                                <option selected disabled hidden>Select a Rating 1-5</option>
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

