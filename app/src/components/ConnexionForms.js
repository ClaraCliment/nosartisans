import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from './Connexion/Login';
import Inscription from './Connexion/Inscription';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default function ConnexionForms() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth:"600px", my:4, mx:"auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{width:"100%"}} >
            
            <Tab sx={{ fontSize:"16px"}} label="Connexion" {...a11yProps(0)} />
            <Tab sx={{ fontSize:"16px"}} label="Inscription" {...a11yProps(1)} />
            
        </Tabs>
      </Box >
      <TabPanel value={value} index={0} sx={{width:"100%"}}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1} sx={{width:"100%"}}>
        <Inscription />
      </TabPanel>
    </Box>
  );
}
