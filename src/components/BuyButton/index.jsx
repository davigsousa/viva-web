import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, PriceLabel, Price,
} from './styles';

function BuyButton({ price, onPress }) {
  return (
    <Button onPress={onPress}>
      <PriceLabel>
        <Price>{`R$${price}`}</Price>
      </PriceLabel>
    </Button>
  );
}

BuyButton.propTypes = {
  oldPrice: PropTypes.string,
  price: PropTypes.string,
  onPress: PropTypes.func,
};

BuyButton.defaultProps = {
  oldPrice: '',
  price: '',
  onPress: undefined,
};

export default BuyButton;
