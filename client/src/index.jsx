/* eslint-disable import/extensions */
import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
// import { injectGlobal } from 'styled-components';
import List from './components/List.jsx';
import Scroll from './components/Scroll.jsx';

const Body = styled.div`
  background-color: rgb(255, 255, 255);
  font-family: 'Montserrat', sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: 1,
    };
    this.handleScroll = this.handleScroll.bind(this);
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

  handleScroll(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    this.setState({
      ref: ref,
    });
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
      <Body>
        <Scroll handleScroll={this.handleScroll} />
        {render}
      </Body>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
