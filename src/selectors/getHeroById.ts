import { heroes } from "../data/heroeData"


export const getHeroById = (id : string) => {
  
    return heroes.find(hero => hero.id === id)
    
}
