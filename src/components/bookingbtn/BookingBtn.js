import { Call, PhoneAndroid } from '@material-ui/icons'
import React from 'react'
import './bookingbtn.css'

const BookingBtn = () => {
  return (
    <div className='bookingbtn'>
      <div className='bookingbtn-wrapper'>
        <h5>Purple touch contact</h5>
        <p>for proffesional  beauty sessions</p>
        <div>
          <label htmlFor="phone">
            <PhoneAndroid/>
            <a href="tel:+" id='phone'>+(254)-7233-41899</a>
          </label>
          <label htmlFor="phone">
            <Call/>
            <a href="tel:+" id='phone'>+(254)-7233-41899</a>
          </label>
        </div>
      </div>
    </div>
  )
}

export default BookingBtn