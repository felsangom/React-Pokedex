import React from "react"
import { TableContainer, Typography, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { pokemonDataType } from "../../data_types/data_types"

type pokemonStatsProps = {
  pokemonData: pokemonDataType
}

const PokemonStats = (props: pokemonStatsProps) => {
  const { pokemonData } = props

  return (
    <TableContainer component={Paper}>
    <Table>
      <TableBody>
        <TableRow key="types-base-experience">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography>Type:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonData.types.map(type => type.type.name).join(', ')}</TableCell>
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