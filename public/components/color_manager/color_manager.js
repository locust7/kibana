import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import { readableColor } from '../../lib/readable_color';

export const ColorManager = ({ value, addColor, removeColor, onChange }) => (
  <div className="canvas__color-manager">
    <div
      style={{ display: 'inline-block' }}
      className="canvas__checkered canvas__color-manager--input"
    >
      <FormControl
        type="text"
        value={value || ''}
        placeholder="#hex color"
        style={{ backgroundColor: value, color: readableColor(value) }}
        onChange={e => onChange(e.target.value)}
      />
    </div>
    {addColor && (
      <i onClick={() => addColor(value)} className="canvas__color-manager--add fa fa-plus-circle" />
    )}
    {removeColor && (
      <i
        onClick={() => removeColor(value)}
        className="canvas__color-manager--remove fa fa-times-circle"
      />
    )}
  </div>
);

ColorManager.propTypes = {
  value: PropTypes.string,
  addColor: PropTypes.func,
  removeColor: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};
