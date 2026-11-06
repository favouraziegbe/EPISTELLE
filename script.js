
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");
const errorElement = document.getElementById("error");

async function getQuote() {

    try {
      quoteBtn.textContent = "Fetching your next thought...";
quoteBtn.disabled = true;
        errorElement.textContent = "";

        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteElement.textContent = data.quote;
        authorElement.textContent = `— ${data.author}`;

    } catch (error) {
        errorElement.textContent =
            "Oops! Couldn't load a quote. Please try again.";

    
      } finally {
        quoteBtn.textContent = "Get a Quote";
        quoteBtn.disabled = false;
}

}

quoteBtn.addEventListener("click", getQuote);
