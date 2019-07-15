import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import DateTimeField  from 'react-bootstrap-datetimepicker';
import Rating from './ProfileParts/Rating';
import ReviewCard from './ProfileParts/ReviewCard';

import data from '../../CollegeInfo.json';
import '../../../static/css/college.css';
import '../../../static/css/react-datetime.css';

class CollegeProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            date: "1990-06-05",
            format: "YYYY-MM-DD",
            inputFormat: "DD/MM/YYYY",
            mode: "date",
            college: ""
            
        };
    }

    handleChange(newDate){
        console.log("newDate", newDate);
        return this.setState({date: newDate});
    }

    componentWillMount() {
        var ind = window.location.href.indexOf('college');
        var college = window.location.href.substring(ind+8).split("%20").join(" ");
        
        console.log(college);

        for (var i = 0; i < data.length; i++) {			
	    var obj = data[i];
            var coll = {};
            
	    if (obj.FIELD1 == college.trim()) {
	        coll.collegeName = obj.FIELD1;
	        
	        if (obj.FIELD2 == "11") { coll.collegeHiDegree = "Doctor's degree - research/scholarship and professional practice"; }
	        else if (obj.FIELD2 == "12") { coll.collegeHiDegree = "Doctor's degree - research/scholarship"; }
	        else if (obj.FIELD2 == "13") { coll.collegeHiDegree = "Doctor's degree -  professional practice"; }
	        else if (obj.FIELD2 == "14") { coll.collegeHiDegree = "Doctor's degree - other"; }
	        else if (obj.FIELD2 == "20") { coll.collegeHiDegree = "Master's degree"; }
	        else if (obj.FIELD2 == "30") { coll.collegeHiDegree = "Bachelor's degree"; }
	        else if (obj.FIELD2 == "40") { coll.collegeHiDegree = "Associate's degree"; }
	        else if (obj.FIELD2 == "0") { coll.collegeHiDegree = "Non-degree granting"; }
	        else if (obj.FIELD2 == "-3") { coll.collegeHiDegree = "Unavailable"; }
	        
	        if (obj.FIELD3 == "1") { coll.collegeType = "Four or more years"; }
	        else if (obj.FIELD3 == "2") { coll.collegeType = "At least 2 but less than 4 years"; }
	        else if (obj.FIELD3 == "3") { coll.collegeType = "Less than 2 years (below associate)"; }
	        else if (obj.FIELD3 == "-3") { coll.collegeType = "Unavailable"; }
	        
	        coll.collegeInStatePrice = obj.FIELD4 == null ? 'Unavailable' : obj.FIELD4;
	        coll.collegeOutStatePrice = obj.FIELD5 == null ? 'Unavailable' : obj.FIELD5;
	        coll.collegeAdmissionsYield = obj.FIELD6 == null ? 'Unavailable' : obj.FIELD6;
	        coll.collegePctAdmitted = obj.FIELD7 == null ? 'Unavailable' : obj.FIELD7;

                break;
	    }
        }

        this.state.college = coll;
        console.log(coll);
    }

    render() {
        return (
            <div style={{width: 0 }} id="collegeProfile">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
              <Grid fluid={true}>
                <Row className="collegeHeader">
                  <div className="mainPhoto" style={{backgroundImage: "url('http://www.med.upenn.edu/bateslab/Quad.jpg')" }}>
                    <div  >
                      <div className="datePicker">
                        <DateTimeField
                           dateTime={this.state.date}
                           format={this.state.format}
                           inputFormat={this.state.inputFormat}
                           onChange={this.handleChange}
                           viewMode={this.state.mode}
                           />
                      </div>
                      <Button className="reserveBtn" bsStyle="danger">Reserve</Button>
                    </div>
                  </div>
                </Row>
              </Grid>

              <Grid>
                <Row className="full-rows">
                  <Col sm={3} md={12}>
                    <h1>{this.state.college.collegeName}</h1> <br/>
                    <div className="collegeAbout">
                      <p>Penn dates its founding to 1740, when prominent evangelist George Whitefield had the idea of building a Philadelphia charity school that would double as a house of worship for his followers. After construction was underway, however, the cost was seen to be much greater than the available resources, and the project went unfinished for a decade.</p>
                      <ul>
                        <li>Highest Degree : {this.state.college.collegeHiDegree} </li>
                        <li>In State Price : {this.state.college.collegeInStatePrice} </li>
                        <li>Out State Price : {this.state.college.collegeOutStatePrice} </li>
                        <li>Admission Rate : {this.state.college.collegeAdmissionsYield} </li>
                      </ul>
                    </div>
                  </Col>

                </Row>
                
                <div className="borderLine"/>
                
                <Row className="full-rows" style={{marginTop: "2%"}} >
                  <Col md={6}>
                    <h3>Rating</h3> <br />

                    <Row style={{marginTop: "1%"}}>
                      <Col md={4} ></Col>
                      <Col md={2} ><h4>Overall :</h4> </Col>
                      <Col md={6}><Rating stars="4.8" reviewWidth="95%" /></Col>
                    </Row>
                    
                    <Row>
                      <Col md={4} ></Col>
                      <Col md={2} ><h4>Food :</h4> </Col>
                      <Col md={6}><Rating stars="4" reviewWidth="80%" /></Col>
                    </Row>

                    <Row>
                      <Col md={4} ></Col>
                      <Col md={2} ><h4>On-Campus :</h4> </Col>
                      <Col md={6}><Rating stars="4.8" reviewWidth="95%" /></Col>
                    </Row>

                    <Row>
                      <Col md={4} ></Col>
                      <Col md={2} ><h4>Off-Campus :</h4> </Col>
                      <Col md={6}><Rating stars="4.5" reviewWidth="90%" /></Col>
                    </Row>

                  </Col>
                  
                  <Col md={6}>
                    <h3>Reviews</h3>

                    <ReviewCard profile="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2-AAAAJGM2NWI1MzAzLWJhNmUtNDRiNy1hY2U4LTdmOTdhZGEzNTI2OQ.jpg" name="Kevin Foo" rating="10.0" comment="Way better than better than the Fu School of Engineering "/>

                  </Col>
                </Row>
              </Grid>
            </div>
        );
    }

}

         export default CollegeProfile;
