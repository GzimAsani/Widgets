import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route'
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

const showAcordion = () => {
  if (window.location.pathname === '/') {
   return <Accordion items={items} />
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />
  }
}

const showLIst = () => {
  if (window.location.pathname === '/list') {
    return <Search/>
  }
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown  /> //label={label} options={options} 
  }
}

export default () => {
  const [selected, onSetSelected] = useState(options[0]);
  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSetSelected={onSetSelected}
        />
      </Route>
    </div>
  );
};