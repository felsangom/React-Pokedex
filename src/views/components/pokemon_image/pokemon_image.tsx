import React from "react"
import { Card, CardContent } from "@mui/material"
import style from './pokemon_image.module.scss'

type pokemonImageProps = {
  src: string
}

const PokemonImage = (props: pokemonImageProps) => {
  return (
    <Card className={style.pokemonCard} sx={{ maxWidth: 250 }}>
      <CardContent className={style.cardContent}>
        <img alt="official pokémon artwork" src={props.src} className={style.pokemonImage} />
      </CardContent>
    </Card>
  )
}

export default PokemonImage