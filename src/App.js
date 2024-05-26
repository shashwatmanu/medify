import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import { useState, createContext } from "react";
import BookingsPage from './Pages/BookingsPage';
import { SnackbarProvider } from 'notistack'
import { useEffect } from 'react';
import axios from "axios";


export const UserContext = createContext()
 


function App() {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([]);
  const [selectedHospitals, setSelectedHospitals] = useState((localStorage.getItem('selectedhospitals'))?(JSON.parse(localStorage.getItem('selectedhospitals'))):[]);

  useEffect(()=>{
localStorage.setItem('selectedhospitals', JSON.stringify(selectedHospitals));
  },[selectedHospitals])
  
  const fetchStates = async()  =>{
    let res = await axios.get('https://meddata-backend.onrender.com/states');
    setStates(res.data);
}  

useEffect(()=>{
fetchStates();
},[])
  
  return (
   <>
   <SnackbarProvider>
   <BrowserRouter>
   <UserContext.Provider value={{states, setStates, cities, setCities, selectedHospitals, setSelectedHospitals}}>
   <Routes>
   
   <Route exact path="/" Component={HomePage}></Route> 
    
    <Route path="/search" Component={SearchPage}></Route>
    <Route path="/bookings" Component={BookingsPage}></Route>
   </Routes>
   </UserContext.Provider>
   </BrowserRouter>
   </SnackbarProvider>
   
   </>
  );
}

export default App;

