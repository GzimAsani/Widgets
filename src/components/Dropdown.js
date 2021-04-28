import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSetSelected }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef();

  useEffect(() => {

    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) { //184 lecture for reference
        return; 
      }

      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };

  }, []);

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
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
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