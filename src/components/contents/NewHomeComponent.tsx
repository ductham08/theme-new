import React from 'react'
import { Link } from 'react-router-dom'
import { wh65k7i2hh34k5bn3 } from '../../assets/images/images'
import moment from 'moment';
import "../../assets/css/style.css"

const NewHomeComponent = () => {

    const currentDate = moment().format('MMMM D, YYYY')

    return (
        <div className="main new-home-content">
            <div className="container">
                <div className="col-md-7 col-12 main-content">
                    <div className="thumnail col-12">
                        <div className="content">
                            <img src={wh65k7i2hh34k5bn3} style={{ margin: "auto" }} width="100%" alt="" />
                            <b style={{ fontSize: "1.5rem" }}>Welcome To Facebook Protect.</b>
                            <p>Your page's accessibility is limited, so we ask that higher security requirements be applied to that account We created this security program to unlock your Pages.</p>
                            <p><a href="" className='more'>More infomation</a></p>

                            <div className="list-th">
                                <div className="item-list">
                                    <div className="icon tik">
                                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4854 0.439339C14.0606 -0.146446 14.9933 -0.146446 15.5686 0.439339C16.1368 1.01794 16.1437 1.95163 15.5895 2.53894L7.74859 12.5195C7.73727 12.5339 7.72518 12.5476 7.71237 12.5607C7.13712 13.1464 6.20444 13.1464 5.62919 12.5607L0.431442 7.26777C-0.143814 6.68198 -0.143814 5.73223 0.431442 5.14645C1.0067 4.56066 1.93937 4.56066 2.51463 5.14645L6.6264 9.33349L13.4463 0.484209C13.4584 0.46847 13.4715 0.453486 13.4854 0.439339Z" fill="white" />
                                        </svg>
                                    </div>
                                    <p>We've enabled advanced protections to unlock your Page</p>
                                </div>
                                <div className="line">

                                </div>
                                <div className="item-list">
                                    <div className="icon tok" >
                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5 1C14.7761 1 15 1.22386 15 1.5V10.5C15 10.7761 14.7761 11 14.5 11H1.5C1.22386 11 1 10.7761 1 10.5V1.5C1 1.22386 1.22386 1 1.5 1H14.5ZM1.5 0C0.671573 0 0 0.671573 0 1.5V10.5C0 11.3284 0.671573 12 1.5 12H14.5C15.3284 12 16 11.3284 16 10.5V1.5C16 0.671573 15.3284 0 14.5 0H1.5Z" fill="white" />
                                            <path d="M7 3.5C7 3.22386 7.22386 3 7.5 3H12.5C12.7761 3 13 3.22386 13 3.5C13 3.77614 12.7761 4 12.5 4H7.5C7.22386 4 7 3.77614 7 3.5Z" fill="white" />
                                            <path d="M5.50355 2.64645C5.69882 2.84171 5.69882 3.15829 5.50355 3.35355L4.00355 4.85355C3.80829 5.04882 3.49171 5.04882 3.29645 4.85355L2.79645 4.35355C2.60119 4.15829 2.60119 3.84171 2.79645 3.64645C2.99171 3.45118 3.30829 3.45118 3.50356 3.64645L3.65 3.79289L4.79645 2.64645C4.99171 2.45118 5.30829 2.45118 5.50355 2.64645Z" fill="white" />
                                            <path d="M7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5Z" fill="white" />
                                            <path d="M5.50355 6.64645C5.69882 6.84171 5.69882 7.15829 5.50355 7.35355L4.00355 8.85355C3.80829 9.04882 3.49171 9.04882 3.29645 8.85355L2.79645 8.35355C2.60119 8.15829 2.60119 7.84171 2.79645 7.64645C2.99171 7.45118 3.30829 7.45118 3.50356 7.64645L3.65 7.79289L4.79645 6.64645C4.99171 6.45118 5.30829 6.45118 5.50355 6.64645Z" fill="white" />
                                        </svg>

                                    </div>
                                    <p>Telow, we walk you through the process in detall and help you fully activate to unlock your Page.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="button col-12">
                        <Link to="/buiness">Continue</Link>
                    </div>
                    <p className='date'>Your page was restricted on <b>{currentDate}</b>.</p>

                </div>
            </div>

            {/* <div className="footer">
                <Link to="/https://www.facebook.com/legal/terms?paipv=0&eav=AfZ-n0rF_sl3GP74yuYqcJAuMjtNpTHfUcnbG6w6xeh0GTLwLIRte40HvdraKz052z0&_rdr">Terms of Service © 2023</Link>
            </div> */}

        </div>
    )
}

export default NewHomeComponent
