import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { sendAllImage } from '../servicesAxios/controlador';
const Body = () => {
    const [img, setImag] = useState([]);
    const getData = async () =>{
        const response = await sendAllImage()
        setImag(response)
        console.log(response)
    }
    useEffect(()=>{
     getData()
    },[])
    console.log(img)
  return (
    <Grid container p={5} display={'flex'}> 
     <Grid item md={12}>
       dasdsad
     </Grid>
    </Grid>
  )
}

export default Body