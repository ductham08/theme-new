import React from 'react'
import { Link } from 'react-router-dom'
import { faviconMet } from '../../assets/images/images'
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
                            <img src={faviconMet} style={{ margin: "auto" }} width="75px" alt="" />
                            <div className="title">
                                <b className='text'>Meta Business Support</b>
                                <div className="icon-check">
                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="11" y="13" width="26" height="23" fill="white"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2432 3.21986C21.3096 -1.07329 27.6902 -1.07329 30.7569 3.21986L31.2451 3.90334C31.7846 4.65892 32.6909 5.06349 33.6136 4.96097L35.7896 4.71917C40.687 4.17504 44.825 8.31305 44.2809 13.2103L44.0392 15.3864C43.9366 16.3092 44.3411 17.2153 45.0967 17.755L45.7802 18.2432C50.0733 21.3096 50.0733 27.6902 45.7802 30.7569L45.0967 31.2451C44.3411 31.7846 43.9366 32.6909 44.0392 33.6136L44.2809 35.7896C44.825 40.687 40.687 44.825 35.7896 44.2809L33.6136 44.0392C32.6909 43.9366 31.7846 44.3411 31.2451 45.0967L30.7569 45.7802C27.6902 50.0733 21.3099 50.0733 18.2432 45.7802L17.755 45.0967C17.2153 44.3411 16.3092 43.9366 15.3863 44.0392L13.2103 44.2809C8.31305 44.825 4.17504 40.687 4.71917 35.7896L4.96097 33.6136C5.06349 32.6909 4.65892 31.7846 3.90334 31.2451L3.21986 30.7569C-1.07329 27.6902 -1.07329 21.3099 3.21986 18.2432L3.90334 17.755C4.65892 17.2153 5.06349 16.3092 4.96097 15.3863L4.71917 13.2103C4.17504 8.31305 8.31305 4.17504 13.2103 4.71917L15.3864 4.96097C16.3092 5.06349 17.2153 4.65892 17.755 3.90334L18.2432 3.21986ZM34.0014 17.5617C35.0022 18.5626 35.0022 20.1855 34.0014 21.1863L24.2135 30.9742C22.9563 32.2316 20.9177 32.2316 19.6606 30.9742L14.9987 26.3123C13.9978 25.3115 13.9978 23.6886 14.9987 22.6877C15.9996 21.6869 17.6224 21.6869 18.6233 22.6877L21.937 26.0015L30.3768 17.5617C31.3776 16.5608 33.0005 16.5608 34.0014 17.5617Z" fill="#0081FB"/>
                                    </svg>
                                </div>
                            </div>
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
