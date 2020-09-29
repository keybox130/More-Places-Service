import React from 'react';
import styled from 'styled-components';

const Listing = styled.div`
  font-weight: 300;
  display: flex;
  flex-direction: row;
  padding: 10px;
  img.house {
    width: 150px;
    min-height: 120px;
    max-height: auto;
    border-radius: 12px;
    border: .1px solid rgb(215, 215, 215);
  }
  img.star {
    width: 18px;
    height: 18px;
  }
  .superhost {

  }
  .heart {

  }
`;

const ListEntry = ({ photo }) => (
  <Listing>
    <div>
      <img className="house" alt="House" src={photo.image} />
      <div>
        <div className="superhost">
          {photo.superhost}
        </div>
        <div className="heart">
          {photo.heart}
        </div>
      </div>
      <div>
        <img className="star" alt="star" src="https://keybox-houses.s3-us-west-1.amazonaws.com/star.png" />
        {photo.reviews}
      </div>
      <div>{photo.listing}</div>
      <div>{photo.title}</div>
      <div>{photo.price}</div>
    </div>
  </Listing>
);

export default ListEntry;
