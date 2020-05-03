import React from 'react';
import PropTypes from 'prop-types';

import {
  MenuSlide, MenuSlideItem,
} from './styles';

const SmallMenuRoutes = ({
  clicked, links, actionButton, onPress,
}) => (
  <>
    {
        clicked
          ? (
            <MenuSlide>
              {
                links.map((link) => (
                  <MenuSlideItem
                    key={link.name}
                    href={link.to}
                    onClick={onPress}
                  >
                    {link.name}
                  </MenuSlideItem>
                ))
              }
              { actionButton && (
                <MenuSlideItem
                  href={actionButton.to}
                >
                  {actionButton.name}
                </MenuSlideItem>
              ) }
            </MenuSlide>
          )
          : ''
      }
  </>
);

SmallMenuRoutes.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, to: PropTypes.string.isRequired,
  })).isRequired,
  actionButton: PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  clicked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

SmallMenuRoutes.defaultProps = {
  actionButton: undefined,
};

export default SmallMenuRoutes;
