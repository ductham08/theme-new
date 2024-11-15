import { hg4hubkj2noin } from '../../assets/images/images'
import React from 'react'
// import { logo, logo_text, search } from './Publics/images/images'

const FinalComponent = () => {
    return (
        <div className="business">

            <div className="top-header">
                <div className="container">
                    <img src={hg4hubkj2noin} width="140" className="metalogo" alt="" />
                    <div className="search-th">
                        <div className="icon-th">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2744 9.0509C10.9663 8.10889 11.375 6.94592 11.375 5.6875C11.375 2.54638 8.82862 0 5.6875 0C2.54638 0 0 2.54638 0 5.6875C0 8.82862 2.54638 11.375 5.6875 11.375C6.94626 11.375 8.10951 10.9661 9.05166 10.2738L9.0509 10.2744C9.07671 10.3094 9.10545 10.3429 9.13713 10.3746L12.5063 13.7437C12.848 14.0854 13.402 14.0854 13.7437 13.7437C14.0854 13.402 14.0854 12.848 13.7437 12.5063L10.3746 9.13713C10.3429 9.10545 10.3094 9.07671 10.2744 9.0509ZM10.5 5.6875C10.5 8.34537 8.34537 10.5 5.6875 10.5C3.02963 10.5 0.875 8.34537 0.875 5.6875C0.875 3.02963 3.02963 0.875 5.6875 0.875C8.34537 0.875 10.5 3.02963 10.5 5.6875Z" fill="#474747" />
                            </svg>
                        </div>
                        <input type="text" placeholder="How can we help?" />
                    </div>
                </div>
            </div>
            <div className="masheader" style={{ marginBottom: "70px" }}>
                <div className="wrapper">
                    <div className="container">
                        <p className="businesshelp" style={{ visibility: "hidden" }}>
                            Business Help Center </p>
                        <p className="businesshelpcenter">Facebook Help
                            Center</p>
                    </div>
                </div>
            </div>

            <div className="main-content" style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center"
            }}>

                <div className='container'>
                    <p style={{ color: "#267df1" }}>A review for this Page was requested by an admin or advertiser to determine if it was correctly restricted from advertising. We're reviewing the Page and will notify you here within 48 hours from when the review was requested.
                        <a
                            href='#'
                            style={{
                                outline: "none",
                                color: "#267df1",
                                fontWeight: "700",
                                textDecoration: 'none'
                            }}
                        >
                            Go to Home ?
                        </a></p>

                </div>


            </div>

            {/* FOOTER */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Marketing on Facebook</p>
                                    <p>Success Stories</p>
                                    <p>Measurement</p>
                                    <p>Industries</p>
                                    <p>Inspiration</p>
                                    <p>Events</p>
                                    <p>News</p>
                                    <p>Site map</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Marketing objectives</p>
                                    <p>Build your presence</p>
                                    <p>Create awareness</p>
                                    <p>Drive discovery</p>
                                    <p>Generate leads</p>
                                    <p>Boost sales</p>
                                    <p>Earn loyalty</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Facebook Pages</p>
                                    <p>Get started with Pages</p>
                                    <p>Setting up your Page</p>
                                    <p>Manage your Facebook Page</p>
                                    <p>Promote your Page</p>
                                    <p>Messaging on your Page</p>
                                    <p>Page Insights</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Facebook ads</p>
                                    <p>Get started with ads</p>
                                    <p>Buying Facebook ads</p>
                                    <p>Ad formats</p>
                                    <p>Ad placement</p>
                                    <p>Choose your audience</p>
                                    <p>Measure your ads</p>
                                    <p>Managing your ads</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomfooter">
                <div className="container">
                    <ul>
                        <li>English (UK)</li>
                        <li>English (US)</li>
                        <li>Español</li>
                        <li>Português (Brasil)</li>
                        <li>Français (France)</li>
                        <li>Español (España)</li>
                        <li>More languages</li>
                    </ul>
                    <ul>
                        <li>© 2023 Meta</li>
                        <li>About</li>
                        <li>Developers</li>
                        <li>Careers</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Terms</li>
                        <li>Help Centre</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FinalComponent
