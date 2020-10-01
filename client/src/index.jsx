/* eslint-disable class-methods-use-this */
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
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refs: {
        1: React.createRef(),
        2: React.createRef(),
        3: React.createRef(),
        4: React.createRef(),
        5: React.createRef(),
        6: React.createRef(),
        7: React.createRef(),
        8: React.createRef(),
        9: React.createRef(),
        10: React.createRef(),
        11: React.createRef(),
        12: React.createRef(),
      },
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

  handleScroll(index) {
    const { refs } = this.state;
    refs[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    const { listings, refs } = this.state;
    const render = listings
      ? <List listings={listings[0]} refs={refs} />
      : <h1>Loading...</h1>;
    return (
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
