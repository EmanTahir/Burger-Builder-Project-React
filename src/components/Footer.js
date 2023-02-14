import React, { useState } from 'react'

export default function Footer() {
  const [currprice, setCurrprice] = useState(3.00)
  return (
    <div className='container-fluid' style={{ height: '40vh', backgroundColor: '#cf8f2e', position: 'relative', top: '80vh', display: 'flex' }}>
      <section style={{ display: 'row', alignContent: 'center', alignItems: 'center' }}>
        <div>
          Current Price: <strong>$ {currprice} </strong>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <strong>Lettuce</strong>
            </div>
            <div class="col-sm">
              One of three columns
            </div>
            <div class="col-sm">
              One of three columns
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
