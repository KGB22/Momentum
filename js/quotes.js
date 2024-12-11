const quotes = [
    {quote : "첫번째 명언",
    author: "첫번쨰 명언 작가"},
    {quote : "두번째 명언",
    author: "두번쨰 명언 작가"},
    {quote : "세번째 명언",
    author: "세번쨰 명언 작가"},
    {quote : "네번째 명언",
    author: "네번쨰 명언 작가"},
    {quote : "다섯번째 명언",
    author: "다섯번쨰 명언 작가"},
    {quote : "여섯번째 명언",
    author: "여섯번쨰 명언 작가"},
    {quote : "일곱번째 명언",
    author: "일곱번쨰 명언 작가"},
    {quote : "여덟번째 명언",
    author: "여덟번쨰 명언 작가"},
    {quote : "아홉번째 명언",
    author: "아홉번쨰 명언 작가"},
    {quote : "열번째 명언",
    author: "열번쨰 명언 작가"}
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote=quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;