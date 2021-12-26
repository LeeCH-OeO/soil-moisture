import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ErrorPage from './errorPage';
import NewData from "./new";
import {GetData} from "./getCurrentData";
import { GetChart } from './getChart';
import GetAllData from './getAllData';

import "./App.css"
import { ButtonGroup, Button } from '@mui/material';
function App() {

  return (
    
    <BrowserRouter>
      <div className='header'>
        <Typography  variant="h1" gutterBottom style={{'fontFamily': 'Noto Serif  TC', 'fontWeight': '900'}}>土壤濕度監測</Typography>
        <NewData/>
        <ButtonGroup variant="outlined">
          <Button><Link to="/soil-moisture">Home Page</Link></Button>
          <Button><Link to="/soil-moisture/Chart" > Chart</Link></Button>
          <Button><Link to="/soil-moisture/History" > History</Link></Button>
        </ButtonGroup>
      </div> 
      <Routes>
        <Route path="/soil-moisture" element={<GetData/>} />
        <Route path="/soil-moisture/Chart" element={<GetChart/>} />
        <Route path="/soil-moisture/History" element={<GetAllData/>} />
        <Route path="/soil-moisture/*" element={<ErrorPage/>} />
      </Routes>
      <div className='footer'>
        <a href="https://github.com/LeeCH-OeO/soil-moisture" target="_blank" rel="noreferrer">
          <Typography variant='subtitle2'>©LeeCH-OeO</Typography> 
        </a>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
