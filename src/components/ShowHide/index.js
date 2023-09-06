import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  showFirst = () => {
    const {first} = this.state
    this.setState({first: !first})
  }

  showLast = () => {
    const {last} = this.state
    this.setState({last: !last})
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="container">
        <div>
          <h1>Show/Hide</h1>
          <div className="buttons-container">
            <div>
              <button type="button" onClick={this.showFirst} className="button">
                Show/Hide FirstName
              </button>
              {first && <p className="names">Joe</p>}
            </div>
            <div>
              <button type="button" onClick={this.showLast} className="button">
                Show/Hide LastName
              </button>
              {last && <p className="names">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
