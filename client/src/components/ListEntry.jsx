import React from 'react';

const ListEntry = ({ listing }) => (
  <div>
    {listing.photos.map((field) => (
      <div>{field}</div>
    ))}
  </div>
);

export default ListEntry;
