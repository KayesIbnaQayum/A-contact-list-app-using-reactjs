import React, {Component} from 'react';

class Api extends Component{

    addData=(data)=>{
        try {
            fetch('/addContact.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: data
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


