import React from 'react'
import './ToggleButton2.css'

class ToggleButton2 extends React.Component {
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
      <button className={["btn-toggle2", this.state.toggled].join(' ')} onClick={this.handleClick}>
        <div className="overlay"></div>
        <div className="btn-toggle-background">
        </div>


      </button>
    )
  }
}

export default ToggleButton2;
