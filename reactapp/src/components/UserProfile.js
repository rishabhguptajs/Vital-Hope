import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './UserProfile.css'


class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Rishabh Gupta',
      age: '17',
      gender: 'M',
      location: 'Ghaziabad',
      height: '175',
      weight: '70',
      bloodType: 'A+',
      bloodSugar: '100',
      bloodPressure: '130/80',
    };
  }

  render() {
    return (
      <div>
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
              <p className='age'>{this.state.age} years old</p>
              <div className='bottom_Card'>
                <span className='height'>
                  Height &nbsp; &nbsp; 
                  {this.state.height} cm
                </span>
                <span className='weight'>
                  Weight &nbsp; &nbsp; 
                  {this.state.weight} kg
                </span>
                <span className='bloodType'>
                  Blood Group 
                  {this.state.bloodType} 
                </span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;

  
