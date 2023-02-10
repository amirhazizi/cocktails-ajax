import get from "./getElement.js"

const displayDrinks = ({ drinks }) => {
  const section = get(".section-center")
  const title = get(".title")
  if (!drinks) {
    // hide loading
    title.textContent = "sorry,no drinks matched yout search"
    section.innerHTML = null
    return
  }
}
export default displayDrinks
