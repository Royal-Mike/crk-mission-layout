let index = 0;

const cards = [
    // ----- COMMON -----
    {id:"c1", rarity:"Common", type:"Charm", method:"Auto", name:"Sleepy Squid",
    description:"[+5] Tokens"},
    {id:"c2", rarity:"Common", type:"Charm", method:"Auto", name:"Shake of Discovery",
    description:"[+1] Token for each {Knowledge}<br>//(Max of [30])//"},
    {id:"c3", rarity:"Common", type:"Charm", method:"Auto", name:"Tiny Couture",
    description:"!1 in 15 chance! for [+1] Pass<br>!1 in 20 chance! for [+1] Gem"},
    {id:"c4", rarity:"Common", type:"Charm", method:"Auto", name:"Java Circuit",
    description:"[+1,000] Crumb Bytes<br>//(CrumbSeeker)//"},
    {id:"c5", rarity:"Common", type:"Charm", method:"Auto", name:"Autumn Delights",
    description:"[+0-30] Tokens"},
    {id:"c6", rarity:"Common", type:"Charm", method:"Auto", name:"Gentle Geist",
    description:"[+1] Token for each {card} in circulation<br>//(Max of [30])//"},
    {id:"c7", rarity:"Common", type:"Charm", method:"Auto", name:"Tidal Huntress",
    description:"[+10] Tokens for each other {Charm},<br>then [destroy] all Charms"},
    {id:"c8", rarity:"Common", type:"Charm", method:"Manual", name:"Cozy Canine",
    description:"[+20] Tokens if you have at least<br>[9] Cookies in {CrumbSeeker}"},
    {id:"c9", rarity:"Common", type:"Charm", method:"Manual", name:"Silent Pearl",
    description:"Keep for !N! days,<br>!1 in 7-N chance! for [+1] Gem"},
    {id:"c10", rarity:"Common", type:"Charm", method:"Manual", name:"Lil' Appy",
    description:"[+1] Token for each art drawn<br>for {Friend Pass} this month<br>//(Max of [50])//"},
    {id:"c11", rarity:"Common", type:"Charm", method:"Manual", name:"Comforting Company",
    description:"[+2] Tokens for each {Friend Pass}<br>art drawn for you this month<br>//(Max of [50])//"},
    {id:"c12", rarity:"Common", type:"Sigil", method:"Auto", name:"Rock Sugar",
    description:"!1 in 20 chance! for [+1] Gem<br>after using a {Common Charm}"},
    {id:"c13", rarity:"Common", type:"Sigil", method:"Auto", name:"Lazy Waves",
    description:"[+2] card slots"},
    // ----- RARE -----
    {id:"r1", rarity:"Rare", type:"Charm", method:"Auto", name:"Gooey Gaze",
    description:"Create a [random] {Sigil}<br>//(must have room)//"},
    {id:"r2", rarity:"Rare", type:"Charm", method:"Auto", name:"Fizzy Roar",
    description:"Create a [random] {Charm}<br>//(must have room)//"},
    {id:"r3", rarity:"Rare", type:"Charm", method:"Auto", name:"Heavenly Stare",
    description:"[+1] Medal<br>//(CrumbSeeker)//"},
    {id:"r4", rarity:"Rare", type:"Charm", method:"Auto", name:"Bubbly Performance",
    description:"[+2] Tokens for each<br>{CrumbSeeker Title} you have<br>//(Max of [50])//"},
    {id:"r5", rarity:"Epic", type:"Charm", method:"Auto", name:"Another Day",
    description:"If you also own {Another Night},<br>[+1] HyperCube and [destroy] both Charms"},
    {id:"r6", rarity:"Epic", type:"Charm", method:"Auto", name:"Another Night",
    description:"If you also own {Another Day},<br>[+1] V.S.C. and [destroy] both Charms"},
    {id:"r7", rarity:"Rare", type:"Sigil", method:"Auto", name:"Infernal Majesty",
    description:"&X1.5& CrumbEconomy rewards from {Charms}"},
    {id:"r8", rarity:"Rare", type:"Sigil", method:"Auto", name:"Aurora Bow",
    description:"&X2& CrumbSeeker rewards from {Charms}"},
    {id:"r9", rarity:"Rare", type:"Sigil", method:"Auto", name:"Event Listener",
    description:"All !probabilities! are<br>[twice as likely] to happen"},
    {id:"r10", rarity:"Rare", type:"Sigil", method:"Auto", name:"Endless Ascent",
    description:"[+5] Tokens whenever a !probability! fails"},
    {id:"r11", rarity:"Rare", type:"Sigil", method:"Manual", name:"System Override",
    description:"{Bribe Arts} give &X2& rewards"},
    // ----- EPIC -----
    {id:"e1", rarity:"Epic", type:"Charm", method:"Auto", name:"Family Portrait",
    description:"[+1] Version<br>//(CrumbSeeker)//"},
    {id:"e2", rarity:"Epic", type:"Charm", method:"Auto", name:"Sea of Solitude",
    description:"!1 in 10 chance! for [+1] HyperCube<br>!1 in 20 chance! for [+1] V.S.C."},
    {id:"e3", rarity:"Epic", type:"Charm", method:"Manual", name:"Couch Surfing",
    description:"Gain a [copy] of last bought {Ko-fi Item}"},
    {id:"e4", rarity:"Epic", type:"Charm", method:"Manual", name:"Crimson Corsair",
    description:"Gain a [copy] of last bought {Shop Item}"},
    {id:"e5", rarity:"Epic", type:"Sigil", method:"Auto", name:"Masked Edge",
    description:"[+5] Tokens whenever a {Sigil} triggers"},
    {id:"e6", rarity:"Epic", type:"Sigil", method:"Auto", name:"Lazy Tactician",
    description:"You can draw [anything] for {Bribe Art}<br>//(must still include Royal Velvet)//"},
    // ----- LEGENDARY -----
    {id:"l1", rarity:"Legendary", type:"Charm", method:"Auto", name:"Abyssal Reflection",
    description:"!1 in (50-Knowledge) chance!<br>for a #Gold Shop Pass#"},
    {id:"l2", rarity:"Legendary", type:"Charm", method:"Manual", name:"Celestial Grace",
    description:"Make your {HyperCubes} [Eternal],<br>or {V.S.C.s} [Frozen]"},
    {id:"l3", rarity:"Legendary", type:"Sigil", method:"Manual", name:"Riverside Reverie",
    description:"All {Shop Items} are [halved] in price<br>and [bypass Knowledge]"},
    {id:"l4", rarity:"Legendary", type:"Sigil", method:"Manual", name:"Serene Indifference",
    description:"All {Ko-fi Items} are [halved] in price"},
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
    description = description.replace(/\&(.*?)\&/g, "<span class='text_multiply'>$1</span>");

    $(".content.description > p").html(description);

    $(".tag").eq(0).text(card.rarity);
    $(".tag").eq(0).removeClass("common rare epic legendary").addClass(card.rarity.toLowerCase());

    $(".tag").eq(1).text(card.type);
    $(".tag").eq(1).removeClass("sigil charm").addClass(card.type.toLowerCase());

    $(".tag").eq(2).text(card.method);
    $(".tag").eq(2).removeClass("auto manual").addClass(card.method.toLowerCase());
}

updateCard(index);

$(".box").on("click", function() {
    index++;
    if (index === cards.length) index = 0;
    updateCard(index);
});

// $("#save").on("click", function() {
//     html2canvas(document.querySelector(".box")).then(canvas => {
//         ReImg.fromCanvas(canvas).downloadPng();
//     });
// });