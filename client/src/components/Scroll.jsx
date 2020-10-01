import React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  flex-direction: row;
  width: auto;
  height: auto;
`;

const Header = styled.h1`
  font-size: 23px;
`;

const Page = styled.h2`
  font-weight: 400;
  font-size: 13px;
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
`;

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      ref: 1,
    };
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
    // this.changeContentScroll = this.changeContentScroll.bind(this);
  }

  onLeft(e) {
    e.preventDefault();
    const { ref } = this.state;
    let newPage;
    if (this.state.page === 1) {
      newPage = 1;
    } else {
      newPage -= 1;
    }
    this.setState({
      page: newPage,
    });
    if (ref - 4 >= 1) {
      this.props.handleScroll(ref - 4);
    }
  }

  onRight(e) {
    e.preventDefault();
    const { ref } = this.state;
    let newPage;
    if (this.state.page  === 3) {
      newPage = 3;
    } else {
      newPage += 1;
    }
    this.setState({
      page: newPage,
    });
    if (ref + 4 <= 9) {
      this.props.handleScroll(ref + 4);
    }
  }

  // changeContentScroll(pos) {
  //   const $content = $('FlexColumn');
  //   const current = $content.scrollLeft();
  //   $content.scrollLeft(current + pos);
  // }

  // handleClick () {
  //   ref.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });
  // }

  render() {
    const { page } = this.state;
    return (
      <FlexRow>
        <Header>More Places to Stay</Header>
        <div>
          <Page>
            {`${page} / 4`}
          </Page>
          <Button className="back" type="button" onClick={this.onLeft}>
            {'<'}
          </Button>
          <Button className="forward" type="button" onClick={this.onRight}>
            {'>'}
          </Button>
        </div>
      </FlexRow>
    );
  }
}

export default Scroll;
