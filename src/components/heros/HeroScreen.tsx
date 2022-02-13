import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { useMemo } from 'react';
 
import '../../css/heroDetail.css'


export const HeroScreen = () => {

  const {id = ''} = useParams()
  const navigate = useNavigate()
  
  const hero = useMemo(() => getHeroById(id), [id])

  
  if (!hero) {
    return <Navigate to='/marvel'/>
  }

  const imagePath = `/assets/${id}.jpg`

  const handlenBack = () => {
    navigate(-1)
  }

  return (
    <>
        <div className='container-card-detail'>

          <div>
            <img className='img-card-detail' src={imagePath} alt={hero.superhero} />
          </div>

          <div className='container-letter-detail'>
            <h3>{hero.superhero}</h3>
            <p><span>Alter ego:</span>{hero.alter_ego}</p>
            <p><span>Publisher:</span>{hero.publisher}</p>
            <p><span>First Appearance:</span>{hero.first_appearance}</p>

            {
                (hero.alter_ego !== hero.characters)
                && <p><span>Character:</span>{hero.characters}</p> 
            }

            <button className='back' onClick={handlenBack}>Back</button>
          </div>

        </div>
    </>
  )
}
