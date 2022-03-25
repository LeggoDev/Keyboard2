import React, { Fragment, useState } from 'react'
import './App.css';

const App = () => {
  const [text, setText] = useState(null)

  const keyLayout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    "space"
  ];

  const keyElementContainer = keyLayout.map(key => {
    const insertLineBreak = ["backspace", "p", "enter", "?"]

    if (insertLineBreak.includes(key)) {
      return (
        <Fragment>
          <button type='button'>{key.toLowerCase()}</button>
          <br />
        </Fragment>
      )
    } else {
      return <button type='button'>{key.toLowerCase()}</button>
    }
  })

  const handleClick = () => {
  }

  return (
    <main>
      <textarea onClick={() => handleClick()} className="use-keyboard-input" cols="30" rows="10" onChange={() => setText(text)} value={text}></textarea>
      <div className='keyboard", "keyboard--hidden'>
        <article className='keyboard__keys'>
          <Fragment>
            {keyElementContainer}
          </Fragment>
        </article>
      </div>
    </main>
  );
}

export default App;
