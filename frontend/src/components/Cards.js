import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Kheops-Pyramid.jpg'
              text='Great Pyramid of Giza'
              label='EGYPT'
              path='/seyahat'
            />
            <CardItem
              src='images/Stonehenge2007_07_30.jpg'
              text='Stonehenge'
              label='United Kingdom'
              path='/seyahat'
            />
          
            <CardItem
              src='images/Lighthouse_-_Thiersch.jpg'
              text='Lighthouse of Alexandria'
              label='Egypt'
              path='/seyahat'
            />
            <CardItem
              src='images/Hanging_Gardens_of_Babylon.jpg'
              text='Hanging Gardens of Babylon'
              label='Iraq'
              path='/seyahat'
            />
            <CardItem
              src='images/Hagia_Sophia_Mars_2013.jpg'
              text='Hagia Sophia'
              label='Turkey'
              path='/seyahat'
            />
            <CardItem
              src='GettyImages-514887778-5bae4689c9e77c0051167c9e.jpg'
              text='Colossus of Rhodes  '
              label='Greece'
              path='/seyahat'
            />
            <CardItem
              src='images/Mausoleum_at_Halicarnassus_at_the_Bodrum_Museum_of_Underwater_Archaeology.jpg'
              text='Mausoleum at Halicarnassus'
              label='Turkey'
              path='/seyahat'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Statue of Zeus at Olympia'
              label='Greece'
              path='/seyahat'
            />
            <CardItem
              src='images/Miniaturk_009.jpg'
              text='Temple of Artemis at Ephesus'
              label='Turkey'
              path='/seyahat'
            />
            <CardItem
              src='images/GoldenGateBridge-001.jpg'
              text='Golden Gate Bridge'
              label='United States'
              path='/seyahat'
            />
            <CardItem
              src='images/Toronto_-_ON_-_Toronto_Harbourfront7.jpg'
              text='CN Tower'
              label='Canada'
              path='/seyahat'
            />
            <CardItem
              src='images/TGV_TMST_3011-2_-_Sortie_Tunnel_sous_la_Manche_à_Coquelles.jpg'
              text='Channel Tunnel'
              label='English Channel'
              path='/seyahat'
            />
            <CardItem
              src='images/tugboat-one-ship-locks-Panama-Canal.jpg'
              text='Panama Canal'
              label=' Panama'
              path='/seyahat'
            />
            <CardItem
              src='images/Empire_State_Building_(aerial_view).jpg'
              text='Empire State Building'
              label='United States'
              path='/seyahat'
            />
            <CardItem
              src='images/Itaipu_geral.jpg'
              text='Itaipu Dam'
              label=' Panama'
              path='/seyahat'
            />
            <CardItem
              src='images/Colosseo_2020.jpg'
              text='Colosseum'
              label='Italy'
              path='/seyahat'
            />
            <CardItem
              src='images/113KOM_EL_SHOQAFA_CATACOMBS.jpg'
              text='Catacombs of Kom el Shoqafa'
              label=' Egypt'
              path='/seyahat'
            />
            <CardItem
              src='images/The_Great_Wall_of_China_at_Jinshanling-edit.jpg'
              text='Great Wall of China'
              label=' China'
              path='/seyahat'
            />
            <CardItem
              src='images/Chichen_Itza_3.jpg'
              text='Chichen Itza'
              label='Mexico'
              path='/seyahat'
            />
            

            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;