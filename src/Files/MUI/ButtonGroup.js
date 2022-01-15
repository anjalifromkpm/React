import React from 'react';
import {Button,ButtonGroup} from '@material-ui/core';
let ButtonGro = ()=>{
    return (
        <div className='m-5'>
           <ButtonGroup  variant='outlined' disableElevation>
            <Button>One</Button> 
            <Button>Two</Button> 
            <Button>Three</Button> 
           </ButtonGroup>
           <hr />
           <ButtonGroup  variant='contained' color="secondary" disableElevation>
            <Button>One</Button> 
            <Button>Two</Button> 
            <Button>Three</Button> 
           </ButtonGroup>
           <hr />
           <ButtonGroup  variant='contained' color="primary" size="large" disableElevation>
            <Button>One</Button> 
            <Button>Two</Button> 
            <Button>Three</Button> 
           </ButtonGroup>
           <hr />
           <div className='d-flex justify-content-around'>
            <ButtonGroup  variant='contained' color="primary" size="medium" orientation='vertical' disableElevation>
                <Button>One</Button> 
                <Button>Two</Button> 
                <Button>Three</Button> 
            </ButtonGroup>
            <ButtonGroup  variant='outlined' color="primary" size="medium" orientation='vertical' disableElevation>
                <Button>One</Button> 
                <Button>Two</Button> 
                <Button>Three</Button> 
            </ButtonGroup>
            <ButtonGroup  variant='text' color="primary" size="medium" orientation='horizontal' disableElevation>
                <Button>One</Button> 
                <Button>Two</Button> 
                <Button>Three</Button> 
            </ButtonGroup>
           </div>
        </div>
    )
}

export default ButtonGro;
