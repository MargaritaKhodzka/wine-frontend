export const deleteWine = wineId => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/wines/${wineId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(wine => dispatch({
      type: 'DELETE_WINE',
      payload: wine.id
    }))
  }
}
