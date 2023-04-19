import React, {Component} from 'react';

class QuoteOfTheDay extends Component{
    state = {
        quote: '',
        author: ''
    };

    fetchQuote = () =>{
        fetch('https://api.quotable.io/random').then((resp)=>resp.json())
        .then((data)=>{
            this.setState({
                quote: data.content,
                author: data.author
            });
        }).catch((error)=>{
            console.error('Error', error);
        });
    }

    render(){
        const {quote, author} = this.state;
        return (
            <div style={{textAline: 'center', marginTop: '2rem'}}>
                <button className='btn btn-info' onClick={this.fetchQuote}>Get quote of the day</button>
                {quote && (
                    <div style={{marginTop: '2rem'}}>
                        <p style={{fontSize: '2rem'}}>"{quote}"</p>
                        <p style={{fontStretch: 'italic', fontSize: '2rem'}}>-{author}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default QuoteOfTheDay;