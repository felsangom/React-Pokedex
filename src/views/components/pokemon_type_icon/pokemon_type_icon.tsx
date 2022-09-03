import { Box, Typography } from "@mui/material"
import React from "react"
import bug from '../../../assets/images/pokemon_type_icons/bug.svg'
import dark from '../../../assets/images/pokemon_type_icons/dark.svg'
import dragon from '../../../assets/images/pokemon_type_icons/dragon.svg'
import electric from '../../../assets/images/pokemon_type_icons/electric.svg'
import fairy from '../../../assets/images/pokemon_type_icons/fairy.svg'
import fighting from '../../../assets/images/pokemon_type_icons/fighting.svg'
import fire from '../../../assets/images/pokemon_type_icons/fire.svg'
import flying from '../../../assets/images/pokemon_type_icons/flying.svg'
import ghost from '../../../assets/images/pokemon_type_icons/ghost.svg'
import grass from '../../../assets/images/pokemon_type_icons/grass.svg'
import ground from '../../../assets/images/pokemon_type_icons/ground.svg'
import ice from '../../../assets/images/pokemon_type_icons/ice.svg'
import normal from '../../../assets/images/pokemon_type_icons/normal.svg'
import poison from '../../../assets/images/pokemon_type_icons/poison.svg'
import psychic from '../../../assets/images/pokemon_type_icons/psychic.svg'
import rock from '../../../assets/images/pokemon_type_icons/rock.svg'
import steel from '../../../assets/images/pokemon_type_icons/steel.svg'
import water from '../../../assets/images/pokemon_type_icons/water.svg'
import style from './pokemon_type_icon.module.scss'

type pokemonTypeIconProps = {
  type: string
}

const pokemonTypes = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water
}

const PokemonTypeIcon = (props: pokemonTypeIconProps) => {
  return (
    <Box className={style.iconContainer}>
      <Box className={style.icon}>
        <img className={style[props.type]} alt={props.type} src={pokemonTypes[props.type as keyof typeof pokemonTypes]} />
        <Typography className={style.typeDescription} variant="caption">{props.type}</Typography>
      </Box>
    </Box>
  )
}

export default PokemonTypeIcon