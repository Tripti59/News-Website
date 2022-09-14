//alert("hi");

//Getting diff sections
const general = document.getElementById("general");
const business = document.getElementById("business");
const technology = document.getElementById("technology");
const sports = document.getElementById("sports");
const international = document.getElementById("international");

// URL for different types of news
const general_url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fd804c14adba4e168cef1942bc976692";
const business_url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=fd804c14adba4e168cef1942bc976692";
const tech_url = "https://newsapi.org/v2/top-headlines?category=technology&apiKey=fd804c14adba4e168cef1942bc976692";
const sports_url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=fd804c14adba4e168cef1942bc976692";
const international_url = "https://newsapi.org/v2/everything?sources=bbc-news&apiKey=fd804c14adba4e168cef1942bc976692";

fetchNews(general_url);


//Adding event listener to all the buttons
general.addEventListener("click", function () {
    fetchNews(general_url);
});
business.addEventListener("click", function () {
    fetchNews(business_url);
});
technology.addEventListener("click", function () {
    fetchNews(tech_url);
});
sports.addEventListener("click", function () {
    fetchNews(sports_url);
});
international.addEventListener("click", function () {
    fetchNews(international_url);
});

async function fetchNews(url) {
    article = [];
    const response = await fetch(url);
    const myNews = await response.json();
    article = myNews.articles;
    console.log(article);
    displayNews(article);
}

function displayNews(article) {
    for(i=0;i<article.length;i++){
        let imageSrc = article[i].urlToImage;
        let heading = article[i].title;
        let description = article[i].description;
        let more = article[i].url;
        let newNews= document.createElement("div");
        let innerhtml = `<div class="card" style="width: 18rem;">
       <img src="${imageSrc}" class="card-img-top" alt="Loading">
       <div class="card-body">
         <h5 class="card-title">${heading}</h5>
         <p class="card-text">${description}</p>
       </div>
       <div class="card-body">
         <a href="#${more}" class="card-link">Read More..</a>
       </div>
     </div>`;
    newNews.classList.add("newNews"); 
    newNews.innerHTML=innerhtml;
    document.querySelector(".news").appendChild(newNews);
    };
}

