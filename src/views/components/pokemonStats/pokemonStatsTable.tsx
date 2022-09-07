import { useState, useEffect } from 'react'
import { TableContainer, Typography, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { pokemonData, pokemonSpecies, pokemonType } from "../../dataTypes/dataTypes"
import PokemonTypeIcon from "../pokemonTypeIcon/pokemonTypeIcon"
import { Box } from '@mui/system'
import style from './pokemonStatsTable.module.scss'

type pokemonStatsProps = {
  pokemonData: pokemonData,
  pokemonSpecies: pokemonSpecies
}

const PokemonStatsTable = (props: pokemonStatsProps): JSX.Element => {
  const { pokemonData, pokemonSpecies } = props
  const [ pokemonTypes, setPokemonTypes ] = useState(new Array<pokemonType>())

  useEffect(() => {
    setPokemonTypes(new Array<pokemonType>())

    pokemonData.types.forEach(type => {
      fetch(type.type.url).then(response => {
        return response.json() as unknown as pokemonType
      }).then(pokemonTypeData => {
        setPokemonTypes(oldPokemonTypes => [ ...oldPokemonTypes, pokemonTypeData ])
      }).catch(_ => {
        setPokemonTypes(new Array<pokemonType>())
      })
    })
  }, [ pokemonData ])

  const renderPokemonTypes = (): JSX.Element[] => {
    return pokemonData.types.map(type => {
      return <PokemonTypeIcon key={type.type.name} type={type.type.name} />
    })
  }

  const renderWeakAgainst = (): JSX.Element[] => {
    let typesAdded = new Array<string>()
    let typesWeakAgainst = new Array<JSX.Element>()

    pokemonTypes.forEach(type => {
      type.damage_relations.double_damage_from.forEach(double_damage_from => {
        if (!typesAdded.includes(double_damage_from.name)) {
          typesWeakAgainst.push(<PokemonTypeIcon key={`double_from_${double_damage_from.name}`} type={double_damage_from.name} />)
          typesAdded.push(double_damage_from.name)
        }
      })
    })

    return typesWeakAgainst
  }

  const renderHalfDamageTo = (): JSX.Element[] => {
    let typesAdded = new Array<string>()
    let typesWeakAgainst = new Array<JSX.Element>()

    pokemonTypes.forEach(type => {
      type.damage_relations.half_damage_to.forEach(half_damage_to => {
        if (!typesAdded.includes(half_damage_to.name)) {
          typesWeakAgainst.push(<PokemonTypeIcon key={`half_to_${half_damage_to.name}`} type={half_damage_to.name} />)
          typesAdded.push(half_damage_to.name)
        }
      })
    })

    return typesWeakAgainst
  }

  const renderStrongAgainst = (): JSX.Element[] => {
    let typesAdded = new Array<string>()
    let typesStrongAgainst = new Array<JSX.Element>()

    pokemonTypes.forEach(type => {
      type.damage_relations.double_damage_to.forEach(double_damage_to => {
        if (!typesAdded.includes(double_damage_to.name)) {
          typesStrongAgainst.push(<PokemonTypeIcon key={`double_to_${double_damage_to.name}`} type={double_damage_to.name} />)
          typesAdded.push(double_damage_to.name)
        }
      })
    })

    return typesStrongAgainst
  }

  const renderHalfDamageFrom = (): JSX.Element[] => {
    let typesAdded = new Array<string>()
    let typesStrongAgainst = new Array<JSX.Element>()

    pokemonTypes.forEach(type => {
      type.damage_relations.half_damage_from.forEach(half_damage_from => {
        if (!typesAdded.includes(half_damage_from.name)) {
          typesStrongAgainst.push(<PokemonTypeIcon key={`half_from__${half_damage_from.name}`} type={half_damage_from.name} />)
          typesAdded.push(half_damage_from.name)
        }
      })
    })

    return typesStrongAgainst
  }

  return (
    <TableContainer component={Paper}>
    <Table size="small">
      <TableBody>
        <TableRow key="types-base-experience">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Type:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%', flexWrap: 'wrap' }}>
            <Box className={style.pokemonTypesContainer}>{renderPokemonTypes()}</Box>
          </TableCell>
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
        <TableRow key="happiness-capture-rate">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Base happiness:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonSpecies.base_happiness}</TableCell>
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Capture rate:</Typography>
          </TableCell>
          <TableCell sx={{ width: '25%' }}>{pokemonSpecies.capture_rate}%</TableCell>
        </TableRow>
        <TableRow key="weak-against">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Weak against:</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <Box className={style.pokemonTypesContainer}>{renderWeakAgainst()}</Box>
          </TableCell>
        </TableRow>
        <TableRow key="half-damage-to">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Half damage to:</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <Box className={style.pokemonTypesContainer}>{renderHalfDamageTo()}</Box>
          </TableCell>
        </TableRow>
        <TableRow key="strongness">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Strong against:</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <Box className={style.pokemonTypesContainer}>{renderStrongAgainst()}</Box>
          </TableCell>
        </TableRow>
        <TableRow key="half-damage-from">
          <TableCell sx={{ width: '25%' }} align="right">
            <Typography sx={{ fontWeight: 'bold' }}>Half damage from:</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <Box className={style.pokemonTypesContainer}>{renderHalfDamageFrom()}</Box>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default PokemonStatsTable
