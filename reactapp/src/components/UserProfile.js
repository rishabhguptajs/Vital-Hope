import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./UserProfile.css";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rishabh Gupta",
      age: "17",
      gender: "M",
      location: "Ghaziabad",
      height: "175",
      weight: "60",
      bloodType: "A+",
      bloodSugar: "100",
      bloodPressure: "130/80",
      countryCode: "+91",
      phoneNumber: "9889069688",
      email: "rishabhgupta4523@gmail.com",
      passportNumber: "1234567890",
      medicalConditions: "Cough, Cold",
      cardNumber: "1234567890123456",
    };
  }

  render() {
    return (
      <div>
        <div className="navBarProfile">
          <div className="ButtonBack">
            <Button
              variant="contained"
              startIcon={<KeyboardBackspaceIcon />}
              size="small"
              id="backButton"
            >
              Back
            </Button>
            <span>Patient Profile</span>
          </div>
          <div className="AppointmentInfo"></div>
        </div>
        <div className="ProfileCard">
          <div className="UserProfileCard">
            <Stack direction="row" spacing={2} className="Card">
              <Avatar
                alt="this.state.name"
                src="https://imgtr.ee/images/2023/03/20/qIWnl.jpg"
                sx={{ width: 46, height: 46 }}
              />
              <p>{this.state.name} </p>
            </Stack>
            <p className="age">{this.state.age} years old</p>
            <div className="bottom_Card">
              <span className="height">
                Height &nbsp; &nbsp;
                {this.state.height}
              </span>
              <span className="weight">
                Weight &nbsp; &nbsp;
                {this.state.weight}
              </span>
              <span className="bloodType">
                Blood Group &nbsp; &nbsp;
                {this.state.bloodType}
              </span>
            </div>
          </div>
          <div className="UserInfo">
            <div className="BoxCardInfo">
              <Stack direction="row" spacing={2} className="InfoItems">
                <span className="InfoHere">
                  Phone Number 
                  <span>
                    {this.state.countryCode} {this.state.phoneNumber}
                  </span>
                </span>
                <span className="InfoHere">
                  Email: &nbsp;
                  {this.state.email}
                </span>
                <span className="InfoHere">
                  Passport 
                  {this.state.passportNumber}
                </span>
                <span className="InfoHere">
                  Medical Conditions: &nbsp;
                  {this.state.medicalConditions}
                </span>
                <span className="InfoHere">
                  Card Number
                  {this.state.cardNumber}
                </span>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
