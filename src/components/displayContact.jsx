import React, {Component, useState, useEffect } from 'react';
import AddContact from './addContact';
import UpdateContact from './updateContact';


const AppCorePage=()=>{
    const [displayAddContactpage, setdisplayAddContactpage] = useState("none");
    const [displayUpdatePage, setdisplayUpdatePage] = useState("none");
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
            <div class="row shadow-sm p-3 bg-white rounded" style={{minHeight:70,justifyContent: 'center', alignItems: 'center', borderBottom: "1px solid rgb(212, 212, 212)"}}>
   
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
                <button type="button" class="btn btn-secondary" >Modify</button>
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



            <div class="container" style={{display:displayIndexPage}}>
                
                
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
                        <button type="button" class="btn btn-primary shadow p-2 rounded" onClick={() => {setdisplayAddContactpage(""); setdisplayIndexPage("none")}}>Create Contact</button>
                    </div>
                </div>

                <div class="row justify-content-between p-2">
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

                <div class="row shadow-sm p-3 mb-2 bg-white rounded" style={{fontWeight:'bold'}}>
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
                        TelePhone
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