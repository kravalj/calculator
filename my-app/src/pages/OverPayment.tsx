import React from 'react';
import "../styles/OverPayment.css"
import {Box, Button, Card, TextField, Typography} from "@mui/material";
import {Link} from 'react-router-dom';


const OverPayment = () => {

    return (
        <div className="picture">
            <Card elevation={10} className="picture" style={{opacity: '50%'}}>
                <Box className='TextField'
                     component="form"
                     sx={{
                         '& > :not(style)': {m: 1, width: '25ch'},
                     }}
                     noValidate
                     autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Loan Amount" variant="outlined"/>
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Interest" variant="outlined"/>
                </Box>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Number of Payments" variant="outlined"/>
                </Box>
                <div className='buttonCalc'>
                    <Button variant="outlined" size="large" style={{backgroundColor: 'lightblue', color: 'darkblue'}}>
                        Calculate
                    </Button>
                </div>
                <div className='buttonCalc2'>
                    <Link to="/">
                        <Button variant="outlined" size="small">
                            Back
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}

export default OverPayment;