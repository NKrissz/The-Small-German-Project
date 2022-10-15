const cards = [
     {
        link : "lebkuchen.html",
        name: "Lebkuchen",
        image: "img/weiche-lebkuchen.jpg"
    },
     {
        link : "vanillekipferl.html",
        name: "Vanillekipferl",
        image: "img/vanillekipferl-meiner-oma.jpg"
    },
     {
        link : "zimtsterntorte.html",
        name: "Zimtsterntorte",
        image: "img/zimtsterntorte.jpg"
    }
]
console.log(cards);

function MakeCard(i)
{
    let card = cards[i];
    let d = document.getElementById("cards");
    let newcard = document.createElement("div");
    newcard.innerHTML = 
    `<div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="${card.name}">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <a href="${card.link}" class="btn btn-primary">Rezept</a>
        </div>
    </div>`;
    d.appendChild(newcard);
    console.log("makecard function called");
}

function RandomCard()
{
    let i = Math.floor(Math.random() * cards.length);
    MakeCard(i);
}

function AllCards()
{
    for (let card in cards)
    {
        MakeCard(card);
    }
}

function SomeCards(c)
{
    let i = 0;
    while (i < c)
    {
        RandomCard();
        i++;
    }
}