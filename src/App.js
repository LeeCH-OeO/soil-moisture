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
  if (navigator.maxTouchPoints > 1) {
    alert('您正在使用手機📱瀏覽\n建議使用電腦🖥️以獲得最佳體驗');
}
  return (
    
    <HashRouter>
      <div className='header'>
        <Typography  variant="h1" gutterBottom style={{'fontFamily': 'Noto Serif  TC', 'fontWeight': '900'}}>土壤濕度監測</Typography>
        <ButtonGroup variant="outlined" >
          <Button ><Link to="/" style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '400'}}>Home Page</Link></Button>
          <Button><Link to="/Chart" style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '400'}}> Chart</Link></Button>
          <Button><Link to="/History" style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '400'}}> History</Link></Button>
        </ButtonGroup>
      </div> 
      <Routes >
        <Route path="/" element={<GetData/>} />
        <Route path="/Chart" element={<GetChart/>} />
        <Route path="/History" element={<GetAllData/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      <div className='footer'>
        <a href="https://github.com/LeeCH-OeO/soil-moisture" target="_blank" rel="noreferrer" style={{ "margin": "auto", "text-decoration":"none"}}>
          <Typography variant='subtitle2' style={{'fontFamily': 'Noto Serif  TC', 'fontWeight': '700', 'color':'gray'}}>©LeeCH-OeO</Typography> 
        </a>
      </div>
    </HashRouter>
    
  );
}

export default App;
