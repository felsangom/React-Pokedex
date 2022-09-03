type pokemonDataType = {
  name: string,
  base_experience: number,
  height: number,
  weight: number,
  sprites: {
    other: {
      'official-artwork': {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
      }
    }
  },
  types: {
    slot: number,
    type: {
      name: string
    }
  }[],
  stats: {
    base_stat: number,
    stat: {
      name: string
    }
  }[],
  species: {
    url: ""
  }
}

type pokemonSpeciesType = {
  base_happiness: number,
  capture_rate: number,
  color: {
    name: string
  },
  evolution_chain: {
    url: string
  },
  flavor_text_entries: {
    flavor_text: string,
    language: {
      name: string
    },
    version: {
      name: string
    }
  }[]
}

export { pokemonDataType, pokemonSpeciesType }