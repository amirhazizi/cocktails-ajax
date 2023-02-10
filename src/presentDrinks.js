import fetchDrink from "./fetchDrinks.js"
import displayDrinks from "./displayDrinks.js"
import { showLoading } from "./toggleLoading.js"
const showDrinks = async (url) => {
  showLoading()
  // fetch drinks
  const data = await fetchDrink(url)
  // display drinks
  const section = await displayDrinks(data)
}
export default showDrinks
