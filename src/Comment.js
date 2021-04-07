//your code here

import React, { Component } from 'react';

export default class ColorBox extends Component {

    state = {
      todos: [
        
      ]
    }

    render() {
        return (
            <div className="comment"> 
            <p>{this.props.commentText}</p>
            
            </div>
        );
    
    }
}
