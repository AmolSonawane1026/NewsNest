const apiKey = "87fea534a00548d59d28e9cb4e06eedc";
// "https://newsapi.org/v2/everything?q=${inputText}";
let cardData = document.querySelector(".cardData");
let search_input = document.querySelector("#inputData");
let search_btn = document.querySelector(".search-btn");
let newsSection = document.querySelector("news-section");

const myFunction = async (input) => {
  let response = await fetch(
    `https://newsapi.org/v2/everything?q=${input}&apikey=${apiKey}`
  );
  let data = await response.json();
  // console.log(data);
  // -----------------------------------------

  // ------------------

  
    cardData.innerHTML = "";
    data.articles.forEach((article) => {
      console.log(article);
  
      if (!article.urlToImage == 404) return;
  
      // ============
      let newDiv = document.createElement("div");
      newDiv.classList.add("card");
      cardData.appendChild(newDiv);
  
      newDiv.innerHTML = `<img src="${article.urlToImage}" alt="Not Found 404"  loading="lazy">
          <div class="card-lower">
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          </div>`;
  
      // ========================
  
      cardData.addEventListener("click", () => {
        window.open(article.url);
      });
    });
  
  
};

window.addEventListener("load", () => {
  myFunction("India");
});
search_btn.addEventListener("click", () => {
  let inputText = search_input.value;
  myFunction(inputText);
});


function navlinks(navNames){
  myFunction(navNames)
}