import React from 'react';
import '../styles/AnswerPage.css';
import {Card} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"


const Calculator = () => {

    return (
        <div>
            <Card className='text2' elevation={15}>

                <TextField className='button2'
                           id="outlined-read-only-input"
                           label="Monthly payment"
                           defaultValue="Hello World"
                           InputProps={{
                               readOnly: true,
                           }}/>

                <TextField className='button2' style={{marginTop: '20px'}}
                           id="outlined-read-only-input"
                           label="Interest amount"
                           defaultValue="Hello World"
                           InputProps={{
                               readOnly: true,
                           }}/>

                <TextField className='button2' style={{marginTop: '20px'}}
                           id="outlined-read-only-input"
                           label="Overall amount payed"
                           defaultValue="Hello World"
                           InputProps={{
                               readOnly: true,
                           }}/>
                <div>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <Button variant="outlined" size="large" className='buttonCalc2'
                                style={{backgroundColor: 'lightcyan', width: '120px'}}>
                            Back
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}

export default Calculator;