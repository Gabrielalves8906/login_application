import { Light } from "@mui/icons-material";
import { Button, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { LightTheme } from "./shared/themes";

export const App =()=> {
  return (
    <ThemeProvider theme={LightTheme} >
    <BrowserRouter>
      <div className="App">
        <Button variant="contained" color='primary' >Teste</Button>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
} 
