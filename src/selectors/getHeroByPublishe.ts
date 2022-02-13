import { heroes } from '../data/heroeData';


export const getHeroByPublisher = (publisher: string ) => {

  return  heroes.filter(hero => hero.publisher === publisher)

}
