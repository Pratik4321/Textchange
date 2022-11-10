import React ,{useState} from 'react'

function TextFile(props) {
    const [text, settext] = useState('');
   
      const handleOnChange = (event) => {
        settext(event.target.value);
    }
    const uppercasef = () => {

    let newText = text.toUpperCase();
    settext(newText)
      
      }

      const lowercasef = () => {
       let newText=text.toLowerCase();
       settext(newText)
                }

      const cleartext = () => {
       let newText='';
       settext(newText)
                }
                const speak = () => {
                  let msg = new SpeechSynthesisUtterance();
                  msg.text = text;
                  window.speechSynthesis.speak(msg);
                }
                const removespace = () => {
                  let newText=text.replace(/\s+/g, '');
                  settext(newText)
                           }
                const reversetext = () => {
                  let newText=text.split('').reverse().join('');

                  settext(newText)
                           }
                const duplicatetext = () => {
                  let CapitalizeWords = text[0].toUpperCase();  
                  for (let i = 1; i <= text.length - 1; i++) {  
                      let currentCharacter,  previousCharacter = text[i - 1];  
                      if (previousCharacter && previousCharacter === ' ') {  
                          currentCharacter = text[i].toUpperCase();  
                      } else {  
                          currentCharacter = text[i];  
                      }  
                      CapitalizeWords = CapitalizeWords + currentCharacter;  
                  }  
                  settext(CapitalizeWords);
                           }
                const copytoclip = () => {
                  let newText=text.replace(/\s+/g, '');
                  settext(newText)
                           }
  return (

    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows="8"></textarea>
  </div>
  <button type="button" className="btn btn-primary " onClick={uppercasef}>Convert to Upperase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={lowercasef}>Convert to lowercase</button>
  <button type="button" className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-2 " onClick={speak}>Speak</button>
  <button type="button" className="btn btn-primary mx-2 " onClick={removespace}>Remove Space</button>
  <button type="button" className="btn btn-primary mx-2" onClick={reversetext}>Reverse Text</button>
  <button type="button" className="btn btn-primary mx-2" onClick={duplicatetext}>Duplictae Text</button>
  <button type="button" className="btn btn-primary " onClick={copytoclip}>Copy To ClipBoard</button>
  <div className="cotainer mr-3">
    <h1>your text summary</h1>
    <p> {text.split(" ").length} Words {text.length} Characters</p>
    <h2>Total minutes to read a above Text</h2>
    <p> {text.split(" ").length*0.0088} Minutes</p>

    <h2>Your preview</h2>
    <p>{text}</p>
  </div>
  </div>
  
  )
}

export default TextFile