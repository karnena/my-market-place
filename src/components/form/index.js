import "./styles.css";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box
} from "@mui/material";
import * as React from "react";
import Navbar from "../header";
import Sidebar from "../sidebar";
export default function FormPage() {
  return (
      <div style={{height: "90%"}}>
          <Navbar/>
          <div className="main-container">
              <Sidebar/>
        
    <div className="registration-container">
      {/* <AppBar>
      
          <h1>REGISTRATION FORM </h1>
    
      </AppBar> */}


      <form className="registration-form" onSubmit={() => alert("saved")}>
      <Typography className="mb-3" style={{fontWeight: 'bolder'}} variant="h5">REGISTRATION FORM</Typography>
        <TextField
          style={{ width: "400px"}}
          type="text"
          label="setgoal"
          variant="outlined"
          color="secondary"
        />
        <br />
        <TextField
          style={{ width: "400px"}}
          type="text"
          label="goal description"
          variant="outlined"
          color="secondary"
        />
        <br />
        <TextField
          style={{ width: "400px"}}
          type="text"
          label="Diversity catagory"
          variant="outlined"
          color="secondary"
        />
        <br />
        <TextField
          style={{ width: "400px"}}
          type="text"
          label="Attribute"
          variant="outlined"
          color="secondary"
        />
        <br />
        <TextField
          style={{ width: "400px"}}
          type="text"
          label="goal stage"
          variant="outlined"
          color="secondary"
        />
        <br />
        <TextField
          style={{ width: "400px"}}
          type="text"
          label="job id"
          variant="outlined"
          color="secondary"
        />
        <br />
        
       
        <Button style={{alignSelf: 'stretch'}} variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
    </div>
      </div>
  );
}
