import React from 'react'
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import { Search } from '@mui/icons-material'

type searchBarProps = {
  searchAction: Function
}

const SearchBar = (props: searchBarProps) => {
  return (
    <Box>
      <FormControl sx={{ width: '50%' }} variant="standard">
        <InputLabel htmlFor='search-field' variant='standard'>Search for a Pokémon by name or number...</InputLabel>
        <Input
          id='search-field'
          type='text'
          role='search'
          endAdornment={
            <InputAdornment position='end'>
              <IconButton aria-label='search pokémon'>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  )
}

export default SearchBar