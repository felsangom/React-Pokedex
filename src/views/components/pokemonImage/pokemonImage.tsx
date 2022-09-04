import { Card, CardContent } from "@mui/material"
import style from './pokemonImage.module.scss'

type pokemonImageProps = {
  src: string
}

const PokemonImage = (props: pokemonImageProps): JSX.Element => {
  return (
    <Card className={style.pokemonCard}>
      <CardContent className={style.cardContent}>
        <img alt="official pokémon artwork" src={props.src} className={style.pokemonImage} />
      </CardContent>
    </Card>
  )
}

export default PokemonImage
