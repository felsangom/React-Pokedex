import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import style from './app.module.scss'
import SearchBar from '../components/searchBar/searchBar'
import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import PokemonImage from '../components/pokemonImage/pokemonImage'
import PokemonStats from '../components/pokemonStats/pokemonStats'
import { pokemonDataType, pokemonSpeciesType } from '../dataTypes/dataTypes'

const App = () => {
  const [pokemonDescription, setPokemonDescription] = useState("")
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
    stats: [],
    species: {
      url: ""
    }
  })

  useEffect(() => {
    if (pokemonData.species.url) {
      fetch(pokemonData.species.url).then(response => {
        let pokemonSpecies = response.json() as unknown as pokemonSpeciesType
        return pokemonSpecies
      }).then(speciesData => {
        let englishFlavorText = speciesData.flavor_text_entries.filter(entry => entry.language.name === 'en')[0].flavor_text
        setPokemonDescription(englishFlavorText)
      }).catch(_ => {
        setPokemonDescription("")
      })
    }
  }, [ pokemonData ])

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
                { pokemonData.name &&
                  <Grid item xs={4}>
                    <Typography variant="h4" className={style.pokemonName}>{pokemonData.name}</Typography>
                    <Typography variant="subtitle1" component="pre">{pokemonDescription.replace("\u000c", ' ')}</Typography>
                  </Grid>
                }
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
