import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import style from './app.module.scss'
import SearchBar from '../components/search_bar/search_bar'
import { Card, CardContent, Container } from '@mui/material'

const App = () => {
  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    console.log(pokemonData)
  }, [pokemonData])

  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <Container maxWidth="md">
          <Card sx={{ height: '80vh' }}>
            <CardContent>
              <SearchBar updateDataAction={setPokemonData} />
            </CardContent>
          </Card>
        </Container>
      </header>
    </div>
  )
}

export default App
