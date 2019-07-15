import React, { Component } from 'react';
import '../../../static/css/CollegeStudentProfile.css';
import profilePic from '../../../static/img/quaker.jpg';
import Rating from './ProfileParts/Rating';
import ReviewCard from './ProfileParts/ReviewCard';

class App extends Component {
    render() {
        return (

                <div id="noPad" className = "container">
                    <div className="BannerCont">
                        <div className="userInfoCont">

                        <div className="userImgCont">
                            <img className="userImg" alt="profile pic" src={profilePic} />
                        </div>
                        <div className="userInfo">
                            <div className="userName">
                                <span id="name">Quaker Ben Franklin</span>
                            </div>
                            <div className="rateCont">
                                <span className="bolded"> Rating </span>
                                <span id="rate">4.0</span>
                            </div>
                            <div className="majorCont">
                                <span className="bolded"> Major </span>
                                <span id="major">Computer Science</span>
                            </div>
                            <div className="schoolCont">
                                <span className="bolded"> School </span>
                                <span id="school">University of Pennsylvania</span>
                            </div>
                            <div className="housingCont">
                                <span className="bolded"> Housing </span>
                                <span id="housing"> On Campus </span>
                            </div>

                        </div>
                        <div className = "divLine"></div>

                    </div>
                </div>
                    <div className="profileBody">
                        <div className="bioCont">
                            <h3> Bio </h3>
                            <p className="bio">
                                Unbeknownst to the majority of my friends, I am the University of Pennsylvania’s mascot, Quaker Ben Franklin. Although historically the Quaker’s true identity has remained secret, in recent years it has become custom for the identity of the mascots (there are currently three athletes) to be disclosed.  Whenever I tell someone that I am “The Quaker,” they always respond with, “Do you get paid?”  For me, the experience is worth so much more than any paycheck could provide, and even without a paycheck, I embrace the opportunity with open arms.
                            </p>
                            <p className="bio">
                                As soon as I step into Ben Franklin’s suit, I become a different person; I put on a different persona, and I become famous. Everybody, whether it is opponent fans or our own, falls in love with me. Much like they would a sports star, the fans bombard me with pictures and accordingly I act like a star.  I refuse to settle for anything less than on-court seats, and I have a virtual all-access pass that security guards never question, even when I romp through the stands. I am the face of the university, a student athlete, and part of a long tradition of spirit that fills the halls of the majestic Palestra and the bleachers of the powerful Franklin field. I carry on tradition that has been acted and reenacted for hundreds of years, and I am a piece of the excellence that Penn offers. I have the ability and the responsibility to inspire entire crowds to their feet, to pump up every fan in the stands, and at the same time, I am to act as the voice of those fans. I wear the Penn logo with dignity not only to honor the university but to commend its alumni as well.

                                I am a true Penn Quaker, and I bleed Red and Blue!!!
                            </p>
                        </div>
                        <div className = "divLine"></div>

                    </div>
                    <div className="rateCont">
                      <div className="sectionSubtitle">
                        <h3> Reviews </h3>
                        <span id="reviewCount"> (200)</span>
                      </div>
                      <div className= "reviewChartCont">
                        <ul className="reviewChart">
                          <Rating stars="4 Stars" reviewNum="90" reviewWidth="45%"/>
                          <Rating stars="2 stars" reviewNum="30" reviewWidth="15%"/>
                          <Rating stars="1 stars" reviewNum="10" reviewWidth="5%"/>
                        </ul>
                      </div>


                      <div className="reviewsCont">
                        <ReviewCard profile="https://www.fillmurray.com/150/150" name="Bill Murray" rating="4.0" comment="Yeah. This dude was great!"/>
                        <ReviewCard profile="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2-AAAAJGM2NWI1MzAzLWJhNmUtNDRiNy1hY2U4LTdmOTdhZGEzNTI2OQ.jpg" name="Kevin Foo" rating="10.0" comment="Way better than better than the Fu School of Engineering "/>
                        <ReviewCard profile="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA1ZAAAAJDBmZjFkNWJlLTkxOTktNGVmNy05ODVmLWQ4NWJkZTA3N2FkNA.jpg" name="Hui Wah Chiang" rating="5.0" comment="Please accept me"/>
                      </div>

                    </div>
                </div>
            // End of container
        );
    }
}

export default App;
