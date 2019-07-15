import React, { Component } from 'react';

class ReviewCard extends Component {

    constructor(props){
        super(props);
    }
    
    render() {
        return(
                      <div className="reviewCard">
                        <div className="profileAvatarCont">
                          <img className="profileAvatar" alt= "Review Card Avatar" src={this.props.profile}/>
                        </div>
                        <div className="reviewCardInfo">
                          <div className="reviewNameCont">
                            <span id="reviewerName"> {this.props.name} </span>
                          </div>
                          <div className="reviewStarCont">
                            <span id="rating">{this.props.rating}</span>
                          </div>
                          <div className="ratingTextCont">
                            <span id="ratingText"> {this.props.comment} </span>
                          </div>
                        </div>
            </div>
          
        );
    }
}

export default ReviewCard;
