import React from 'react'

const card = (props) => {
  return (
    <div>
            <div className="card">
        <div className='cardImage'>
          <img src= {props.image} alt="" />
        </div>
        <div className="details">
          <h1>{props.name}</h1>
          <h3> {props.location} </h3>
        </div>
        <div className="about">
          <h4>{props.tags[0]}</h4>
          <h4>{props.tags[1]}</h4>
          <h4>{props.tags[2]}</h4>
        </div>
        <div className="contact">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />
          <span>{props.facebook}</span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDM0wy1qLzY1q4Nm-WLgHKez5m4wLC5impVdKonNPCSQ&s" alt="" />
          <span>{props.twitter}</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png?utm_source=hi.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />
          <span>{props.instagram}</span>
        </div>
      </div>
      
    </div>
  )
}

export default card
