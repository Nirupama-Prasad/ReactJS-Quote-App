import React, { Component } from 'react';
import Quote from "./components/Quote";
import QuoteList from "./components/QuoteList";
import SearchForm from "./components/SearchForm";

// let quote_data=[{
//     text:'quote 1',
//     date:'date 1'
// },{
//     text: 'Quote 2',
//     date:'date 2'
// }];

class App extends Component {
    constructor() {
        super();
        this.state = {
            quote_data: []

        }
    }
    callMeBack = (in_quote, in_time) =>{
        let new_quote = {
            text: in_quote,
            date: in_time
        }
        console.log(in_quote);
        console.log(in_time);
        this.setState({
            quote_data: this.state.quote_data.concat(
                new_quote
            )
        });
    }

    render() {
    return (
        <div>
          <SearchForm call_me_back={this.callMeBack}/>
        <QuoteList quote_list = {this.state.quote_data}/>
        </div>
    );
  }
}

export default App;
