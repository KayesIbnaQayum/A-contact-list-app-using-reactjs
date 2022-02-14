import React, {Component} from 'react';

class Api extends Component{

    fetchData=()=>{
        try {
            fetch('http://localhost/databaseCommunication/database.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: "asd"
                })
                }).then(response => response.json() )
                .then(data => {
                    return data;
                })


        } catch (error) {
            console.log("database update api failed:" + error);
        }
    } 
}


const webApi = new Api;
export default webApi;


