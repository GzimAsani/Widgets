import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
]

export default () => {
  return (
    <div>
      <Search />
    </div>
  )
}