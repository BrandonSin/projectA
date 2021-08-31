import React from 'react'
import './FileButton.css';
import  ReactDOM  from 'react-dom';


//Component : File Button
//Descr: Creates a Button for users to upload files and display them as text
const FileButton = () => {


    let fileReader;
  
//Descr: displays the result of file and display under ElementID Text
//Parameters: none
  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content)
    const element = <p>{content}</p>
    ReactDOM.render(element, document.getElementById('text'));
  };
  
//Descr: callback from an input type = "file" onChange ="event"
// Takes in user's file and and initiates handlefileRead function read it as text string
// Parameters: type "File"
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);

  };


    return (
      <div>
       
        <input
          type='file'
          id='file'
          className='input-file'
          
          onChange={e => handleFileChosen(e.target.files[0])}
        />
        <div id="text"></div>

        </div>
    )
}

export default FileButton
