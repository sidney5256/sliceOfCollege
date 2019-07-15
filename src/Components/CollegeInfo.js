import React, { Component } from 'react';
import data from './CollegeInfo.json';

class CollegeInfo extends Component {
	
	constructor(props) {
    	super(props);
    	    this.state = {collegeName: "",};
	    this.state = {collegeHiDegree: ""};
	    this.state = {collegeType: ""};
	    this.state = {collegeInStatePrice: ""};
	    this.state = {collegeOutStatePrice: ""};
	    this.state = {collegeAdmissionsYield: ""};
	    this.state = {collegePctAdmitted: ""};
            this.state = {allColleges: []}
  	}
	
    componentWillMount() {
        var ind = window.location.href.indexOf('college');
        var college = window.location.href.substring(ind+8).split("%20").join(" ");
        
        console.log(college);
        var ans = [];
        for (var i = 0; i < data.length; i++) {			
	    var obj = data[i];

	    if (obj.FIELD1 == college.trim()) {
	        this.state.collegeName = obj.FIELD1;
	        
	        if (obj.FIELD2 == "11") { this.state.collegeHiDegree = "Doctor's degree - research/scholarship and professional practice"; }
	        else if (obj.FIELD2 == "12") { this.state.collegeHiDegree = "Doctor's degree - research/scholarship"; }
	        else if (obj.FIELD2 == "13") { this.state.collegeHiDegree = "Doctor's degree -  professional practice"; }
	        else if (obj.FIELD2 == "14") { this.state.collegeHiDegree = "Doctor's degree - other"; }
	        else if (obj.FIELD2 == "20") { this.state.collegeHiDegree = "Master's degree"; }
	        else if (obj.FIELD2 == "30") { this.state.collegeHiDegree = "Bachelor's degree"; }
	        else if (obj.FIELD2 == "40") { this.state.collegeHiDegree = "Associate's degree"; }
	        else if (obj.FIELD2 == "0") { this.state.collegeHiDegree = "Non-degree granting"; }
	        else if (obj.FIELD2 == "-3") { this.state.collegeHiDegree = "Unavailable"; }
	        
	        if (obj.FIELD3 == "1") { this.state.collegeType = "Four or more years"; }
	        else if (obj.FIELD3 == "2") { this.state.collegeType = "At least 2 but less than 4 years"; }
	        else if (obj.FIELD3 == "3") { this.state.collegeType = "Less than 2 years (below associate)"; }
	        else if (obj.FIELD3 == "-3") { this.state.collegeType = "Unavailable"; }
	        
	        this.state.collegeInStatePrice = obj.FIELD4;
	        this.state.collegeOutStatePrice = obj.FIELD5;
	        this.state.collegeAdmissionsYield = obj.FIELD6;
	        this.state.collegePctAdmitted = obj.FIELD7;
                break;
	    }
        }
        this.state.allColleges = ans;
    }
    
    render(collegeName) {
        return (
			<div>
				<h1>College Info<br/></h1>
				<b>{this.state.collegeName}</b><br/>
				<b>Institution Level:</b> {this.state.collegeType}<br/>
				<b>Highest Degree:</b> {this.state.collegeHiDegree}<br/>
				<b>In-state Tuition Price:</b> ${this.state.collegeInStatePrice}<br/>
				<b>Out-of-state Tuition Price:</b> ${this.state.collegeOutStatePrice}<br/>
				<b>Admissions Yield:</b> {this.state.collegeAdmissionsYield}%<br/>
				<b>Percent Admitted:</b> {this.state.collegePctAdmitted}%<br/>
                               
                </div>
        );
    }
}

export default CollegeInfo;
