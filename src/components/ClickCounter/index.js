// Write your code here
import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onClickCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">
            The Button has been clicked <span className="counter">{count}</span>{' '}
            times
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <div>
            <button
              type="button"
              className="click-button"
              onClick={this.onClickCount}
            >
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
