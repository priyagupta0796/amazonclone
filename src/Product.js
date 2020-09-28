import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

function product() {
    return (
        <div className="headertwo">
            <div className="headertwo-option">
                <div className="headertwo_deliver">
                    <LocationOnOutlinedIcon />

                    <div className="headertwo_span">
                        <span>Deliver To</span>
                        <span>India</span>
                    </div>
                </div>

                <div className="headertwo_option1">
                    <Link to='/' className="headertwo_span1">
                        <span>Today's deal</span>

                    </Link>
                    <Link to='/' className='headertwo_span1'>
                        <span>Customer Services</span>
                    </Link>

                    <Link to='/' className="headertwo_span1">
                        <span>Gift Card</span>
                    </Link>
                    <Link to='/' className="headertwo_span1">
                        <span>Register</span>
                    </Link>
                    <Link to='/' className="headertwo_span1">
                        <span>Sell</span>
                    </Link>

                </div>

                <div className="header_span2">
                <span>Amazon's reponse to covid-19</span>
                  </div>
            </div>

           </div>
    )
}

export default product
