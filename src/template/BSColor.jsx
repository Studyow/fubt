import React from 'react';
import { Link } from 'react-router-dom'
import imgsun from '../assets/icon/sun.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const BSColor = () => {


    const switchTheme1 = e => {
        var element = document.body;
        element.dataset.bsTheme =
          element.dataset.bsTheme == "light" ? "dark" : "light";
     }
    

    return (
        <div>
                <Form 
                    className='mySwitch'
                    onClick={e => switchTheme1(e)}>
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        // label="Check this switch"
                    />
                </Form>
                {/* <Button variant="secondary"
                    onClick={e => switchTheme1(e)}>
                    <img src={imgsun} alt="" />
                </Button> */}
        </div>
    );
}

export default BSColor;
