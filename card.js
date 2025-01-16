const cards = [
    // ----- COMMON -----
    {id:"c1", rarity:"Common", type:"Charm", method:"Auto", name:"Sleepy Squid",
    description:"[+5] Tokens"},
    {id:"c2", rarity:"Common", type:"Charm", method:"Auto", name:"Shake of Discovery",
    description:"[+1] Token for each {Knowledge}<br>//(Max of [30])//"},
    {id:"c3", rarity:"Common", type:"Charm", method:"Auto", name:"Tiny Couture",
    description:"!1 in 4 chance! for [+1] Pass"},
    {id:"c4", rarity:"Common", type:"Charm", method:"Auto", name:"Gooey Gaze",
    description:"Create a [random] {Sigil}<br>//(must have room)//"},
    {id:"c5", rarity:"Common", type:"Charm", method:"Auto", name:"Autumn Delights",
    description:"!1 in 10 chance! for [-5] Tokens,<br>otherwise [+20] Tokens"},
    {id:"c6", rarity:"Common", type:"Charm", method:"Auto", name:"Tropical Delight",
    description:"[+1] Token for each {card} in circulation<br>//(Max of [30])//"},
    {id:"c7", rarity:"Common", type:"Charm", method:"Auto", name:"Tidal Huntress",
    description:"[+10] Tokens for each other {Charm},<br>then [destroy] all Charms"},
    {id:"c8", rarity:"Common", type:"Charm", method:"Manual", name:"Cozy Canine",
    description:"[+20] Tokens if you have at least<br>[9] Cookies in {CrumbSeeker}"},
    {id:"c9", rarity:"Common", type:"Charm", method:"Manual", name:"Silent Pearl",
    description:"Use after {7 days} for [+1] Gem"},
    {id:"c10", rarity:"Common", type:"Sigil", method:"Auto", name:"Rock Sugar",
    description:"!1 in 20 chance! for [+1] Gem<br>after using a {Common Charm}"},
    // ----- RARE -----
    {id:"r1", rarity:"Rare", type:"Charm", method:"Manual", name:"Lil' Appy",
    description:"[+5] Tokens for each art drawn<br>for {Friend Pass} this month<br>//(Max of [50])//"},
    {id:"r2", rarity:"Rare", type:"Charm", method:"Manual", name:"Comforting Company",
    description:"[+10] Tokens for each {Friend Pass}<br>art drawn for you this month<br>//(Max of [50])//"},
    {id:"r3", rarity:"Rare", type:"Charm", method:"Auto", name:"Fizzy Roar",
    description:"Create two [random] {Common Charms}<br>//(must have room)//"},
    {id:"r4", rarity:"Rare", type:"Charm", method:"Auto", name:"Heavenly Stare",
    description:"[+1] Medal"},
    {id:"r5", rarity:"Rare", type:"Sigil", method:"Auto", name:"Infernal Majesty",
    description:"[+5] more Tokens from using {Charms}"},
    {id:"r6", rarity:"Rare", type:"Sigil", method:"Auto", name:"Lazy Waves",
    description:"[+2] card slots"},
    {id:"r7", rarity:"Rare", type:"Sigil", method:"Auto", name:"Event Listener",
    description:"All !probabilities! are<br>[twice as likely] to happen"},
    {id:"r8", rarity:"Rare", type:"Sigil", method:"Manual", name:"System Override",
    description:"{Bribe Arts} give [double] the rewards"},
    // ----- EPIC -----
    {id:"e1", rarity:"Epic", type:"Sigil", method:"Manual", name:"Family Portrait",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e2", rarity:"Epic", type:"Sigil", method:"Manual", name:"Bubbly Performance",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e3", rarity:"Epic", type:"Sigil", method:"Manual", name:"Masked Edge",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e4", rarity:"Epic", type:"Sigil", method:"Manual", name:"Endless Ascent",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e5", rarity:"Epic", type:"Sigil", method:"Manual", name:"Sea of Solitude",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e6", rarity:"Epic", type:"Sigil", method:"Manual", name:"Couch Surfing",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e7", rarity:"Epic", type:"Sigil", method:"Manual", name:"Lazy Tactician",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e8", rarity:"Epic", type:"Sigil", method:"Manual", name:"Crimson Corsair",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e9", rarity:"Epic", type:"Sigil", method:"Manual", name:"Another Day",
    description:"All {Shop Items} are [halved] in price"},
    {id:"e10", rarity:"Epic", type:"Sigil", method:"Manual", name:"Another Night",
    description:"All {Shop Items} are [halved] in price"},
    // ----- LEGENDARY -----
    {id:"l1", rarity:"Legendary", type:"Charm", method:"Manual", name:"Abyssal Reflection",
    description:"!(Your Knowledge)%! chance<br>to receive a #Gold Shop Pass#"},
    {id:"l2", rarity:"Legendary", type:"Charm", method:"Manual", name:"Celestial Grace",
    description:"Make your {HyperCubes} [Eternal],<br>or {V.S.C.s} [Frozen]"},
    {id:"l3", rarity:"Legendary", type:"Sigil", method:"Manual", name:"Riverside Reverie",
    description:"All {Shop Items} are [halved] in price"},
    {id:"l4", rarity:"Legendary", type:"Sigil", method:"Manual", name:"Serene Indifference",
    description:"[Bypass Knowledge]<br>when buying {Shop Items}"},
    {id:"l5", rarity:"Legendary", type:"Sigil", method:"Manual", name:"The Demon's Trinket",
    description:"After buying any {Shop Item},<br>you can choose to [lose all Tokens]<br>and receive a {HyperCube}"},
]

function updateCard(index) {
    const card = cards[index];

    $(".background").css("background-image", `url(friend_cards/${card.id}.png)`);
    $(".content.name > .id").text(card.id.toUpperCase());
    $(".content.name > .title").text(card.name);

    let description = card.description;
    description = description.replace(/\{(.*?)\}/g, "<span class='text_blue'>$1</span>");
    description = description.replace(/\[(.*?)\]/g, "<span class='text_orange'>$1</span>");
    description = description.replace(/\!(.*?)\!/g, "<span class='text_green'>$1</span>");
    description = description.replace(/\#(.*?)\#/g, "<span class='text_yellow'>$1</span>");
    description = description.replace(/\/\/(.*?)\/\//g, "<span class='text_gray'>$1</span>");

    $(".content.description > p").html(description);

    $(".tag").eq(0).text(card.rarity);
    $(".tag").eq(0).removeClass("common rare epic legendary").addClass(card.rarity.toLowerCase());

    $(".tag").eq(1).text(card.type);
    $(".tag").eq(1).removeClass("sigil charm").addClass(card.type.toLowerCase());

    $(".tag").eq(2).text(card.method);
    $(".tag").eq(2).removeClass("auto manual").addClass(card.method.toLowerCase());
}

updateCard(18);

let index = 18;
$("body").on("click", function() {
    index++;
    if (index === cards.length) index = 0;
    updateCard(index);
});