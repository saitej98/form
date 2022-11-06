import { Container } from '@mui/system'
import React from 'react'
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const Page3 = ({handleNext}) => {

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    localStorage.setItem("user has choosen upload doc-", JSON.stringify(value))
    console.log("page3-data", value);

  };

const handleUpload = ()=>{
  handleNext()
}
 
  return (
    <div>
     <Container maxWidth="sm" style={{alignItems:'center', padding:'10px 10px 10px 10px'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' , border:'1px solid red',padding:'20px 20px', borderRadius:'20px'}}>
          <div>
          <FormControl>
      <RadioGroup

        value={value}
        onChange={handleChange}
      >
        <br/>
        <br/>
         
         <FormControlLabel value="eKYC" control={<Radio />} label={<h2>eKYC using Aadhar No</h2>} />
         <p style={{marginLeft:'40px',}}>(Instant approval, faster processing)</p>
         
        <br/>
        <br/>
        <div>
        <FormControlLabel onClick={handleUpload} value="upload" control={<Radio />} label={<h2>Upload a scanned copy of your documents</h2>} />
        <p style={{marginLeft:'40px',}}>(48-72 hrs for document approval)</p>

        </div>
      </RadioGroup>
    </FormControl>
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default Page3
