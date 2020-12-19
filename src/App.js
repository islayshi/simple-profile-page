import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  state={
    profileImg:'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg',
    value: "(Double Click to Change Nickname)",
    isInEditMode: false
  }

  updateComponentValue = () => {
    this.setState({
      isInEditMode : false,
      value: this.refs.textInput.value
    })
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode : !this.state.isInEditMode
    })   
  }

  renderEditView = () => {
    return <div>
    <input 
        type="text"
        defaultValue={this.state.value}
        ref="textInput"
    />

    <button className="button" onClick={this.changeEditMode}>x</button>
    <button className="button" onClick={this.updateComponentValue}>OK</button>
    </div>
  }

  renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>
    {this.state.value}
    </div>
  }


  uploadImage = (e) => {
    const read = new FileReader();
    read.onload = () => {
      if(read.readyState === 2){
        this.setState({profileImg: read.result})
      }
    }
    read.readAsDataURL(e.target.files[0])
  };

  render() {
    const {profileImg} = this.state

    return (
      <div className="profilepage">
        <div className="container">
          <h1>Welcome, </h1>
        {this.state.isInEditMode ?
           this.renderEditView() :
           this.renderDefaultView()
          }
          <div className="contain-img">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="upload-image" id="input" onChange={this.uploadImage} />
					<div className="label">
          <label className="upload-img" htmlFor="input">
						<i className="material-icons">change profile image</i>
					</label>
          </div>
  
  
        </div>
      </div>
    );
  }
  
}

export default App;
