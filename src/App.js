import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Reserve from './components/Reserve';
import { useReducer, useState, useEffect } from 'react';
import BookingConfirmed from './components/BookingConfirmed';
import { useNavigate } from 'react-router-dom';
import About from './components/About'

function App() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({})

  useEffect(() => {
    console.log('this is formdata',formData)
    localStorage.setItem('bookingDetails',JSON.stringify(formData))
  }, [formData])
  

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const submitHandler=(e)=>{
  e.preventDefault()
  console.log('form is submitted')
  if(formData){
    const val = submitAPI(formData)
  if(val){
      navigate('/success')
  }
  }
  
}

  const currentDate = new Date();
 

  const updateTimes =(state, action) =>{
    if (Object.values(state).indexOf(action) > -1){
     
      delete state.selectedVal;
    
      return({
        selectedVal:action,
        ...state
      })
    } 
    else{
      const date = new Date(action)
      if(date<currentDate){
        return({selectedVal:'none'})
      }
      else{
        const output = fetchAPI(date)
    return({
      selectedVal:'',
      ...output

    })
      }
      
    }
    
  }

  const initialTime = () =>{
    const output = fetchAPI(currentDate)
    return({
      selectedVal:'',
      ...output

    })
  }

  const [time, dispatch] = useReducer(updateTimes, initialTime());
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/reserve' element={<Reserve time={time} dispatch={dispatch} submitHandler= {submitHandler} setFormData={setFormData}/>}/>
        <Route path ='/success' element={<BookingConfirmed/>}/>
      </Routes>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
