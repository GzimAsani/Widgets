import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translate, setTranslate] = useState('')

  useEffect(() => {

    const doTranslation = async () => {
      const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
      })
      setTranslate(data.data.translations[0].translatedText)
    }
    doTranslation()
  }, [language, text])
  
  return (
    <div>
      <h1 className="ui header">{translate}</h1>
    </div>
  )
}

export default Convert;