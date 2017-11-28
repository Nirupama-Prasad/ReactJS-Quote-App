import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Quote extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <h4>{this.props.text}</h4>
                <h6>{this.props.date}</h6>
            </div>
        );
    }
}

Quote.propTypes = {};

export default Quote;
