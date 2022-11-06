import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';



const Page2 = ({handleNext}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [check, setCheck] = useState(true);

  
  const handleCheck = (data)=>{
 if (data == "check")
 {
  if(check == true){
    console.log("I here by agree to the shifting charges.", data)
  }
 }
  }
  const handleSubmit = ()=>{
    const data = {
      selectedDate,
      check
    }
    localStorage.setItem("page2-data",JSON.stringify(data));
 //console.log("page2-data", data);
 handleNext();
  }
    
  return (
  
<div style={{border:''}}>
<Container maxWidth="sm" style={{alignItems:'center', padding:'10px 10px 10px 10px',border:''}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' , border:'1px solid black', textAlign:'center', borderRadius:'10px',}}>
          <div ><h2>Please proceed to book an appointment</h2></div>
          <br/>
          <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Choose a date"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
          </div>
          <br/>
          <div style={{display:'flex'}}>
          <Checkbox value={check} onClick={()=>handleCheck("check")}/>
          <p>I here by agree to the shifting charges.</p>
          </div>
          
          <div>
          <p style={{color: 'red'}}>Note: Shifting charges of Rs. 650/- will be applicable.</p>
          </div>
          <div>
        <Button   onClick={handleSubmit}  style={{backgroundColor:'red', color:'rgba(255,255,255,1)', width:'150px', height:'35px', fontWeight:'400px', borderRadius:'10px'}}>SUBMIT</Button>
       </div>
          
         

        </Box>
      </Container>
</div>
      
  
  )
}

export default Page2
