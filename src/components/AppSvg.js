import React from "react";
import Icons from '../symbol-defs.svg';
import PropTypes from 'prop-types';

const AppSvg = ({ name, color, width, height }) => (
  <svg className={`icon icon-${name}`} fill={color} width={width} height={height}>
    <use href={`${Icons}#${name}`} />
  </svg>
);

AppSvg.defaultProps = {
  color: '#000',
  width: 32,
  height: 32,
};

AppSvg.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AppSvg;
