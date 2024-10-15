// Array of quotes
const quotes = [
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats"
  },
  {
    quote: "Whether you think you can or think you can’t, you’re right.",
    author: "Henry Ford"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display a random quote
function displayQuote() {
  const randomQuote = getRandomQuote();
  document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
  document.getElementById('author').textContent = `- ${randomQuote.author}`;
}

// Add event listener to the button
document.getElementById('new-quote').addEventListener('click', displayQuote);
