import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button :{
        borderRadius: '50%'
    }
})

const GroupedButton = () => {
    const classes = useStyle();
    

    return (
        <ButtonGroup className={classes.component} >
            <Button className={classes.button} >-</Button>
            <Button disabled>6</Button>
            <Button className={classes.button} >+</Button>
        </ButtonGroup>
    );
}

export default GroupedButton;