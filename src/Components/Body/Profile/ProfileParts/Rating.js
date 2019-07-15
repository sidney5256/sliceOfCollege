import React, { Component } from 'react';

class Rating extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <li className="reviewChartItem">
              <div className="reviewLabel">
                <div className="reviewStars">
                  <span className="starIcon"></span>
                </div>
                {this.props.stars}
              </div>
              <div className="reviewNum">
                {this.props.reviewNum }
              </div>
              <div className="reviewFill" style={{width: this.props.reviewWidth}}>
              </div>
            </li> 
        );
    }
}

export default Rating;
