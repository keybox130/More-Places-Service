import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll(roomId) {
    axios(`/api/roomId/${roomId}`)
      .then((list) => {
        this.setState({
          listings: list,
        });
      })
      .catch(console.log);
  }

  render() {
    const { listings } = this.state;
    return (
      <div>
        <h1>More Places to Stay</h1>
        <List listings={listings} />
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
