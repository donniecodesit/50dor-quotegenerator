import { Component } from "react";
import QuotesText from "../Components/QuotesText";
import QuoteAuthor from "../Components/QuoteAuthor";
import Buttons from "../Components/Buttons";
import axios from "axios";
import "./Quotes.css";

export default class Quotes extends Component {
  state = {
    quote: "Click the button...",
    author: "",
    quotesData: [],
    color: "rgb(127, 95, 255)",
  };

  randomColor = () => {
    let colorPatterns = "1234567890ABC";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPatterns[Math.floor(Math.random() * 13)];
    }
    return color;
  };

  componentDidMount() {
    if (this.state.quotesData.length > 0) return;
    else this.fetchQuotes();
  }

  fetchQuotes = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/b1nary/ea8fff806095bcedacce/raw/6e6de20d7514b93dd69b149289264997b49459dd/enterpreneur-quotes.json"
      )
      .then((response) => {
        const quotesData = [...response.data];
        const color = this.randomColor;
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        this.setState({
          quotesData: quotesData,
          color: color,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClick = () => {
    let randomIndex = Math.floor(Math.random() * 325);
    let { text, from } = this.state.quotesData[randomIndex];

    const color = this.randomColor();
    document.body.style.color = color;
    document.body.style.backgroundColor = color;

    this.setState({
      quote: text.replace("“", "").replace("”", ""),
      author: from,
      color: color,
    });
  };

  render() {
    return (
      <div id="quote-box">
        <QuotesText quote={this.state.quote} color={this.state.color} />
        <QuoteAuthor author={this.state.author} color={this.state.color} />
        <Buttons handleClick={this.handleClick} color={this.state.color} />
      </div>
    );
  }
}
