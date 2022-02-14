import React, {Component} from 'react';

export default class addContact extends Component{

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
        };
      }



      onSubmitForm=(event)=>{
          event.preventDefault();
            console.log(this.state);
      }

     onTrigger = (val) => {
        this.props.parentCallback(val);
    }
    
    render(){
        return (
            <div className='container'>
                <div class="row justify-content-between p-2">
                    <div className="col-2">
                        <h2>Add Contact</h2>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-8">
                    <form className="shadow p-4 rounded" onSubmit={this.onSubmitForm}>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" placeholder="First name" onChange={(val)=> this.setState({fname: val.target.value})} required/>
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
                            <input type="email" class="form-control" onChange={(val)=> this.setState({email: val.target.value})} placeholder="Email" required/>
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
