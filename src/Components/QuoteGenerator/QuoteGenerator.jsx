import { useDispatch, useSelector} from "react-redux";
import { getRandomQuote, getRandomColor } from "./quoteSlice";
import {FaQuoteLeft, FaQuoteRight, FaTwitter} from "react-icons/fa"
import "./QuoteGenerator.css"

function QuoteGenerator () {
    const quote = useSelector(state => state.randomQuote.quote)
    const author = useSelector (state => state.randomQuote.author)
    const color = useSelector( state => state.randomQuote.color)
    const dispatch = useDispatch()

    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=` + `${quote}` + ` - ${author}`;

    return(
        <div className="background" style={{backgroundColor: color}}>
        <div className="wrapper" id="quote-box">
            <h2 id="text" style={{color: color}}>{quote}</h2>
            <h3 id="author" style={{color: color}}>- {author}</h3>
            <div className="button-wrapper">
                <button id="new-quote" style={{backgroundColor: color}} onClick={()=>{
                    dispatch(getRandomQuote())
                    dispatch(getRandomColor())
                }}>New Quote</button>
                <div className="tweet-box">
                    <a id="tweet-quote" href={tweetURL} target="_blank"><FaTwitter style={{backgroundColor: color}} className="twitter-icon" size="50"></FaTwitter></a>
                 </div>
            </div>
        </div>
        </div>
    );
}

export default QuoteGenerator;