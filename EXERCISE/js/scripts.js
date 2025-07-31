const api_url = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random";

async function getQuote(url) {
try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    const quoteObj = data[0];
    document.getElementById("daily-quote").textContent = `"${quoteObj.q}"`;
    document.getElementById("quote-author").textContent = `- ${quoteObj.a}`;
} catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("daily-quote").textContent = "Could not load quote.";
    document.getElementById("quote-author").textContent = "";
}
}

getQuote(api_url);

const images = [
"images/IMG_0397.JPG",
"images/IMG_0398.JPG",
"images/IMG_0399.JPG",
"images/IMG_0959.JPG",
"images/IMG_3711.JPG",
"images/IMG_4041.JPG",
"images/IMG_4406.JPG",
"images/IMG_E0157.JPG"
];

let index = 0;

function changeImage() {
const slideshow = document.getElementById("slideshow");
if (slideshow) {
    slideshow.src = images[index];
    index = (index + 1) % images.length;
}
}

setInterval(changeImage, 3000);
