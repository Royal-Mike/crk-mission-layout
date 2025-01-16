const cards = [
    {name:"Placeholder", description:"+5 Tokens", rarity:"Common", type:"Gadget"},
    {name:"Great Drink", description:"+5 Tokens", rarity:"Rare", type:"Gadget"},
    {name:"Serene River", description:"+5 Tokens", rarity:"Epic", type:"Gadget"},
    {name:"Lovely Scene", description:"+5 Tokens", rarity:"Legendary", type:"Gadget"},
    {name:"Immaculate", description:"+5 Tokens", rarity:"Common", type:"Item"},
]

function updateCard(index) {
    const card = cards[index];

    $(".content.name").text(card.name);
    $(".content.description").text(card.description);
    
    $(".tag").eq(0).text(card.rarity);
    $(".tag").eq(0).removeClass("common rare epic legendary").addClass(card.rarity.toLowerCase());
    
    $(".tag").eq(1).text(card.type);
    $(".tag").eq(1).removeClass("gadget item").addClass(card.type.toLowerCase());
}

updateCard(0);

let index = 0;
$("body").on("click", function() {
    index++;
    if (index === cards.length) index = 0;
    updateCard(index);
});