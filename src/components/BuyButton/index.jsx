import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, PriceLabel, Price,
} from './styles';

function BuyButton({ price }) {
  return (
    <Button>
      <PriceLabel>
        <Price>{`R$${price}`}</Price>
      </PriceLabel>
    </Button>
  );
}

BuyButton.propTypes = {
  price: PropTypes.string,
};

BuyButton.defaultProps = {
  price: '',
};

export default BuyButton;
