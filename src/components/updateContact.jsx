import React, {Component} from 'react';

export default class updateContact extends Component{

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
                    <form className="shadow p-4 rounded">
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" placeholder="First name" required/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" class="form-control" placeholder="Company Name"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Telephone"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Mobile"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="email" class="form-control" placeholder="Email" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" class="form-control" placeholder="House #/Road"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" placeholder="City"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="State"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" placeholder="Country"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <input type="file" id="myFile" name="filename"/>
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