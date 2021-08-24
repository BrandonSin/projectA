import React from 'react'
import { FileDrop } from 'react-file-drop';
import { useRef } from 'react';
import './FileButton.css';
import  ReactDOM  from 'react-dom';

const FileButton = () => {

    const onTargetClick = () => {
        fileInputRef.current.click()
    }
    const fileInputRef = useRef(null);
    const onFileInputchange = (event) => {
        const files = event.target;
        fetch(files).then(r => r.text()).then(text => {console.log(text)})
    }

    let fileReader;
  
  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content)
    
    const element = <p>{content}</p>
    ReactDOM.render(element, document.getElementById('text'));
    // … do something with the 'content' …
  };
  
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    const yes = fileReader.readAsText(file);

  };


    return (
        <div>
            {/* <input onChange={onFileInputchange}
            ref={fileInputRef}
            type="file"
            className="hidden"
            /> */}
            <input
      type='file'
      id='file'
      className='input-file'
      
      onChange={e => handleFileChosen(e.target.files[0])}
    />
    <div id="text"></div>
            {/* <div className="file-container">
            <FileDrop 
                onTargetClick={onTargetClick}
                onDrop={(files, event) => {onFileInputchange(files)}}
            
            />
            </div> */}
            
                

        </div>
    )
}

export default FileButton
