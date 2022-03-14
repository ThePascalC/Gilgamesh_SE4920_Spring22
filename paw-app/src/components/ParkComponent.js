import React from "react";
import axios from "axios";

export default class ParkList extends React.Component {
    state = {
        parks: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/users`)
        .then(res => {
            const parks = res.data;
            this.setState({parks});
        })
    }

    render(){
        return this.state.parks;
    }


}