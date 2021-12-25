import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ErrorPage from './errorPage';
import NewData from "./new";
import {GetData} from "./getCurrentData";
import { GetChart } from './getCahrt';
import GetAllData from './getAllData';
import "./App.css"
function App() {

  return (
    <BrowserRouter>
      <Typography className='header' variant="h1" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'color':'red'}} >土壤濕度監測</Typography>
      <NewData/>
      <nav>
        <Link to="/soil-moisture">Home Page</Link>
        <Link to="/soil-moisture/Chart" > Chart</Link>
        <Link to="/soil-moisture/History" > History</Link>
      </nav>
      <Routes>
        <Route path="/soil-moisture" element={<GetData/>} />
        <Route path="/soil-moisture/Chart" element={<GetChart/>} />
        <Route path="/soil-moisture/History" element={<GetAllData/>} />
        <Route path="/soil-moisture/*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
