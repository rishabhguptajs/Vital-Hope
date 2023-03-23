import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
      weight: '60',
      bloodType: 'A+',
      bloodSugar: '100',
      bloodPressure: '130/80',
      phoneNumber:'9889069688'
    };
  }

  render() {  
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
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
                  {this.state.height}
                </span>
                <span className='weight'>
                  Weight &nbsp; &nbsp; 
                  {this.state.weight}
                </span>
                <span className='bloodType'>
                  Blood Group &nbsp; &nbsp;
                  {this.state.bloodType}
                </span>
              </div>
          </div>
          <div className="UserInfo">
            <Box sx={{ flexGrow: 1 }} className="BoxCardInfo">
              <Grid container spacing={2}>
                <Grid item xs={8} className="UserPhone">
                  <Item>Phone Number</Item>
                  <p>&nbsp;&nbsp;&nbsp;{this.state.phoneNumber}</p>
                </Grid>
                <Grid item xs={8} className="CardInfo">
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;

  
