/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
// import { injectGlobal } from 'styled-components';
import List from './components/List.jsx';

const Body = styled.div`
  background-color: rgb(255, 255, 255);
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-width: 1110px;
  justify-content: center;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: auto;
  flex-direction: row;
  width: 1100px;
  min-height: 40px;
  margin-bottom: 1px;
  margin-right: 25px;
`;

const Header = styled.h1`
  font-size: 23px;
`;

const FlexButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 40px;
`;

const Page = styled.h2`
  font-weight: 400;
  font-size: 13px;
  margin-right: 10px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
  width: 32px;
  height: 32px;
  margin: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      refs: {
        0: React.createRef(),
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
        // modal: false,
      },
    };
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
  }

  componentDidMount() {
    this.getAll(11); // set arbitrary room Id for now
  }

  onLeft(e) {
    e.preventDefault();
    const { page, refs } = this.state;
    let newPage;
    if (Number(page) === 1) {
      newPage = 3;
      refs[8].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (Number(page) === 3) {
      newPage = 2;
      refs[4].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      newPage = 1;
      refs[0].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.setState({
      page: newPage,
    });
  }

  onRight(e) {
    e.preventDefault();
    const { page, refs } = this.state;
    let newPage;
    if (Number(page) === 3) {
      newPage = 1;
      refs[1].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (Number(page) === 2) {
      newPage = 3;
      refs[11].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      newPage = 2;
      refs[7].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.setState({
      page: newPage,
    });
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
    const { page, listings, refs } = this.state;
    const render = listings
      ? <List listings={listings[0]} refs={refs} />
      : <h1>Loading...</h1>;
    return (
      <div>
        <FlexRow>
          <div>
            <Header>More Places to Stay</Header>
          </div>
          <div>
            <FlexButtons>
              <Page>
                {`${page} / 3`}
              </Page>
              <Button className="back" type="button" onClick={this.onLeft}>
                {'<'}
              </Button>
              <Button className="forward" type="button" onClick={this.onRight}>
                {'>'}
              </Button>
            </FlexButtons>
          </div>
        </FlexRow>
        <Body>
          {render}
        </Body>
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
