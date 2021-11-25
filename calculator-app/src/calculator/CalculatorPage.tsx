import React, {useEffect, useState} from 'react';
import '../styles/Calculator.css';
import {Card} from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Calculator from "./calculator";
import {axios_api} from "../api";

const CalculatorPage = () => {

    const [calculatorRecord, setCalculatorRecord] = useState<Calculator[]>([])

    function onHandleSubmit() {

        axios_api.authorizedRequests.get<Calculator[]>(`/calculate`).then(response => setCalculatorRecord(response))
    }

    return (
        <div >
          <Card className='text' elevation={15} >
              <Box className='button'
                  component="form"
                  sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                  <TextField id="outlined-basic" label='Loan' variant="outlined" onChange={event => event.target.value}/>
              </Box>

              <Box className='button'
                  component="form"
                  sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                  <TextField id="outlined-basic" label="Interest rate" variant="outlined" onChange={event => event.target.value}/>
              </Box>

              <Box className='button'
                  component="form"
                  sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
              >
                  <TextField id="outlined-basic" label="Amount of payments" variant="outlined" onChange={event => event.target.value}/>
              </Box>
              <div>
                  <Link to="/AnswerPage" style={{textDecoration: 'none'}}>
                  <Button variant="outlined" size="large" className='buttonCalc' style={{backgroundColor: 'lightblue'}} onClick={onHandleSubmit}>
                      Calculate
                  </Button>
                  </Link>
              </div>
          </Card>
        </div>
    );
}

export default CalculatorPage;