import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSetSelected }) => {
  const [open, setOpen] = useState(false)

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    
    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSetSelected(option)}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div 
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;