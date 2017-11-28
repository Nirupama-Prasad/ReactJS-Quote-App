import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SearchForm extends Component {
    constructor() {
        super();
    }

    handleClick = (event) => {

        event.preventDefault();
        let Url = 'https://api.tronalddump.io/search/quote?query='+this.textInput.value;
        let config ={
            headers:{}
        }
        var that = this;

        axios.get(Url).then(
            function (resp) {
                console.log(resp);
                let quote = resp.data._embedded.quotes[0]['value'];
                let time = resp.data._embedded.quotes[0]['appeared_at'];
                that.props.call_me_back(quote,time);

            }
        )

    }
    render() {
        return (
            <div>
                <form type='submit' onSubmit={this.handleClick}>
                    <input ref = {(input) => {this.textInput = input;}} type = 'text'/>
                    <button type ='submit'> Search! </button>
                </form>
            </div>
        );
    }
}

SearchForm.propTypes = {};

export default SearchForm;
