import { ChangeEvent, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroByName } from '../selectors/getHeroByName';
import { HeroeCard } from "./heros/HeroeCard";
import queryString from 'query-string'

import '../css/search.css'


interface InitialValue {
    value: string | undefined
}

export const InputSearch = () => {
    
    const navigate = useNavigate()
    const location = useLocation()
    
    const {q = ''} = queryString.parse(location.search)

    const [state, setState] = useState<InitialValue>({
        value: q?.toString()
    })
    
    const {value} = state
    const heroFilter= useMemo(() => getHeroByName(q?.toString()), [q])
    

    const handlenChange = ({target}: ChangeEvent<HTMLInputElement> ) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    const handlenSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`?q=${value}`)
        setState({value: ''})
    }

  return (
    <div className="container-form">
        <form onSubmit={handlenSubmit}>
        <i className="fas fa-search"></i>
            <input 
                type="search" 
                name="value" 
                placeholder="Search"
                onChange={handlenChange}
                value={value}
                autoComplete="off"
            />
            <button className="btn-search">Search</button>
        </form>
        <div>
            {
                (q==='')? '' : (heroFilter.length === 0) && <img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/1273880a5b9cc8008301089835f37939.gif" alt="No Found" />
            }
        </div>
        <div className="result">
           {
               (
                (
                    heroFilter.map(hero => (
                        <HeroeCard key={hero.id} hero={hero}/>
                    ))
                )
            )
           }
        </div>
    </div>
  )
}
