import React from 'react'
import './Footer.css'
import Facebook from '../icons/facebook-official.png'
import Twitter from '../icons/twitter.png'

function Footer() {
  return (
    <div className='footer'>
      <p>Copyright 	&#169;, PT Company</p>
      <div className='socialmedia'>
            <ul>
                <li><a href=""><img src={Facebook} /></a></li>
                <li><a href=""><img src={Twitter} /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer