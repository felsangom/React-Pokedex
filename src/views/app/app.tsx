import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import style from './app.module.scss'
import SearchBar from '../components/searchBar/searchBar'
import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import PokemonImage from '../components/pokemonImage/pokemonImage'
import PokemonStats from '../components/pokemonStats/pokemonStats'
import { pokemonData, pokemonSpecies } from '../dataTypes/dataTypes'

const App = (): JSX.Element => {
  const [pokemonDescription, setPokemonDescription] = useState("")
  const [pokemonData, setPokemonData] = useState<pokemonData>({
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

  const [pokemonSpecies, setPokemonSpecies] = useState<pokemonSpecies>({
    base_happiness: 0,
    capture_rate: 0,
    color: {
      name: ""
    },
    evolution_chain: {
      url: ""
    },
    flavor_text_entries: [{
      flavor_text: "",
      language: {
        name: ""
      },
      version: {
        name: ""
      }
    }]
  })

  useEffect(() => {
    if (pokemonData.species.url) {
      fetch(pokemonData.species.url).then(response => {
        let pokemonSpecies = response.json() as unknown as pokemonSpecies
        return pokemonSpecies
      }).then(speciesData => {
        setPokemonSpecies(speciesData)
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
          <Card>
            <CardContent>
              <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <SearchBar updateDataAction={setPokemonData} />
                </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                  <PokemonImage src={pokemonData.sprites.other['official-artwork']['front_default']} />
                </Grid>
                { pokemonData.name &&
                  <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h4" className={style.pokemonName}>{pokemonData.name}</Typography>
                    <Typography variant="subtitle1" component="pre">{pokemonDescription.replace("\u000c", ' ')}</Typography>
                  </Grid>
                }
                <Grid item xs={12} visibility={pokemonData.name ? 'visible' : 'hidden'}>
                  <PokemonStats pokemonData={pokemonData} pokemonSpecies={pokemonSpecies} />
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
