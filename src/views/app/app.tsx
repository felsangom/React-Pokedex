import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import style from './app.module.scss'
import SearchBar from '../components/search_bar/search_bar'
import { Card, CardContent, Container } from '@mui/material'
import { fetchPokemonData } from '../../controllers/search/search_controller'

const App = () => {
  const [pokemonData, setPokemonData] = useState({})

  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <Container maxWidth="md">
          <Card sx={{ height: '80vh' }}>
            <CardContent>
              <SearchBar searchAction={fetchPokemonData} />
            </CardContent>
          </Card>
        </Container>
      </header>
    </div>
  )
}

export default App
