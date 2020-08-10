import React, { Component } from 'react';
import Tooltip from './Tooltip';

class App extends Component {
  constructor(){
    super();
    this.state = {
      box: 'text',
      showTooltip: false,
      tooltipPosition: 'top',
    }
  }

// ======================on hover function============================


  onHover = () => {
    this.setState({
      box: 'image',
      showTooltip: true,
    })
  }

// =======================mouse leave function============================


  onLeave = () => {
    this.setState({
      box: 'text',
      showTooltip: false,
    })
  }


// ============================set tooltip position============================



  handleChange = (event) => {
    this.setState({
      tooltipPosition: event.target.value
    })
  }

  render() {
    const { box, showTooltip, tooltipPosition} = this.state;
    return (
      <div>
        <label>
          Set tooltip position:
          <select value={tooltipPosition} onChange={this.handleChange}>

            <option value="top">Top</option>
            <option value="right">Right</option>
            <option value="down">Down</option>
            <option value="left">Left</option>

          </select>
        </label>
      <div id="main" onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
        {(showTooltip && <Tooltip props ={tooltipPosition} />)}
        {(box === 'text'  && <span id="downtext">DOWNLOAD</span>)}
        {(box === 'image' && <img src="https://img.techpowerup.org/200810/pinclipart-com-clipart-downloader-536411.png" id="downimage" />)}
      </div>
      </div>
    );
  }
}

export default App;