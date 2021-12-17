import ThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import React from "react";
import Router from "./routes/Router";
import { theme } from "./constants/theme"


const App = () => {

  const token = localStorage.getItem("token")
  const [loginButton, setLoginButton] = useState(token ? "Logout" : "Login")
  
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
