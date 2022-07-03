export function GET_ALL_COINS() {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
}
export function GET_SELECT_COIN_DETAILS(coinname: string) {
  return `https://api.coingecko.com/api/v3/coins/${coinname}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false `;
}
