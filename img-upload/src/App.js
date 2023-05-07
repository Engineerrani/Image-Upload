
import './App.css';
import React, { Component } from 'react'
import axios from 'axios';


 class App extends Component {
  state = {
    selectedfile:null
  }
  fileSelectedHandler = (event) =>{
    this.setState({
      selectedfile:event.target.files[0]
    })
  }
  fileUploadHandler = () =>{
    const fd = new FormData();
    fd.append('image', this.state.selectedfile, this.state.selectedfile.name);
    axios.post('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', fd, {
    onUploadProgress: progressEvent => {
      console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
    }
  })
    .then(res =>{
    console.log(res);
    });
   
  }
  render() {
    return (
      <div className='App'>
     <input style={{display: 'none'}} type='file' onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
     <button className='btn' onClick={() => this.fileInput.click()}>Pick File</button>
     <button className='btn1' onClick={this.fileUploadHandler}>Upload</button>
      </div>
    )
  }
}

export default App


