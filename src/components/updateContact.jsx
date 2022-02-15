import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import webApi from '../api/webApi';
export default class updateContact extends Component{



    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            companyName: "",
            telephone: "",
            mobile: "",
            email: "",
            houseNo: "",
            city: "",
            states: "",
            country: "",
            file: "",
            showErrorMsg: "none",
            showSuccessMsg: "none",
        };

        this.fetchData();
      }



    fetchData=()=>{
        console.log("-----");
        try {
            fetch('/getFromDatabaseUpdatePage.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.props.dataID
                })
                }).then(response => response.json() )
                .then(data => {
                    console.log(data);
                })


        } catch (error) {
            console.log("database update api failed:" + error);
        }
    }



      onSubmitForm=(event)=>{
          event.preventDefault();
         try {
            fetch('/getFromDatabaseUpdatePage.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: this.state
                })
                }).then(response => response.json() )
                .then(data => {
                    console.log(data);
                   /*if(data == true){
                        this.setState({showSuccessMsg: 'block', showErrorMsg: 'none'});
                   }else{
                        this.setState({showErrorMsg: 'block', showSuccessMsg: 'none'});
                   }*/
                })


        } catch (error) {
            console.log("database update api failed:" + error);
        }
      }

     onTrigger = (val) => {
        this.props.parentCallback(val);
    }
    
    render(){
        return (
            <div className='container'>

                <div class="row justify-content-between p-2">
                    <div className="col-2">
                        <h2>Update Contact - {this.props.dataFromParent}</h2>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-8">
                    <form className="shadow p-4 rounded needs-validation" id="form" onSubmit={this.onSubmitForm} novalidate>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" placeholder="First name" onChange={(val)=> this.setState({fname: val.target.value})} required/>
                        <div class="invalid-feedback">
                        Please provide a valid city.
                        </div>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" onChange={(val)=> this.setState({lname: val.target.value})} required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" class="form-control" onChange={(val)=> this.setState({companyName: val.target.value})} placeholder="Company Name"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" onChange={(val)=> this.setState({telephone: val.target.value})} placeholder="Telephone"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" onChange={(val)=> this.setState({mobile: val.target.value})} placeholder="Mobile"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="email" class="form-control" onChange={(val)=> this.setState({email: val.target.value})} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" class="form-control" onChange={(val)=> this.setState({houseNo: val.target.value})} placeholder="House #/Road"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" onChange={(val)=> this.setState({city: val.target.value})} placeholder="City"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" onChange={(val)=> this.setState({states: val.target.value})} placeholder="State"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" onChange={(val)=> this.setState({country: val.target.value})} placeholder="Country"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <input type="file" id="myFile" onChange={(val)=> this.setState({file: val.target.value})} name="filename"/>
                    </div>
                    <div style={{color:'green', display:this.state.showSuccessMsg}}>Contact Added</div>
                    <div style={{color:'red', display:this.state.showErrorMsg}}>Upload Failed</div>
                    <div className="row mb-3 justify-content-between">
                        <div className="col-sm-1">
                            <button type="submit" class="btn btn-success shadow p-2 rounded" style={{marginRight:10}}>Save</button>
                        </div>
                        <div className="col-sm-2">
                        <button type="button" class="btn btn-danger shadow p-2 rounded" onClick={()=>{this.onTrigger("none")}}>Cancel</button>
                        </div>
                        
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        )
        }
    }
