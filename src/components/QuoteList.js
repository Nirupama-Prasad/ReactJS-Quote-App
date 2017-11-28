import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Quote from "./Quote";



class QuoteList extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                {this.props.quote_list.map(each => <Quote {... each}/>)}
            </div>
        );
    }
}

QuoteList.propTypes = {};

export default QuoteList;
