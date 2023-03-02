import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BookingConfirmed = () => {
    const [values, setvalues] = useState()
    useEffect(()=>{
        setvalues(JSON.parse(localStorage.getItem('bookingDetails')));
        console.log('this is booking confirmed',JSON.parse(localStorage.getItem('bookingDetails')) )

    },[])
  return (
    <div className='reservation-form'>
    <h2>Booking Confirmed!</h2>
    <img src=''/>
    <div className='booking-details'>
        <p style={{fontSize:'30px', fontWeight:'bold', marginBottom:'15px'}}>Booking Details</p>
        <p>Date: {values?.date}</p>
        <p>Time: {values?.time}</p>
        <p>Number of Guests: {values?.guests}</p>
        <p>Ocassion: {values?.occasion}</p>

        <Link to='/'>
        <button id='submit-btn'>Home</button>
        </Link>
        
    </div>
</div>
  )
}

export default BookingConfirmed