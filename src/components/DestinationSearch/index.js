// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationList} = this.props
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="input-container">
          <input type="search" onChange={this.onChangeSearchInput} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="main-dest-container">
          {destinationList.map(eachDest => (
            <DestinationItem
              imgUrl={eachDest.imgUrl}
              destinationName={eachDest.destinationName}
              key={eachDest.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
