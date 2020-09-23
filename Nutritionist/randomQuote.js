const quotes = ['Jedzenie to duszenie smutków poduszką tłuszczu. ', 'Przecież sam nas pan uczył, że życie bez cierpienia jest jak jedzenie bez soli ', 'Gdyby liczniejsi z nas cenili wyżej jedzenie, radość i pieśni niż złoto i klejnoty, świat byłby weselszy. ', 'Czekoladka, której człowiek nie miał ochoty zjeść, nie liczy się jako czekoladka. To odkrycie pochodzi z tej samej dziedziny fizyki kulinarnej co ta, która wykazała, że jedzenie skonsumowane nie przy stole nie zawiera żadnych kalorii. '];
const quote = document.querySelector('.header__banner--quote');

const quoteGenerator = () => {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = `${quotes[index]}`;
}

window.addEventListener('DOMContentLoaded', quoteGenerator);