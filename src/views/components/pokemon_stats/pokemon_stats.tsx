import React from "react"
import { TableContainer, Typography, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { pokemonDataType } from "../../data_types/data_types"
import PokemonTypeIcon from "../pokemon_type_icon/pokemon_type_icon"


type pokemonStatsProps = {
  pokemonData: pokemonDataType
}

const PokemonStats = (props: pokemonStatsProps) => {
  const { pokemonData } = props

  const renderPokemonTypes = (): JSX.Element[] => {
    return pokemonData.types.map(type => {
      return <PokemonTypeIcon key={type.type.name} type={type.type.name} />
    })
  }

  return (
    <TableContainer component={Paper}>
    <Table>
      <TableBody>
        <TableRow key="types-base-experience">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography>Type:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{renderPokemonTypes()}</TableCell>
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography>Base experience:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonData.base_experience}</TableCell>
        </TableRow>
        <TableRow key="height-weight">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography>Height:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonData.height}</TableCell>
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography>Weight:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonData.weight}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default PokemonStats