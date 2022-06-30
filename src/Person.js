import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

function Person({position,image,name,title,quote,id}) {
    return (
      <article className={position} key = {id}>
        <img src = {image} alt = {name} className="person-img"></img>
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon"></FaQuoteRight>
      </article>
    )
}

export default Person