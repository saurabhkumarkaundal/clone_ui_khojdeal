import React from "react";
import './App.css';
import {  TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import TypeWriter from 'react-typewriter-effect';

function App() {
  return (
    <div className="App">
      <div className="top">
      <p style={{margin: "0", display: "inline", fontSize:"20px"}}>FINDTHISBEST</p>
      <p style={{margin: "0", display: "inline",align: "left", padding:"20px"}}><select value="United State" className="country">
  <option value="United Kingdom">United Kingdom</option>
  <option value="Canada">Canada</option>
  <option value="Australia">Australia</option>
  <option value="France">France</option>
  <option value="Espana">Espana</option>
</select></p>
<p style={{margin: "0", display: "inline", fontSize:"20px", paddingLeft:"600px"}}>Home</p>
<p style={{margin: "0", display: "inline", fontSize:"20px",padding:"20px"}}>Blog</p>
      <p style={{margin: "0", display: "inline",align: "left", padding:"20px"}}>
        Best Products
      </p>
      </div>
      <div className="upper">
      <h1>Help you find the <br></br>
      <>
      best<TypeWriter
        textStyle={{
          color: 'rgb(4, 31, 121)',
          fontWeight: 500,
          fontSize: '1em',
          textAlign: 'center',
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          'laptop',
          'mobile',
          'shoes',
          'camera',
          'headphone',
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}/>
      </>
      </h1>
      <div className='box-text'>
        <h4>Check out our reviews before buying anything<br></br>
          We aim to help you make better shopping decisions</h4>
       </div>
      <div>
      <TextField
                variant="outlined"
                defaultValue="Search..."
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
      </div>
      </div>
      <div className="images">
        <figure>
        <img src="https://cdn.findthisbest.com/storage/images/2022/02/a-big-hole-in-the-wall.jpg" style={{width: "400px",height:"300px",padding:"20px"}}></img>
        <figcaption style={{color:"black"}}>How To Repair Drywall</figcaption>
        </figure>
        <figure>
        <img src="https://cdn.findthisbest.com/storage/images/2022/02/cover-brown-wooden-table-with-two-drawers.jpg" style={{width: "400px",height:"300px",padding:"20px"}}></img>
        <figcaption style={{color:"black"}}>How to Paint Wood Furniture: 13 Steps Guide</figcaption>
        </figure>
        <figure>
      <img src="https://cdn.findthisbest.com/storage/images/2022/01/cover-a-toilet-and-a-toy.jpg" style={{width: "400px",height:"300px",padding:"20px"}}></img>
      <figcaption style={{color:"black"}}>Tips on Solving Common Toilet Problems: Useful and Simple Tips</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default App;