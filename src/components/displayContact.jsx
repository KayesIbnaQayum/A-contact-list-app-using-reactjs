import React, {Component, useState, useEffect } from 'react';
import AddContact from './addContact';
import UpdateContact from './updateContact';


function AppCorePage(){
    const [displayAddContactpage, setdisplayAddContactpage] = useState("none");
    const [displayUpdatePage, setdisplayUpdatePage] = useState("block");
    const [displayIndexPage, setdisplayIndexPage] = useState("");
    const [data, setdata] = useState(0);
    const [dataFilterMenuCountry, setdataFilterMenuCountry] = useState(0);
    const [dataFilterMenuState, setdataFilterMenuState] = useState(0);
    const [dataFilterMenuCity, setdataFilterMenuCity] = useState(0);

    const [dataID, setDataID] = useState(1);


    
    const [loading, setloading] = useState(true);
    const [loadingFilterMenu, setloadingFilterMenu] = useState(true);
    const handleCallback = (childData) =>{
        setdisplayAddContactpage(childData);
        setdisplayIndexPage("");
    }

    const [selectForModificationId, setselectForModificationId] = useState(null);

    const [showSuccessMsg, setshowSuccessMsg] = useState("none");
    const [showErrorMsg, setshowErrorMsg] = useState("none");
    
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [companyName, setcompanyName] = useState("");
    const [telephone, settelephone] = useState("");
    const [mobile, setmobile] = useState("");
    const [email, setemail] = useState("");
    const [houseNo, sethouseNo] = useState("");
    const [city, setcity] = useState("");
    const [states, setstates] = useState("");
    const [country, setcountry] = useState("");
 

    useEffect(() => {
        if(loading){
            fetchData();
            filterData();
        }
      
    });

        let countriesList = dataFilterMenuCountry.length > 0
                && dataFilterMenuCountry.map((item, i) => {
            return (
            
                <option key={i} value={item['country']}>{item['country']}</option>
            )
            }, this);

            let stateList = dataFilterMenuState.length > 0
            && dataFilterMenuState.map((item, i) => {

            return (

            <option key={i} value={item['states']}>{item['states']}</option>
            )
            }, this);

            let cityList = dataFilterMenuCity.length > 0
            && dataFilterMenuCity.map((item, i) => {
            return (

            <option key={i} value={item['city']}>{item['city']}</option>
            )
            }, this);



    const fetchData=(tableName,data)=>{
        try {
            fetch('/getFromDatabase.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: data,
                    tableName:tableName
                })
                }).then(response => response.json() )
                .then(data => {
                     if(data.length > 0){
                        setdata(data);
                        setloading(false);
                     }

                })


        } catch (error) {
            console.log("database update api failed:" + error);
        }
    }

    const fetchDataSingleRow=(id)=>{
        
        try {
            fetch('/getFromDatabaseUpdatePage.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: id,
                })
                }).then(response => response.json() )
                .then(data => {
                    if(data.length > 0){
                        setselectForModificationId(id);
                        setfname(data[0].Fname);
                        setlname(data[0].Lname);
                        setcompanyName(data[0].company);
                        settelephone(data[0].telephone);
                        setmobile(data[0].mobile);
                        setemail(data[0].email);
                        sethouseNo(data[0].houseNo);
                        setcity(data[0].city);
                        setstates(data[0].states);
                        setcountry(data[0].country);
                        setshowSuccessMsg("none")
                        setshowErrorMsg("none");
                     }

                })


        } catch (error) {
            console.log("database update api failed:" + error);
        }
    }

    const deleteData=(id)=>{
        try {
            fetch('/deleteFromDatabase.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id:id
                })
                }).then(response => response.json() )
                .then(data => {
                    fetchData();
                     
                })


        } catch (error) {
            console.log("database update api failed:" + error);
        }
    }

    const onSubmitFormUpdate=(event)=>{
        event.preventDefault();
        var data = new FormData(event.target)
        let formObject = Object.fromEntries(data.entries())
       
        try {
            fetch('/update.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: selectForModificationId,
                    fname: formObject.fname,
                    lname: formObject.lname,
                    companyName: formObject.companyName,
                    telephone:formObject.telephone,
                    mobile:formObject.mobile,
                    email:formObject.email,
                    houseNo:formObject.houseNo,
                    city:formObject.city,
                    states:formObject.states,
                    country:formObject.country
                })
                }).then(response => response.json() )
                .then(data => {
                    console.log(data);
                   if(data == true){
                        setshowSuccessMsg("block")
                        setshowErrorMsg("none");
                   }else{
                        setshowErrorMsg("block");
                        setshowSuccessMsg("none");
                   }
                })


        } catch (error) {
            console.log("database update api failed:" + error);
        }
    }

    const filterData=(fieldName,filterValue)=>{
        try {
            fetch('/getFilters.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id:0
                })
                }).then(response => response.json() )
                .then(data => {
                    setdataFilterMenuCountry(data[0]);
                    setdataFilterMenuState(data[1]);
                    setdataFilterMenuCity(data[2]);
                    setloadingFilterMenu(false);
                })


        } catch (error) {
            console.log("database update api failed:" + error);
        }
    }

    
    function showData(item){
        let nameFirstLastChar = (item.Fname).charAt(0).toUpperCase()+(item.Lname).charAt(0).toUpperCase();
        return (
            <div class="row shadow p-3 bg-white rounded" style={{minHeight:70,justifyContent: 'center', alignItems: 'center', borderBottom: "1px solid rgb(212, 212, 212)"}}>
   
            <div class="col-sm-1 text-break">
                {imageComponent(nameFirstLastChar)}
            </div>
            <div class="col-sm-1 text-break">
                {item.Fname + " " + item.Lname}
            </div>
            <div class="col-sm-2 text-break">
                {item.company}
            </div>
            <div class="col-sm-2 text-break">
                {"house-"+item.houseNo +" , state: "+item.states+" , city: "+item.city+" , country: "+item.country}
            </div>
            <div class="col-sm-1 text-break">
                {item.telephone}
            </div>
            <div class="col-sm-2 text-break">
                {item.email}
            </div>
            <div class="col-sm-1 text-break">
                {item.mobile}
            </div>
            <div class="col-sm-1 text-break">
                <button type="button" class="btn btn-secondary" onClick={()=>{fetchDataSingleRow(item.id); setdisplayIndexPage("none"); setdisplayUpdatePage("block")}}>Modify</button>
          </div>
          <div class="col-sm-1 text-break">
                <button type="button" class="btn btn-danger" onClick={()=>deleteData(item.id)}>Delete</button>
          </div>
    
        </div>
        )
    }
    
    return (
            <div>
   
            <div style={{display:displayAddContactpage}}>
                <AddContact parentCallback = {handleCallback}/>
            </div>

            <div style={{display:displayUpdatePage}}>
                           <div className='container'>
                <div class="row justify-content-between p-2">
                    <div className="col-2">
                        <h2>Update Contact</h2>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-8">
                    <form className="shadow p-4 rounded needs-validation" id="form" onSubmit={onSubmitFormUpdate} novalidate>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" name="fname" placeholder="First name" value={fname} onChange={(val)=> setfname(val.value)} required/>
                        <div class="invalid-feedback">
                        Please provide a valid city.
                        </div>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" name="lname" placeholder="Last name" value={lname} onChange={(val)=> setlname(val.value)}  required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" class="form-control" name="companyName" value={companyName} onChange={(val)=> setcompanyName(val.value)}  placeholder="Company Name"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" name="telephone" value={telephone} onChange={(val)=> settelephone(val.value)}  placeholder="Telephone"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" name="mobile" value={mobile} onChange={(val)=> setmobile(val.value)} placeholder="Mobile"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="email" class="form-control" name="email" value={email} onChange={(val)=> setemail(val.value)} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" class="form-control" name="houseNo" value={houseNo} onChange={(val)=> sethouseNo(val.value)}  placeholder="House #/Road"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <input type="text" class="form-control" name="city" value={city} onChange={(val)=> setcity(val.value)}  placeholder="City"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" name="states" value={states} onChange={(val)=> setstates(val.value)}  placeholder="State"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control" name="country" value={country} onChange={(val)=> setcountry(val.value)}  placeholder="Country"/>
                        </div>
                    </div>
                    <div style={{color:'green', display:showSuccessMsg}}>Contact Added</div>
                    <div style={{color:'red', display:showErrorMsg}}>Upload Failed</div>
                    <div className="row mb-3 justify-content-between">
                        <div className="col-sm-1">
                            <button type="submit" class="btn btn-success shadow p-2 rounded" style={{marginRight:10}}>Update</button>
                        </div>
                        <div className="col-sm-2">
                        <button type="button" class="btn btn-danger shadow p-2 rounded" onClick={()=>{setdisplayIndexPage("block"); setdisplayUpdatePage("none")}}>Cancel</button>
                        </div>
                        
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            </div>


            <div class="container" style={{display:displayIndexPage}}>
                

                <div class="row justify-content-between p-2 mt-5">
                    <div className="col-2">
                        <h2>Contact</h2>
                    </div>

                    <div className="col-2">
                        <button type="button" class="btn btn-primary shadow p-2 rounded" onClick={() => {setdisplayAddContactpage(""); setdisplayIndexPage("none")}}>Create Contact</button>
                    </div>
                </div>

                <div class="row justify-content-between shadow-sm p-3 bg-white rounded">
                    <div className="col-12" style={{display:'flex', flexDirection:'row'}}>
                    <p>Filter By Country:</p> 
                        <select onChange={e => fetchData("country",e.target.value)} class="form-select" aria-label=".form-select-lg example" style={{width:150, borderRadius:50, marginLeft:20}}>
                        <option value="" selected>All Contact</option>
                            {countriesList}
                        </select>
                        <p>Filter By State:</p> 
                        <select onChange={e => fetchData("states",e.target.value)}  class="form-select" aria-label=".form-select-lg example" style={{width:150, borderRadius:50, marginLeft:20}}>
                        <option value="" selected>All Contact</option>
                        {stateList}
                        </select>
                        <p>Filter By City:</p> 
                        <select  onChange={e => fetchData("city",e.target.value)}  class="form-select" aria-label=".form-select-lg example" style={{width:150, borderRadius:50, marginLeft:20}}>
                        <option value="" selected>All Contact</option>
                        {cityList}
                        </select>
                    </div>

                </div>

                <div class="row shadow p-3 mb-3 mt-4 bg-white rounded" style={{fontWeight:'bold'}}>
                    <div class="col-sm-1">
                        
                    </div>
                    <div class="col-sm-1">
                        Name
                    </div>
                    <div class="col-sm-2">
                        Company
                    </div>
                    <div class="col-sm-2">
                        Address
                    </div>
                    <div class="col-sm-1">
                        Telephone
                    </div>
                    <div class="col-sm-2">
                        Email
                    </div>
                    <div class="col-sm-1">
                        Mobile
                    </div>
                    <div class="col-sm-1">
                      
                    </div>
                    <div class="col-sm-1">
                      
                    </div>
                </div>

                {loading==false ? (
                <div>
                    {data.map((item)=> 
                    showData(item))}
                </div>
            ):(
                <div>
                    <p>Loading</p>
                </div>
            )}
               


            </div>
            </div>
        )
        

}




function imageComponent(img){

        const colorArr = ['#D98880','#F5B7B1','#D7BDE2','#A9CCE3','#AED6F1','#A3E4D7','#AED6F1','#F9E79F','#AEB6BF','#D98880','#F5B7B1','#D7BDE2','#A9CCE3','#AED6F1','#A3E4D7','#AED6F1','#F9E79F','#AEB6BF'];
        let min = 1;
        let max = 18;
        let rand =  min + (Math.random() * (max-min));
        
        let choosenColor = colorArr[parseInt(rand)];
        return (
            <div class="rounded-circle" style={{height:40, width:40, backgroundColor:choosenColor, alignItems:'center'}}>
             
                <div style={{textAlign:'center', padding:5}}>{img}</div>

                
            </div>
        );
 
}

export default AppCorePage;