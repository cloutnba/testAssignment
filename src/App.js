import {Routes, Route} from "react-router-dom";
import './App.css';
import Main from "./pages/Main/Main";
import {createTheme, ThemeProvider} from "@mui/material";
import InProgress from "./components/InProgress/InProgress";

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'black',
                        fontWeight: 600,
                    },
                    '& .MuiInput-underline.Mui-focused': {
                        '&:before': {
                            borderBottomColor: 'rgba(0, 0, 0, 0.42)',
                        },
                        '&:after': {
                            borderBottomColor: 'black',
                        },
                    },
                },
            },
        },
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/home" element={<InProgress/>}/>
              <Route path="/features" element={<InProgress/>}/>
              <Route path="/blog" element={<InProgress/>}/>
              <Route path="/shop" element={<InProgress/>}/>
              <Route path="/about" element={<InProgress/>}/>
              <Route path="/contact" element={<InProgress/>}/>
          </Routes>
      </ThemeProvider>
  );
}

export default App;
