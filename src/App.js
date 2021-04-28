import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route'
import Header from './components/Header'
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
  const [selected, onSetSelected] = useState(options[0]);
  return (
    <div>
      <Header />
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