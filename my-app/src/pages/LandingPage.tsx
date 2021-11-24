import React from 'react';
import {Button, Card,} from "@mui/material";
import '../styles/LandingPage.css';
import {Link} from 'react-router-dom';


const LandingPage = () => {

    return (
        <div className="picture">
            <Card elevation={10} className="picture" style={{opacity: '50%'}}>
                <div className='buttons'>
                    <Link to="/OverPayment">
                        <Button variant="outlined">Přeplacená částka</Button>
                    </Link>
                </div>
                <div className="buttons">
                    <Button variant="outlined">Délka Splácení</Button>
                </div>
                <div className="buttons">
                    <Button variant="outlined">HYPO</Button>
                </div>
            </Card>
        </div>
    );
}

export default LandingPage;