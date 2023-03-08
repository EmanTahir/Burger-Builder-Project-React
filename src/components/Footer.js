import React, { useState } from 'react'
import '../App.css';


export default function Footer() {
  const [currprice, setCurrprice] = useState(3.00)
  return (
    <div className='container-fluid footerStyle justify-content-center' >
      <section className='burgerItems'>
        <div>
          <p style={{textAlign: 'center'}}>Current Price: <strong>${currprice} </strong> </p>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-3"><p><strong>Lettuce</strong></p></div>
            <div className="col-4"><button className='bLess' >Less</button></div>
            <div className="col-4"><button className='bMore'>More</button></div>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-3"><p><strong>Bacon</strong></p></div>
            <div className="col-4"><button className='bLess' >Less</button></div>
            <div className="col-4"><button className='bMore'>More</button></div>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-3"><p><strong>Cheese</strong></p></div>
            <div className="col-4"><button className='bLess' >Less</button></div>
            <div className="col-4"><button className='bMore'>More</button></div>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-3"><p><strong>Meat</strong></p></div>
            <div className="col-4"><button className='bLess' >Less</button></div>
            <div className="col-4"><button className='bMore'>More</button></div>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-11"><button type="button" class="orderBtn text-nowrap">Sign Up to Order</button></div>
          </div>
        </div>

      </section>
    </div>
  )
}
