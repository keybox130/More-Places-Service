/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ListEntry from './ListEntry.jsx';

const Container = styled.div`
  display: flex;
  overflow: auto hidden;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  scroll-snap-type: x mandatory
`;

const List = ({ listings }) => {
  console.log('Listings props: ', listings);
  return (
    <Container>
      {listings.photos
        ? listings.photos.map((photo) => (
          <ListEntry key={photo._id} photo={photo} />
        ))
        : <h1>Loading...</h1>}
    </Container>
  );
};

export default List;
