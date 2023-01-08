type SearchProps = {
    loadUser: (userName:string) => Promise<void>;
}

import { useState, KeyboardEvent } from 'react'

import { BsSearch } from 'react-icons/bs'

import classes from './Search.module.css';

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

  return (
    <div className={classes.search}>
        <h2>Busque por um usuário:</h2>
        <p>Conheça meu melhores respositórios</p>
        <div className={classes.search_container}>
            <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => setUserName(e.target.value)} className={classes.search_container_input} onKeyDown={handleKeyDown}/>
            <button onClick={() => loadUser(userName)} className={classes.search_container_button}>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search