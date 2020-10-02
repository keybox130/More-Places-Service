/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ListEntry from './ListEntry.jsx';

const Container = styled.div`
  display: flex;
  overflow: auto;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  scroll-snap-type: x mandatory;
  width: 1280px;
  margin: 30px auto;
  min-height: 300px;
  max-height: 300px;
  position: relative;
`;

const List = ({ listings, refs }) => (
  <Container>
    {listings.photos
      ? listings.photos.map((photo, index) => (
        <ListEntry key={photo._id} photo={photo} refs={refs} index={index} />
      ))
      : <h1>Loading...</h1>}
  </Container>
);

export default List;
