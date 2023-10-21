import React, { useState } from 'react';
import './App.css';
import './wordcounter.css'

function WordCounter() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim()===''? 0: text.trim().split(/\s+/).length;

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea 
        placeholder="Type something here..." 
        value={text} 
        onChange={handleInputChange}
        rows={10} 
        cols={40} 
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
