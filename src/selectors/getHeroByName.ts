import { heroes } from '../data/heroeData';



export const getHeroByName = (name: string = '') => {

    name = name.toLowerCase()

    if (name.length === 0) {
        return []
    }

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))


}
