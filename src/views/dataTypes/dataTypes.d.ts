type pokemonData = {
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
      name: string,
      url: string
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

type pokemonSpecies = {
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

type pokemonType = {
  damage_relations: {
    double_damage_from: {
      name: string
    }[],
    double_damage_to: {
      name: string
    }[],
    half_damage_from: {
      name: string
    }[],
    half_damage_to: {
      name: string
    }[],
    no_damage_from: {
      name: string
    }[],
    no_damage_to: {
      name: string
    }[]
  }
}

export {
  pokemonData,
  pokemonSpecies,
  pokemonType
}
