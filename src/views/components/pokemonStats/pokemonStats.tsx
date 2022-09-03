import React from "react"
import { TableContainer, Typography, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { pokemonDataType } from "../../dataTypes/dataTypes"
import PokemonTypeIcon from "../pokemonTypeIcon/pokemonTypeIcon"


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
            <Typography sx={{ fontWeight: 'bold' }}>Type:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{renderPokemonTypes()}</TableCell>
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Base experience:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonData.base_experience}</TableCell>
        </TableRow>
        <TableRow key="height-weight">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Height:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonData.height / 10}</TableCell>
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Weight:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonData.weight / 10}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default PokemonStats