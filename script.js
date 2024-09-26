let newQuote = document.querySelector(".quote-text");
let author = document.querySelector(".author");
let newQuoteBtn = document.querySelector(".new-quote");
let twitterBtn = document.querySelector(".twitter");
let quoteBox = document.querySelector(".quote-box");
let loader = document.querySelector(".loader");
let quotes = [];

function loading() {
    loader.hidden = false;
    quoteBox.hidden = true;
}

function complete() {
    if(!loader.hidden) {
        loader.hidden = true;
        quoteBox.hidden = false;
    }
}

// Get Single Quote 
function getAQuote () {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    if(!quote.author) {
        author.textContent = "Unknown";
    } else {
        author.textContent = quote.author;
    }

    if(quote.length > 100){
        newQuote.classList.add("quote-long");
    } else {
        newQuote.classList.remove("quote-long");
    }
    newQuote.textContent = quote.text;
    
}

// Get quotes 
async function getQuote () {
    loading()
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const apiQuotes = await fetch(apiUrl);
        quotes = await apiQuotes.json();
        getAQuote()
    } catch (error) {
        
    }
    complete()
}

function tweet(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${newQuote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener("click", getQuote)
twitterBtn.addEventListener("click", tweet)

getQuote();
