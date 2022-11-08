import { useState, useEffect } from 'react'
import axios from 'axios'
import Data from './Data'
import { Box, Button, Grid, TextField, FormControl, Typography } from '@mui/material';

function GoogleSheet() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [status, setStatus] = useState('');
    const [error,setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("data---->",name,email,mobile,address,country)

        const data = {
            Name: name,
            Email: email,
            Mobile: mobile,
            Address: address,
            Country: country,
            Error : error,
            Status : status
           
        }
        //console.log('data--->',data)
        // axios.post('https://sheet.best/api/sheets/6408237f-e015-4237-b859-64c1a26e5e56',data).then(response => {
        //     console.log("data--->",response);
        //     setName('');
        //     setEmail('');
        //     setMobile('');
        //     setAddress('');
        //     setCountry('');
        // })

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
          };

        axios.post(
            "https://sheet.best/api/sheets/8d6e9ee1-bcad-41c5-9fcf-2eed701aeda6",data,axiosConfig
           
        )
            .then(response => {
                console.log(response)
                setName('');
                setName('');
                setEmail('');
                setMobile('');
                setAddress('');
                setCountry('');
                setStatus('');
                setError('');
            })
            .catch(error => {
                console.log(error.response);
            });

    }

    return (
        <Box sx={{ mx: 'auto', width: 250 }}>

            <form autoComplete="off" className='form-group'
                onSubmit={handleSubmit}>
                <Grid>
                    <Grid>
                        <Typography color='skyblue'>Name</Typography>
                        <TextField sx={{ width: '30ch' }} type='text' required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </Grid>
                    <Grid>
                        <Typography color='skyblue'>Email</Typography>
                        <TextField sx={{ width: '30ch' }} type='text' required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Grid>
                    <Grid>
                        <Typography color='skyblue'>Mobile</Typography>
                        <TextField sx={{ width: '30ch' }} type='text' required
                            onChange={(e) => setMobile(e.target.value)}
                            value={mobile}
                        />
                    </Grid>
                    <Grid>
                        <Typography color='skyblue'>Address</Typography>
                        <TextField sx={{ width: '30ch' }} type='text' required
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                        />
                    </Grid>
                    <Grid>
                        <Typography color='skyblue'>Country</Typography>
                        <TextField sx={{ width: '30ch' }} type='text' required
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                        />
                    </Grid>
                    {/* <Grid>
                        
                        <TextField sx={{ mt: 3, width: '30ch' }} type='text' required
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            disabled={ !name && !email && !mobile && !address && !country ? 'False' : 'True' }  
                        />
                    </Grid>
                    <Grid>
                       
                        <TextField sx={{ mt : 3, width: '30ch' }} type='text'
                            value={status}
                            disabled={ !name && !email && !mobile && !address && !country ? 'Yes' : 'No' }  
                        />
                    </Grid> */}
                     
                </Grid>
                <Button type='submit' sx={{ mt: 1, ml: 1.5, p: 1, width: '30ch' }}>Submit</Button>
            </form>
        </Box>
    );
}

export default GoogleSheet;