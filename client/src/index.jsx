import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // listings: []
    };
  }

  componentDidMount() {
    this.getAll();
  }

  // getAll(roomId) {
  //   axios(`/api/roomId/${roomId}`)
  //     .then((list) => {
  //       this.setState({
  //         listings: list.data
  //       });
  //     })
  //     .catch(console.log);
  // }

  render() {
    return (
      <div>
        <h1>More Places to Stay</h1>
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
