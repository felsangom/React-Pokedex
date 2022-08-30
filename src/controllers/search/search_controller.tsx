const fetchPokemonData = (id_or_name: string) => {
  if (id_or_name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id_or_name.toLocaleLowerCase()}`).then(response => {
      return response
    }).catch(error => {
      return error
    })
  } else {
    return {}
  }
}

export { fetchPokemonData }