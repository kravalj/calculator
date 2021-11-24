import React from 'react';
import {Button, Card} from "@mui/material";


const LandingPage = () => {

    return (
        <div>
            <Card style={{width:'700px', margin: "auto", textAlign: 'center'}}>
                <Button variant="outlined">Přeplacená částka</Button>
                <Button variant="outlined">Délka Splácení</Button>
                <Button variant="outlined">HYPO</Button>
            </Card>
        </div>
    );
}

export default LandingPage;