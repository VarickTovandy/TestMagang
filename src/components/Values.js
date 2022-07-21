import React from 'react'
import './Values.css'
import innovative from '../icons/lightbulb-o.png'
import loyalty from '../icons/bank.png'
import respect from '../icons/balance-scale.png'

function values() {
  return (
    <div className='container'>
        <h1>OUR VALUES</h1>
        <div className='values'>
            <div className='arrowBox red'>
                <img src={innovative} />
                <h2>INNOVATIVE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='arrowBox green'>
                <img src={loyalty} />
                <h2>LOYALTY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='arrowBox blue'>
                <img src={respect} />
                <h2>RESPECT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default values