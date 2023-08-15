import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';
const Headers = () => {
  return (
    <Grid container p={5} display={'flex'}>
        <Grid item  md={6} display={'flex'} >
        <PersonRoundedIcon style={{marginTop:'12px'}} />
        <Typography variant='h6' color={'gray'} style={{marginTop:'9px'}}>My Unplash</Typography>
        <TextField id="outlined-basic"  variant="outlined" style={{marginLeft:'35px'}} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <SearchRoundedIcon /> 
              Search by name 
            </InputAdornment>  
          ),
        }}
        /> 
        
        </Grid>
        
        <Grid item  md={6} >
        <Button variant="contained" color="success" style={{float:'right', height:'50px', borderRadius:'10px', marginTop:'5px'}}>Add a photo</Button>
        </Grid>
      
    </Grid>
    
  )
}

export default Headers