import React from 'react';

// Translates new lines in text and wraps it in a p tag
const newline2p = (text) => {
  if (typeof text === 'string' && text.length > 0) {
    let content = [];
    let paragraphs = text.split("\n");

    for (let i = 0; i < paragraphs.length; i++) {
      content.push(<p key={i}>{paragraphs[i]}</p>);
    }
    
    return content;
  }
};

export default newline2p;