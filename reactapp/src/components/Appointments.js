import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export default function Playground() {
  const StyledTextField = styled(TextField)({
    color: "yellow",
  });
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0077b6",
      },
      secondary: {
        main: "#340500",
      },
    },
  });
  const defaultProps = {
    options: AppointmentsHistory,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: AppointmentsHistory.map((option) => option.title),
  };
  const [value, setValue] = React.useState(null);

  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <ThemeProvider theme={theme}>
        <Autocomplete
          {...defaultProps}
          id="disable-close-on-select"
          disableCloseOnSelect
          renderInput={(params) => (
            <StyledTextField
              {...params}
              label="Appointments history"
              variant="standard"
            />
          )}
        />
      </ThemeProvider>
    </Stack>
  );
}

//get top 100 oldest hospitals list in the world
const top100OldestHospitals = [
  { title: "Hospital de la Santa Creu i Sant Pau", year: 1297 },
  { title: "Hospital de la Santa Creu i Sant Pau", year: 1297 },
  { title: "Hospital de la Santa Creu i Sant Pau", year: 1297 },
  { title: "Hospital de la Santa Creu i Sant Pau", year: 1297 },
]
// Last 10 appoitments with the doctors
const AppointmentsHistory = [
  { title: "Dr. Maneesh Goyal", date: "12/12/2021", time: "12:00 PM" },
  { title: "Dr. Sandeep Mishra", date: "17/12/2021", time: "2:00 PM" },
];
