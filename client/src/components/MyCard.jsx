import React from 'react'

const MyCard = (props) => {
  debugger
  return (
    <div
      className='card m-2 {`card border-${props.border}`}'
      style={{ width: '18rem', cursor: 'pointer', ...props.style }}
    >
      <img
        src='https://storage.yandexcloud.net/itech-media/images/products/2022/9/786de063158e11ecb2c03cecef20832b_465c3607159b11ecb2c03cecef20832b.png'
        className='card-img-top'
        alt='Picture here'
      />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button 
          onClick={props.onClick} href='#' 
          className='btn btn-primary ' >
          Go somewhere
        </button>
      </div>
    </div>
  )
}


export default MyCard