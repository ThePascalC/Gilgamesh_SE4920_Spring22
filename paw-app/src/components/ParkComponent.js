import React from "react";
import axios from "axios";

export default class ParkList extends React.Component {
    state = {
        parks: []
    }

    

    render(){
        return this.state.parks;
    }


}