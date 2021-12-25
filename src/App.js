import Typography from '@mui/material/Typography';

import NewData from "./new";
import GetData from "./getData";
import "./App.css"
function App() {

  return (
    <div className="App">
      <Typography className='header' variant="h1" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'color':'red'}} >土壤濕度監測</Typography>
      <NewData/>
      <GetData />
    </div>
  );
}

export default App;
