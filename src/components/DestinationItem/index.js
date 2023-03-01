// Write your code here
import './index.css'

const DestinationItem = props => {
  const {imgUrl, destinationName} = props
  return (
    <li className="each-dest-container">
      <div className="img-container">
        <img src={imgUrl} alt={destinationName} />
      </div>
      <p>{destinationName}</p>
    </li>
  )
}

export default DestinationItem
