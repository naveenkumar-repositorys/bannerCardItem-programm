// Write your code here.
const CardsComponent = props => {
  const {bannerCardListObj} = props
  const {headerText, description, className} = bannerCardListObj
  return (
    <li className={className}>
      <h1 className="cardHeading">{headerText}</h1>
      <p className="cardDescription">{description}</p>
      <button className="buttonEle">Show More</button>
    </li>
  )
}

export default CardsComponent
