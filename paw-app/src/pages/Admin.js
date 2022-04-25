import axios from "axios";
import { useEffect,useState } from 'react';

function AdminPage(){
    const [parks, getParks] = useState([])
    const [reviewCount, getReviewCount] = useState(0)
    const [users,getUsers] = useState([]);


    useEffect(()=>{
        getParkInfo();
        getUserList();
    });
    function getParkInfo(){
        axios
        .get("http://localhost:8080/api/count")
        .then((response) => {
            getReviewCount(response.data);
        })
        .catch((error) => console.log(error.response));
    }
    function getUserList(){
        axios
        .get("http://localhost:8080/api/admin/users")
        .then((response) => {
            getUsers(...response.data);
        })
        .catch((error) => console.log(error.response));
    }
    function getParkList(){
        axios
        .get("http://localhost:8080/api/parks")
        .then((response) => {
            getUsers(...response.data);
        })
        .catch((error) => console.log(error.response));
    }
    
    return (
        <div className="container-fluid">
            <h2 style={{textAlign: 'center'}}>Admin Page</h2>
            <div className="row" style={{textAlign: 'center'}}>
                Review Count: {reviewCount}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ul>
                       {} 
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;