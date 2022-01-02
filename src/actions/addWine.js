export const addWine = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/wines', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(wine => dispatch({
      type: 'ADD_WINE',
      payload: wine
    }))
  }
}
