/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
// import { injectGlobal } from 'styled-components';
import List from './components/List.jsx';
import SaveModal from './components/SaveModal.jsx';

const All = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

const Body = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-width: 1110px;
  margin: auto;
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
  margin: auto
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
  :hover {
    border-color: rgba(0, 0, 0, 0.08);
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.12) 0px 6px 16px;
    transform: scale(1.04);
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
        modal: false,
      },
    };
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      refs[11].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      refs[0].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  openModal() {
    const { modal } = this.state;
    this.setState({
      modal: true,
    });
  }

  closeModal() {
    const { modal } = this.state;
    this.setState({
      modal: false,
    });
  }
  // when you click heart, IF you add to list, its red -> otherwise, empty

  render() {
    const {
      page, listings, refs, modal,
    } = this.state;
    const render = listings
      ? <List listings={listings[0]} refs={refs} openModal={this.openModal} />
      : <h1>Loading...</h1>;
    const modalPop = modal
      ? <SaveModal closeModal={this.closeModal} />
      : <div />;
    return (
      <All>
        {modalPop}
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
      </All>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
