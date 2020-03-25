import React, {Component} from "react"
import classNames from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


class QuoteGenerator extends Component {
  constructor() {
      super()
      this.state ={
        author:"",
        quote:"",




      }

this.handleChange = this.handleChange.bind(this)
this.handleClick = this.handleClick.bind(this)
this.btnClick = this.btnClick.bind(this)
}


//fetch the api
//componentDidMount is an api for getting data that we expected our
//component to have in the beginning

     componentDidMount() {

       fetch("http://quotes.stormconsultancy.co.uk/quotes.json")
       .then(response => response.json())
       .then(response => {
          let data = response
          let quoteNum = Math.floor(Math.random() * data.length) //quote number
          let randomQuote = data[quoteNum] //actual quote

        // console.log(data.length)
        // console.log(data[0].id)
         this.setState({

             quote: randomQuote['quote'],
            author: randomQuote['author']
         })

       })

}

//get the event the prevent the default from trying to refresh the page

  //get the event the prevent the default from trying to refresh the page
  //randNum gets a random index in the array
  //randQuote uses that index to get the data from that randomly selected index
  //finally set the state to that randomly selected quote

  //get the event the prevent the default from trying to refresh the page

  handleClick(event){ this.componentDidMount()}

  handleChange(event) {

const {name, value} = event.target

    this.setState({
        [name]: value
    })

  }

  btnClick() {
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)
      );
    }

    render() {



        return (


<div className="quote-box">
<h1 className='title'>Random Quote App</h1>
<p className="quote-text">{this.state.quote}</p>
<p className="quote-author">{this.state.author}</p>
<a>
<button className="social" onClick={this.handleClick}>Get new Quote </button>
<button className="fab fa-twitter social" onClick={this.btnClick}>
<FontAwesomeIcon  icon={faTwitter} className="twitter" size="1xS" />
Tweet it! </button>
</a>


</div>



        )
    }



}

export default QuoteGenerator
