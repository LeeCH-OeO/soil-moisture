import Typography from '@mui/material/Typography';
import {  Routes, Route, Link, HashRouter} from "react-router-dom";
import ErrorPage from './errorPage';
import NewData from "./new";
import {GetData} from "./getCurrentData";
import { GetChart } from './getChart';
import GetAllData from './getAllData';

import "./App.css"
import { ButtonGroup, Button } from '@mui/material';
function App() {

  return (
    
    <HashRouter>
      <div className='header'>
        <Typography  variant="h1" gutterBottom style={{'fontFamily': 'Noto Serif  TC', 'fontWeight': '900', 'color':'red'}}>土壤濕度監測</Typography>
        <ButtonGroup variant="outlined" color="error">
          <Button ><Link to="/" style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '400', 'color':'red'}}>Home Page</Link></Button>
          <Button><Link to="/Chart" style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '400', 'color':'red'}}> Chart</Link></Button>
          <Button><Link to="/History" style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '400', 'color':'red'}}> History</Link></Button>
        </ButtonGroup>
      </div> 
      <Routes >
        <Route path="/" element={<GetData/>} />
        <Route path="/Chart" element={<GetChart/>} />
        <Route path="/History" element={<GetAllData/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      <div className='footer'>
        <a href="https://github.com/LeeCH-OeO/soil-moisture" target="_blank" rel="noreferrer" >
          <Typography variant='subtitle2' style={{'fontFamily': 'Noto Serif  TC', 'fontWeight': '700', 'color':'red'}}>©LeeCH-OeO</Typography> 
        </a>
      </div>
    </HashRouter>
    
  );
}

export default App;
