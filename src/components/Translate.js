import React, {useState} from 'react';
import Dropdown from './Dropdown';


const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Albanian',
    value: 'al'
  }
]
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={language}
        onSetSelected={setLanguage}
        options={options} />
    </div>
  )
};

export default Translate;