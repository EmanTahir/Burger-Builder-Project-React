import React from 'react'

export default function Burger() {
    const up = {
        height: '25%',
        background: 'linear-gradient(#bc581e,#e27b36)',
        marginTop: '2%',
        width: '50%',
        borderRadius: '50% 50% 0 0',
    }
    const down = {
        height: '20%',
        background: 'linear-gradient(#bc581e,#e27b36)',
        marginTop: '2%',
        width: '50%',
        borderRadius: '0 0 40% 40%',
        bottom: '0px',
    }
  return (
    <div className='container d-flex flex-column justify-content-center ' style={{height: '50vh', width: '100%', position: 'relative'}} >
      <div className='container position-relative' style={up}>
        <div className='position-absolute' style={{height: '10%', width: '5%', backgroundColor: 'white',  rotate: '30deg', marginTop: '50px'}}></div>
        <div className='position-absolute' style={{height: '10%', width: '5%', backgroundColor: 'white',  rotate: '60deg', marginTop: '40px', marginLeft: '80px'}}></div>
        <div className='position-absolute' style={{height: '10%', width: '5%', backgroundColor: 'white',  rotate: '30deg', marginTop: '40px',  marginLeft: '500px'}}></div>
        <div className='position-absolute' style={{height: '10%', width: '5%', backgroundColor: 'white',  rotate: '60deg', marginTop: '40px', marginLeft: '400px'}}></div>
        <div className='position-absolute' style={{height: '10%', width: '5%', backgroundColor: 'white',  rotate: '30deg', marginTop: '40px',  marginLeft: '300px'}}></div>
        <div className='position-absolute' style={{height: '10%', width: '5%', backgroundColor: 'white',  rotate: '130deg', marginTop: '40px', marginLeft: '200px'}}></div>
        <div className='position-absolute' style={{height: '10%', width: '5%', backgroundColor: 'white',  rotate: '130deg', marginTop: '50px', marginLeft: '570px'}}></div>
      </div>
      <p style={{textAlign: 'center', marginTop: '50px'}}><h5><strong>No Ingredients Added</strong></h5></p>
      <div className='container' style={down}></div>
    </div>
  )
}
