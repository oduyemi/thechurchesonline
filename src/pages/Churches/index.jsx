import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ChurchesOnline } from "../../components/Churches";


const theme = createTheme({
    palette: {
      mode: 'dark'
    },
  });

  
const Churches = () => {
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <ChurchesOnline />
      </ThemeProvider>
    )
}



export default Churches