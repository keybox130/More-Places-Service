import React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: auto;
  flex-direction: row;
  width: 1280px;
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

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,

    };
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
    // this.changeContentScroll = this.changeContentScroll.bind(this);
  }

  onLeft(e) {
    e.preventDefault();
    const { index, page } = this.state;
    let newPage;
    if (Number(page) === 1) {
      newPage = 1;
    } else {
      newPage = Number(page) - 1;
    }
    this.setState({
      page: newPage,
    });
    if (Number(index) - 4 >= 1) {
      this.props.handleScroll(index - 4, page);
    }
  }

  onRight(e) {
    e.preventDefault();
    const { index, page } = this.state;
    let newPage;
    if (Number(page) === 3) {
      newPage = 3;
    } else {
      newPage = Number(page) + 1;
    }
    this.setState({
      page: newPage,
    });
    if (Number(index) + 4 <= 9) {
      this.props.handleScroll(index + 4, page);
    }
  }

  render() {
    const { page } = this.state;
    return (
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
    );
  }
}

export default Scroll;
