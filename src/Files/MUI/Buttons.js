import React from 'react';
import {Button} from '@material-ui/core';

function Buttons() {
    return (
        <div className='m-5'>
            <button>Normal button</button>
            <Button variant='text'>Text varient</Button>
            <Button variant="contained">Contained Button</Button>
            <Button variant="outlined">Outline Button</Button>
            <hr />
            <Button>text</Button>
            <Button disabled>disabled</Button>
            <Button href="#">Link</Button>
            <hr />
            <Button variant="contained">Contained</Button>
            <Button variant='contained' disabled>Disabled</Button>
            <Button variant="contained" href="#">Link</Button>
            <hr />
            <Button variant='contained' disableElevation>Disable Elevation or shadow</Button>
            <hr />
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>Disabled outlined</Button>
            <Button variant="outlined" href="#">Outline Link</Button>
            <hr /> 
            <Button variant="outlined" onClick={()=>{alert('Outlined variant')}}>onClick</Button>
            <hr />
            <Button variant='text' color="primary">text color</Button>
            <Button variant='contained' color="success">Contained color</Button>
            <Button variant="outlined" color="info">Outlined color</Button>
            <hr />
            <Button color="secondary" variant="contained">Secondary</Button>
            <Button variant="contained" color="success">
            Success
            </Button>
            <Button variant="outlined" color="error">
            Error
            </Button>
            <hr />
            <Button variant="text" size="small">Small text</Button>
            <Button variant="text" size="medium">Medium text</Button>
            <Button variant="text" size="large">Large text</Button>
            <hr />
            <Button variant="contained" size="small" color="secondary">Small text</Button>
            <Button variant="contained" size="medium" color="info">Medium text</Button>
            <Button variant="contained" size="large" color="">Large text</Button>
            <hr />
            <Button variant="outlined" size="small" color="primary">Small text</Button>
            <Button variant="outlined" size="medium" color="primary">Medium text</Button>
            <Button variant="outlined" size="large" color="primary">Large text</Button>
            <hr />
            
        </div>
    )
}

export default Buttons;
