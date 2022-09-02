import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import style from './app.module.scss'
import SearchBar from '../components/search_bar/search_bar'
import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import PokemonImage from '../components/pokemon_image/pokemon_image'
import PokemonStats from '../components/pokemon_stats/pokemon_stats'
import { pokemonDataType } from '../data_types/data_types'

const App = () => {
  const [pokemonData, setPokemonData] = useState<pokemonDataType>({
    name: "",
    base_experience: 0,
    height: 0,
    weight: 0,
    sprites: {
      other: {
        "official-artwork": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
        }
      }
    },
    types: [],
    stats: []
  })

  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <Container maxWidth="md">
          <Card sx={{ height: '80vh' }}>
            <CardContent>
              <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                  <SearchBar updateDataAction={setPokemonData} />
                </Grid>
                <Grid item xs={4}>
                  <PokemonImage src={pokemonData.sprites.other['official-artwork']['front_default']} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4" className={style.pokemonName}>{pokemonData.name}</Typography>
                </Grid>
                <Grid item xs={12} visibility={pokemonData.name ? 'visible' : 'hidden'}>
                  <PokemonStats pokemonData={pokemonData} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </header>
    </div>
  )
}

export default App
