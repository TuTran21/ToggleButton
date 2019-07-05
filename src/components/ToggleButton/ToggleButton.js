import React from 'react'
import './ToggleButton.css'

class ToggleButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        toggled: !prevState.toggled
      };
    });
  }

  render() {
    return (
      <button className={["btn-toggle", this.state.toggled].join(' ')} onClick={this.handleClick}>
        <div className="overlay"></div>
        <div>
          <p>ON</p>
        </div>
        <div>
          <p>OFF</p>
        </div>
      </button>
    )
  }
}

export default ToggleButton;
