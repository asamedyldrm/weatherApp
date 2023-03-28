import axios from 'axios';
import { useEffect , useState } from 'react';
import './App.css';
import City from './City'

function App() {

  const key = 'd3eec13c37f74833bb024119232703'
  const [search, setSearch] = useState("")
  const [city, setCity] = useState()
 
  useEffect(()=>{
    async function getUser() {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${search}`);
        const response2 = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=Bursa`);

        console.log(response2)
        setCity(response)
        
      } catch (error) {
        console.error(error);
      }
    }
    getUser();

  }, [search])
 


  return (
    <div className="App  w-full h-screen box-border flex justify-center items-center">
      <input placeholder='Bir şehir yaz...' onChange={(e)=> {setSearch(e.target.value)}} 
      className='absolute flex flex-col justify-center items-center top-10 rounded-3xl w-2/5 box-border border border-black-400 px-5 p-2 max-md:w-3/4' 
      type="text" />
      <City city= {city} />
    </div>
  );
}

export default App;
