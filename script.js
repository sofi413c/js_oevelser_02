const overskrift = document.querySelector("h1");

//ØVELSE 2B//
overskrift.textContent;
console.log(overskrift.textContent);
overskrift.textContent = "Billeder"; //Gør at du kan redigerer i tekstcontent gennem js

const underoverskrift = document.querySelector("h2");
console.log(underoverskrift);
const lilleo = document.querySelector("h3");
console.log(lilleo);

const article1 = document.querySelector("article:nth-child(1) p ");
console.log(article1);
article1.innerHTML = "Her er et billede af en mand der spiller <b>Golf<b>";

const article2 = document.querySelector("article: nth-child(2) p");
console.log(article2);
article2.textContent = "Her er et billede af en telefon";

const footer = document.querySelector("footer");
console.log(footer);
