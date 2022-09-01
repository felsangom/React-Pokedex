import React, { KeyboardEvent, useState } from 'react'
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import { Refresh, Search } from '@mui/icons-material'
import style from './search_bar.module.scss'

type searchBarProps = {
  updateDataAction: Function
}

const SearchBar = (props: searchBarProps) => {
  const [ searchString, setSearchString ] = useState('')
  const [ searching, setSearching ]  = useState(false)

  const handleEnterPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  }

  const handleSearch = () => {
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

  const renderSearchButton = () => {
    return (
      <IconButton aria-label='search pokémon'  onClick={(event) => handleSearch()}>
        <Search />
      </IconButton>
    )
  }

  const renderSearchingAnimation = () => {
    return (
      <IconButton aria-label='searching pokémon'>
        <Refresh className={style.refreshIcon} />
      </IconButton>
    )
  }

  return (
    <Box>
      <FormControl sx={{ width: '50%' }} variant="standard">
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
    </Box>
  )
}

export default SearchBar