export default function wineReducer(state = {wines: []}, action) {
  switch (action.type) {
    case 'FETCH_WINES':
      return {wines: action.payload};

    case 'ADD_WINE':
      return {...state, wines: [...state.wines, action.payload]};

    case 'DELETE_WINE':
      const filteredWines = state.wines.filter(wine => wine.id !== action.payload);
      return {...state, wines: filteredWines};

    default:
      return state;
  }
}
