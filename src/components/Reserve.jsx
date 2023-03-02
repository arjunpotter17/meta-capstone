import React, { useEffect } from 'react'
import { useState } from 'react';


const Reserve = ({ time, dispatch, submitHandler, setFormData }) => {


    const [dateBorder, setDateBorder] = useState(false)

    const currentDate = new Date();

    const handleer = (e) => {
        const returnObj = {
            date,
            time: time.selectedVal,
            guests,
            occasion
        }

        console.log('this is returbObj', returnObj);
        setFormData(returnObj);
        submitHandler(e)
        setDate();
        setGuests();
        setOccasion('-')
        setDateBorder(false)

    }



    console.log('this is the time received in reserve', time)
    let valArray = []
    for (const key in time) {
        valArray.push(time[key])
    }


    const [date, setDate] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState('-');


    useEffect(() => {
        const inputDate = new Date(date)
        if (inputDate < currentDate) {

            setDateBorder(true)
            console.log('not valid date')
        }
        else {
            setDateBorder(false)
        }

    }, [date])




    return (
        <div className='reservation-form'>
            <h2>Table Reservation Form</h2>
            <form style={{ display: 'grid', maxWidth: '400px', gap: '20px' }} aria-label="On submit" onSubmit={(e) => { handleer(e) }}>
                <label htmlFor="res-date">Choose date
                    <input type="date" className={dateBorder ? 'red-border' : ''} value={date} aria-label="On change" onChange={(e) => { setDate(e.target.value); dispatch(e.target.value) }} id="res-date" />
                </label>
                <label htmlFor="res-time">Choose time
                    <select id="res-time " value={time.selectedVal} aria-label="On change" onChange={(e) => dispatch(e.target.value)}>
                        {valArray.map(value => (<option key={value}>{value}</option>))}
                    </select>
                </label>
                <label htmlFor="guests">Number of guests
                    <input type="number" value={guests} aria-label="On change" onChange={(e) => setGuests(e.target.value)} placeholder="1" min="1" max="10" id="guests" />
                </label>
                <label htmlFor="occasion">Occasion
                    <select id="occasion" value={occasion} aria-label="On change" onChange={(e) => setOccasion(e.target.value)}>
                        <option>-</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>None</option>
                    </select>
                </label>
                <input type="submit" id={dateBorder || guests < 1 || !time || occasion =='-' ? 'gray-button' : 'submit-btn'} value="Make Your reservation" />
            </form>
        </div>
    )
}

export default Reserve