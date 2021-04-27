import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'
const items = [
  {
    title: 'Why learn react?',
    content: 'Because its the best!'
  },
  {
    title: 'Is react worth it?',
    content: 'Hell yes!'
  },
  {
    title: 'Is it React easy?',
    content: 'So so'
  }
];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDrop, setShowDrop] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDrop(!showDrop)}>Click</button>
      { showDrop ?
        <Dropdown 
          options={options} 
          selected={selected}
          onSetSelected={setSelected}
        /> : null
      }
    </div>
  )
}