import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats'

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '1991-04-29',
      showStats: false
    }
  }

  changeBirthday() {
    if(this.state.newDate) {
      this.setState({
        birthday: this.state.newDate,
        showStats: true
      });
    }
  }

  render() {
    const newDate =
    (event) => { this.setState({newDate: event.target.value}); }

    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday</h2>

          <FormControl
            type='date'
          onChange={ newDate }
          >
          </FormControl>

          {'  '}

          <Button bsStyle="success"
            onClick={ () => this.changeBirthday() }
          >
            Submit
          </Button>
          {
            this.state.showStats ?
              <div className="fade age_stats" >
                <AgeStats date={this.state.birthday} />
              </div>
            :
              <div></div>
          }
        </Form>
      </div>
    )
  }
}

export default App;
