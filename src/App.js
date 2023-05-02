import './App.css';
import IMAGES from './Images.js';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  return (
   <div>
       <div>
            <img src= {require('./images/logo.png' )}  className='img'/>
       </div> 
    <div>
       <Typography variant="h6" className='Content'>
              Bic Lighter 5C
        </Typography>

        <Typography variant="subtitle2" className='About'>
                Brand: Megadeal<br></br>
                color: MultiColor<br></br>
                Style: ClassicItem<br></br>
                Color: Multizcolor<br></br>
                Weight: 1Pound<br></br>
                FuelType: Luiquified Petroleum gas
        </Typography>
    </div>
    <div>
       <Typography variant="h6" className='Content'>
            About The product
        </Typography>
        <Typography className='Content' >
          <ul className='Product'>
              <li>Disposable Classic Lighter</li>
              <li>MultiColor</li>
          </ul> 
        </Typography>
    </div>
    <div className='button'>
      <Button variant="contained">Buy Now</Button>
    </div>
   </div>
  );
}

export default App;
