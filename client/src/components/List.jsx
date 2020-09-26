import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { listings } = this.props;
    return (
      <div>
        {listings.map((listing) => (
          <ListEntry listing={listing} />
        ))}
      </div>
    );
  }
}

export default List;
