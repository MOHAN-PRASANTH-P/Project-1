import { useState } from 'react'
import image from "./assets/Image1.avif"
import './App.css'


function App() {

  const [skills,setSkills] = useState("SKILLS");
  const [skillstyle,setSkillstyle] = useState(false);
  const [back,setBack] = useState(false);

  function handleSkill() {
    setSkills(
      <ol>
        <li>Mongo DB</li>
        <li>Express JS</li>
        <li>React JS</li>
        <li>Nord JS</li>
      </ol>
    );
    setSkillstyle(!skillstyle);
  }
  
  return (
    <>
    <div>
      <div className="top-about">
        <ul>
          <li onClick={handleSkill} className={`skill-style${skillstyle ? "-active" : ""}`}>{skills}</li>
          <li className={`about-style${skillstyle ? "-active" : ""}`}>ABOUT</li>
          <li className={`service-style${skillstyle ? "-active" : ""}`}>SERVICES</li>
          <li className={`blog-style${skillstyle ? "-active" : ""}`}>BLOG</li>
          <li className={`more-style${skillstyle ? "-active" : ""}`}>MORE</li>
        </ul>
      </div>
        <div className='contact-button'>
          <button>CONTACT</button>
        </div>
      <div className='Image'>
        <img src={image}/>
      </div>
      <div className='codewithrandom'>
        <h3>CODE WITH RANDOM</h3>
        <p>I'm a Web</p>
        <a>Developer</a>
      </div>
      <div className="paragraph">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim sed aperiam a, possimus quod id esse eius ipsa tempora tenetur, veritatis ullam iure mollitia tempore sit molestias velit optio reiciendis voluptatum. Quis laboriosam consectetur quisquam sed in quo. Ad atque quia id! Distinctio nihil, quo nemo, velit praesentium provident quos consequuntur ea obcaecati ex sapiente quis sint. Minus, tenetur?</p>
      </div>
      <div className='download'>
        <button>DOWNLOAD CV</button>
      </div>
    </div>
    </>
  )
}

export default App
