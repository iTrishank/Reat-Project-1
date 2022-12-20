import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="#home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets Build Something amazing with GPT-3 OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistence indulgence unplesing. Not
          thoughts all excerside blessing. Indulgence everything joy alternation
          boisterous the attachment. Party we years to order allow asked of.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1690 people requested access a visir in last 24 hours</p>
        </div>

        {/* <div className="gpt3__header-image">
          <img src={ai} alt="Ai" />
        </div> */}
      </div>
    </div>
  )
}

export default Header
