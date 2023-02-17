
import {useState,useEffect} from 'react'
function App() {
  const [search,setSearch]=useState("");
  const [apidata,setApidata]=useState();

  useEffect(()=>{
    const fetchData=async()=>{
      const res= await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e63f307dc798d293247eb8b9d0c6acd8`)
      const data=await res.json()
    
    if(res.ok){
      setApidata(data)
    }
    }
    
    fetchData()
  },[search])

  return (
    <div>
    <h1>Weather App</h1>
      <input type='text' name="search" placeholder="Enter city" onChange={(e)=>setSearch(e.target.value)} value={search}/>
      {apidata? (<div>
         <p><span>Name : {apidata.name}</span></p>
         <p><span>Max Temp : {apidata.main.temp_max}</span></p>
         <p><span>Min Temp : {apidata.main.temp_min}</span></p>
         <p><span>Country : {apidata.sys.country}</span></p>
        </div>)
        :
        (<p>Result not found</p>)
      }
    </div>
  );
}

export default App;
