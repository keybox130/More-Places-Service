import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  -webkit-box-align: center;
  padding: 40px;
  align-items: center;
  z-index: 2000;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, .6);
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: keyframe_15p0df;
`;

const Modal = styled.div`
  z-index: 200;
  width: 100%;
  max-width: 568px;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  position: relative;
  max-height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: keyframe_d37zz3;
  justify-content: center;
  &.open {
    animation-name:
    0% { margin-top: 100%; }
    100% { margin-top: 0%; }
    animation-duration: 0.5s;
  }
  &.closed {
    animation-name:
    0% { margin-top: 0%; }
    100% { margin-top: 100%; };
    animation-duration: 0.5s;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const Button = styled.button`
  appearance: none;
  display: inline-block;
  justify-content: left;

  position: absolute;
  display: flex;
  top: 16px;
  left: 24px;

  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  // position: relative;
  background: transparent;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
}
`;

const Close = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const Title = styled.header`
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  min-height: 48px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  padding: 0px 24px;
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;

const HeaderTitle = styled.div`
  -webkit-box-flex: 0;
  overflow: hidden;
  flex: 0 1 auto;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
`;

const Favorites = styled.div`
  padding: 20px 16px;
  overflow-y: auto;
`;

const ListItem = styled.button`
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  border-radius: 0px;
  outline: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: transparent;
  border: none;
  color: inherit;
  display: block;
  margin: 0px;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  height: 100%;
  width: 100%;
  }
  :hover {
    background: rgb(247, 247, 247);
  }
`;

const EntryTitle = styled.div`
  font-weight: 600;
`;

const Create = styled.footer`
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  display: flex;
  flex: 0 0 auto;
  border-top: 1px solid rgb(235, 235, 235);
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
`;

const CreateList = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border: none;
  background: transparent;
  color: rgb(34, 34, 34);
  text-decoration: underline;
  width: 100%;
`;

class SaveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [{ 'Weekend Getaway': [] }, { 'Tahoe Trips': [] }],
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleClose() {
    const { closeModal } = this.props;
    closeModal();
  }

  handleSave(e) {
    const { value } = e.target;
    const { favorites } = this.state;
  }

  render() {
    return (
      <Page>
        <Modal>
          <Header>
            <Button type="button" onClick={this.handleClose}>
              <Close viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                <path d="m6 6 20 20" />
                <path d="m26 6-20 20" />
              </Close>
            </Button>
            <Title>
              <HeaderTitle>Save to a List</HeaderTitle>
            </Title>
          </Header>
          <div>
            <Favorites>
              <ListItem>
                <EntryTitle/>
              </ListItem>
            </Favorites>
          </div>
          <div>
            <Create>
              <CreateList>Create a List</CreateList>
            </Create>
          </div>
        </Modal>
      </Page>
    );
  }
}

export default SaveModal;
