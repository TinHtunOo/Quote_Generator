let apiQuotes = []

// Get a random quote
function getRamQuote() {
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log (quote)
}

// Get Quote From API
async function getQuote() {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        getRamQuote()
    } catch (error) {
        
    }

}

getQuote()