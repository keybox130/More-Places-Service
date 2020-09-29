/* eslint-disable import/extensions */
import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
// import styled from 'styled-components';
// import { injectGlobal } from 'styled-components';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getAll(11); // set arbitrary room Id for now
  }

  getAll(roomId) {
    axios(`/api/roomId/${roomId}`)
      .then((list) => {
        this.setState({
          listings: list.data,
        });
      })
      .catch(console.log);
  }

  render() {
    const { listings } = this.state;
    const render = listings
      ? <List listings={listings[0]} />
      : <h1>Loading...</h1>;
    return (
      // injectGlobal`
      // @import url('
      //   https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&display=swap');
      // body {
      //   font-family: 'Nunito', sans-serif;
      //   font-weight: normal;
      // }
      // `
      <div>
        <h1>More Places to Stay</h1>
        {render}
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
