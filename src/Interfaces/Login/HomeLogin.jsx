import * as React from 'react';
import { Box } from '@mui/material';

import './HomeLogin.css';
import Login from './Components/Login';

const PageHomeLogin = () => {
  return (
    <Box className="App">
      <div className="section hpanel leftpan">
        <div className="background-img">
        </div>
      </div>

      <div className="section hpanel rightpan">
        <div className="background-img">
          <div className="background-img-R">
            <div className='cardLoginContainer'>
              <span className='textRightpan'>login account</span>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default PageHomeLogin;
