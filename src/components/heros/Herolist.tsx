import { useMemo } from 'react';
import { hero } from "../../interfaces/heroInterface"
import { getHeroByPublisher } from "../../selectors/getHeroByPublishe"
import { HeroeCard } from "./HeroeCard"

import '../../css/hero.css'

type Props = {
    publisher: string
}

export const Herolist = ({publisher}:Props) => {

    const heros:hero[] =  useMemo(() => getHeroByPublisher(publisher), [publisher])

  return (
    <>
        <div className="container-hero-card">
                {
                    heros.map(hero => (
                        <HeroeCard 
                            key={hero.id}
                            hero = {hero}
                        />
                    ))
                }
        </div>
    </>
  )
}
