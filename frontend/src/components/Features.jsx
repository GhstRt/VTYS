import React from 'react';
import featureimage from '../images/AI.png';

function Features() {
  return (
    <div id='features'> 
        <div className='features-model'>
        <img src={featureimage} alt='feature-image'/>
        </div>
        <div className='features-text'>
            <h2>Chat GPT</h2>
            <h3>Burada <span>CHATGPT</span> eklentisi var</h3>
            <p>nasıl gidilir?</p>
            <button>Nasıl Giderim</button>
        </div>
        
    
    </div>
        

  )
}

export default Features;
