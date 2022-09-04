import { KeyboardEvent, useState } from 'react'
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import { Refresh, Search } from '@mui/icons-material'
import style from './searchBar.module.scss'

type searchBarProps = {
  updateDataAction: Function
}

const SearchBar = (props: searchBarProps): JSX.Element => {
  const [ searchString, setSearchString ] = useState('')
  const [ searching, setSearching ]  = useState(false)

  const handleEnterPress = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSearch()
    }
  }

  const handleSearch = (): void => {
    if (searching) return

    setSearching(true)

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchString.toLocaleLowerCase()}`).then(response => {
      return response.json()
    }).then(pokemonData => {
      props.updateDataAction(pokemonData)
      setSearching(false)
    }).catch(error => {
      setSearching(false)
      console.log(error)
    })
  }

  const renderSearchButton = (): JSX.Element => {
    return (
      <IconButton aria-label='search pokémon'  onClick={_ => handleSearch()}>
        <Search />
      </IconButton>
    )
  }

  const renderSearchingAnimation = (): JSX.Element => {
    return (
      <IconButton aria-label='searching pokémon'>
        <Refresh className={style.refreshIcon} />
      </IconButton>
    )
  }

  return (
    <FormControl variant="standard" sx={{ width: '100%' }}>
      <InputLabel htmlFor='search-field' variant='standard'>Search for a Pokémon by name or number...</InputLabel>
      <Input
        id='search-field'
        type='text'
        role='search'
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
        onKeyDown={(event) => handleEnterPress(event)}
        endAdornment={
          <InputAdornment position='end'>
            { searching ? renderSearchingAnimation() : renderSearchButton() }
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default SearchBar
