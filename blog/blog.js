const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  }
];

function renderArticle(article, position) {
  let articleHTML;

  if (position === "left") {
    articleHTML = `
      <p class="articleDate">${article.date}</p>
      <p class="bookInfo">${article.ages}</p>
      <p class="bookInfo">${article.genre}</p>
      <p>${article.stars}</p>
    `;
    document.getElementById("leftAside").innerHTML += articleHTML;
  } else if (position === "middle") {
    articleHTML = `
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}">
      <p class="description">${article.description}</p>
    `;
    document.getElementById("middleAside").innerHTML += articleHTML;
  }
}

articles.forEach((article) => {
  renderArticle(article, "left");
  renderArticle(article, "middle");
});

const container = document.getElementById("articlesContainer");

articles.forEach((article) => {
  const articleRow = document.createElement("div");
  articleRow.classList.add("articleRow"); 

  const leftHTML = `
    <p class="articleDate">${article.date}</p>
    <p class="bookInfo">${article.ages}</p>
    <p class="bookInfo">${article.genre}</p>
    <p>${article.stars}</p>
  `;

  const middleHTML = `
    <h2>${article.title}</h2>
    <img src="${article.imgSrc}" alt="${article.imgAlt}">
    <p class="description">${article.description}</p>
  `;

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftAside");
  leftDiv.innerHTML = leftHTML;

  const middleDiv = document.createElement("div");
  middleDiv.classList.add("middleAside");
  middleDiv.innerHTML = middleHTML;

  articleRow.appendChild(leftDiv);
  articleRow.appendChild(middleDiv);

  container.appendChild(articleRow);
});