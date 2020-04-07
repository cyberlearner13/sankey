export default function (state = [], action) {
  switch (action.type) {
    case 'GET_CHART_DATA':
      return [...state,...action.payload];
    default: return [...state]

  }
}
