import { hero } from '../../interfaces/heroInterface';
import { Link } from 'react-router-dom';

import '../../css/hero.css'

type Props = {
  hero: hero
}

export const HeroeCard = ({hero} : Props) => {

  const {alter_ego, characters,id,superhero} = hero

  const imagePath = `/assets/${id}.jpg`

  return (
    <>
        <div className='card'>
          <div>
              <img className='img-card' src={imagePath} alt={superhero} />
          </div>

          <div className='container-letter-card'>
              <h3>{superhero}</h3>
              <p>{alter_ego}</p>

              {
                (alter_ego !== characters)
                && <p className='character'>{characters}</p> 
              }

              <Link 
              to = {`/hero/${id}`}
              className='more'
              >More...</Link>
          </div>
        </div>
    </>
  )
}
