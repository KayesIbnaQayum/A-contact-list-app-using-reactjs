import React, {Component} from 'react';

class AppCorePage extends Component{
    render(){
        return (
            <div class="container">
                <div class="row justify-content-between p-2">
                    {/* top bar*/ }
                    <div class="col-5" >
                       <div class="row justify-content-between">
                            <div className="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>

                <div class="row justify-content-between p-2">
                    <div className="col-2">
                        <h2>Contact</h2>
                    </div>

                    <div className="col-2">
                        <button type="button" class="btn btn-primary shadow p-2 rounded">Create Contact</button>
                    </div>
                </div>

                <div class="row justify-content-between p-2">
                    <div className="col-3" style={{display:'flex', flexDirection:'row'}}>
                    <p>Filter By:</p> 
                        <select class="form-select" aria-label=".form-select-lg example" style={{width:150, borderRadius:50, marginLeft:20}}>
                        <option selected>All Contact</option>
                        <option value="1">Country</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="col-2"  style={{flexDirection:'row', display:'flex'}}>
                            <button type="button" class="btn btn-secondary" style={{marginRight:10}}>Modify</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>

                <div class="row shadow-sm p-3 mb-2 bg-white rounded" style={{fontWeight:'bold'}}>
                <div class="col-sm-1">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                    <div class="col-sm-1">
                        Pic
                    </div>
                    <div class="col-sm-2">
                        Name
                    </div>
                    <div class="col-sm-2">
                        Company
                    </div>
                    <div class="col-sm-2">
                        Address
                    </div>
                    <div class="col-sm-2">
                        TelePhone
                    </div>
                    <div class="col-sm-1">
                        Email
                    </div>
                    <div class="col-sm-1">
                        Mobile
                    </div>
                </div>

                <div class="row shadow-sm p-3 mb-1 bg-white rounded" style={{height:70,justifyContent: 'center', alignItems: 'center', borderBottom: "1px solid rgb(212, 212, 212)"}}>
                    <div class="col-sm-1">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                    </div>
                    <div class="col-sm-1">
                        {this.imageComponent()}
                    </div>
                    <div class="col-sm-2">
                        asdsad
                    </div>
                    <div class="col-sm-2">
                        Company
                    </div>
                    <div class="col-sm-2">
                        Address
                    </div>
                    <div class="col-sm-2">
                        TelePhone
                    </div>
                    <div class="col-sm-1">
                        Email
                    </div>
                    <div class="col-sm-1">
                        Mobile
                    </div>
            
                </div>


            </div>
        )
    }

    imageComponent(img = null){
        if(img == null){
            const colorArr = ['#D98880','#F5B7B1','#D7BDE2','#A9CCE3','#AED6F1','#A3E4D7','#AED6F1','#F9E79F','#AEB6BF'];
            let min = 1;
            let max = 9;
            let rand =  min + (Math.random() * (max-min));
            
            let choosenColor = colorArr[parseInt(rand)];
            return (
                <div class="rounded-circle" style={{height:40, width:40, backgroundColor:choosenColor, alignItems:'center'}}>
                    <p style={{textAlign:'center'}}>AB</p>
                </div>
            );
        }
        
        
        return (
            <img src="https://www.w3schools.com/bootstrap4/newyork.jpg" class="rounded-circle" alt="Italian Trulli" style={{height:40, width:40}}/>
        );
    }
}

export default AppCorePage;