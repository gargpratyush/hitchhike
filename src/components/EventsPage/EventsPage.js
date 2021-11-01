import React from 'react'
import './stylesheet2.css'

import EnglishPoetry from './Events_Cards/EnglishPoetry.png'
import HindiPoetry from './Events_Cards/HindiPoetry.png'
import IMeMyself from './Events_Cards/IMeMyself.png'
import notes from './Events_Cards/Notes.png'
import Nrityakala from './Events_Cards/Nrityakala.png'
import Panache from './Events_Cards/Panache.png'
import PictureTale from './Events_Cards/PictureTale.png'
import SFIdol from './Events_Cards/SFIdol.png'
import ShakeLeg from './Events_Cards/ShakeLeg.png'
import Shuffle from './Events_Cards/SHUFFLE.png'
import Tango from './Events_Cards/TANGO.png'
import SFLogo from './SFLogo.png'
import { LocationCity } from '@material-ui/icons'
import mainBg from './Event_City_Bg/mainbackground.png'
import blueBg from './Event_City_Bg/bluebackground.png'

function EventsPage({city}) {
    return (
        <div className="external">
        <div className="horizontal-scroll-wrapper"
         style={{ background: `url(${mainBg}), url(${city.imagebg}), url(${blueBg}`, backgroundSize: "auto 100%" }}
         >
          
          <div className="city-desc">
            <h1>
            {city.name}
            </h1>
            <p>
            {city.desc}
            </p>
          </div>
          
          <div className="card-container">
            <div></div>
            <div className="img-wrapper" id="EnglishPoetry">
              <a href="" rel="noopener">
                <img src={EnglishPoetry} alt="English Poetry Slam"/>
                <p>English Poetry Slam</p>
              </a>
            </div>
        
            <div className="img-wrapper" id="notes">
              <a href="" rel="noopener">
                <img src={notes} alt="Notes Less Travelled"/>
                <p>Notes Less Travelled</p>
              </a>
            </div>
        
            <div className="img-wrapper" id="SFIdol">
              <a href="" rel="noopener">
                <img src={SFIdol} alt="SF Idol"/>
                <p>SF Idol</p>
              </a>
            </div>
        
            <div className="img-wrapper" id="Nrityakala">
              <a href="" rel="noopener">
                <img src={Nrityakala} alt="Nrityakala"/>
                <p>Nrityakala</p>
              </a>
            </div>
            
            <div className="img-wrapper" id="IMeMyself">
              <a href="" rel="noopener">
                <img src={IMeMyself} alt="I Me Myself"/>
                <p>I Me Myself</p>
              </a>
            </div>
            
            <div className="img-wrapper wide" id="PictureTale">
              <a href="" rel="noopener">
                <img src={PictureTale} alt="Picture Tale"/>
                <p>A Picture Tale</p>
              </a>
            </div>
        
            <div className="img-wrapper wide" id="HindiPoetry">
              <a href="" rel="noopener">
                <img src={HindiPoetry} alt="Hindi Poetry"/>
                <p>Hindi Poetry Slam</p>
              </a>
            </div>
        
            <div className="img-wrapper" id="Tango">
              <a href="" rel="noopener">
                <img src={Tango} alt="Two for A Tango"/>
                <p>Two for A Tango</p>
              </a>
            </div>
        
            <div className="img-wrapper wide" id="ShakeLeg">
              <a href="" rel="noopener">
                <img src={ShakeLeg} alt="Shake A Leg"/>
                <p>Shake A Leg</p>
              </a>
            </div>
            
            <div className="img-wrapper" id="Shuffle">
              <a href="" rel="noopener">
                <img src={Shuffle} alt="Shuffle"/>
                <p>Shuffle</p>
              </a>
            </div>

            <div className="img-wrapper" id="Panache">
              <a href="" rel="noopener">
                <img src={Panache} alt="Panache"/>
                <p>Panache</p>
              </a>
            </div>

          </div>
        </div>
        <div className="logo"><img href="google.com" src={SFLogo} alt="Spring Fest Logo"/>Try scrolling←</div>
      </div>
    )
}

export default EventsPage
