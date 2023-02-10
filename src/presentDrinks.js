import fetchDrink from "./fetchDrinks.js"
import displayDrinks from "./displayDrinks.js"
const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrink(url)
  console.log(data)
  // display drinks
  const section = await displayDrinks(data)
}
export default showDrinks
