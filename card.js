let index = 50;

const cards = [
    // ----- COMMON -----
    {id:"_id", rarity:"Rarity", type:"Type", method:"Method", name:"Card Name", artist:"Artist",
    description:"Card Effect"},
    {id:"_locked", rarity:"Locked", type:"Locked", method:"Locked", name:"", artist:"",
    description:""},
    {id:"C1", rarity:"Common", type:"Charm", method:"Auto", name:"Sleepy Squid", artist:"akkuma407",
    description:"[+10] Tokens"},
    {id:"C2", rarity:"Common", type:"Charm", method:"Auto", name:"Shake of Discovery", artist:"tamari108",
    description:"[+1] Token for each of your {Knowledge}<br>//(Max of [30])//"},
    {id:"C3", rarity:"Common", type:"Charm", method:"Auto", name:"Tiny Couture", artist:"tamari108",
    description:"!1 in 15 chance! for [+1] Pass<br>!1 in 20 chance! for [+1] Gem"},
    {id:"C4", rarity:"Common", type:"Charm", method:"Auto", name:"Java Circuit", artist:"_parasol",
    description:"[+10,000] Crumb Bytes<br>//(turn off CrumbSeeker before using)//"},
    {id:"C5", rarity:"Common", type:"Charm", method:"Auto", name:"Autumn Delights", artist:"akkuma407",
    description:"[+0-30] Tokens"},
    {id:"C6", rarity:"Common", type:"Charm", method:"Auto", name:"Gentle Geist", artist:"skooptroop",
    description:"[+1] Token for every [10] {Friend Cards}<br>in circulation<br>//(Max of [30])//"},
    {id:"C7", rarity:"Common", type:"Charm", method:"Auto", name:"Tidal Huntress", artist:"akkuma407",
    description:"[+10] Tokens for each of your other {Charms}<br>~Destroy~ all Charms"},
    {id:"C8", rarity:"Common", type:"Charm", method:"Auto", name:"Cozy Canine", artist:"akkuma407",
    description:"[+20] Tokens if you have less than<br>[90] Tokens"},
    {id:"C9", rarity:"Common", type:"Charm", method:"Auto", name:"Silent Pearl", artist:"akkuma407",
    description:"[+1] Gem if you have [0] Gems and [0] Passes"},
    {id:"C10", rarity:"Common", type:"Charm", method:"Auto", name:"Lil' Appy", artist:"skooptroop",
    description:"[+1] Token for each of your {Friend Hearts}<br>//(Max of [30])//"},
    {id:"C11", rarity:"Common", type:"Charm", method:"Auto", name:"Comforting Company", artist:"artsy_the_ghost",
    description:"[+1] Token for every [20] {Friend Hearts}<br>in circulation<br>//(Max of [30])//"},
    {id:"C12", rarity:"Common", type:"Sigil", method:"Auto", name:"Rock Sugar", artist:"artsy_the_ghost",
    description:"!1 in 20 chance! for [+1] Gem<br>after using a {Common Charm}"},
    {id:"C13", rarity:"Common", type:"Sigil", method:"Auto", name:"Lazy Waves", artist:"skooptroop",
    description:"[+4] card slots<br>~Self-destructs~ after using a {Charm}"},
    {id:"C14", rarity:"Common", type:"Charm", method:"Auto", name:"Sketchwalker", artist:"blueaquacat",
    description:"!1 in 50 chance! for [+1] HyperCube"},
    {id:"C15", rarity:"Common", type:"Sigil", method:"Auto", name:"The Fear Within", artist:"dakotaspine",
    description:"&X3& next used {Charm}'s !probabilities!<br>~Self-destructs~"},
    {id:"C16", rarity:"Common", type:"Sigil", method:"Auto", name:"Snapshot", artist:"sugar_skull_",
    description:"&X2& next used {Charm}'s basic rewards<br>~Self-destructs~"},
    {id:"C17", rarity:"Common", type:"Sigil", method:"Auto", name:"Liquidation", artist:"blueaquacat",
    description:"{Special Offers} for Friend Cards<br>are [50%] off, rounded down<br>//(include card in reason)//"},
    {id:"C18", rarity:"Common", type:"Charm", method:"Auto", name:"Echo of Legends", artist:"shiningsea613",
    description:"[+30] Tokens<br>[-5] Tokens for each of your {Sigils}<br>//(Max of [-25])//"},
    {id:"C19", rarity:"Common", type:"Charm", method:"Auto", name:"Last Dawn", artist:"messyslimey",
    description:"[+5] Tokens for each {empty} card slot<br>//(Max of [50])//"},
    {id:"C20", rarity:"Common", type:"Charm", method:"Auto", name:"Ovenborn Wanderer", artist:"pavnobal",
    description:"Receive the [total] {sell value} of your cards<br>//(Max of [50])//"},
    // ----- RARE -----
    {id:"R1", rarity:"Rare", type:"Charm", method:"Auto", name:"Gooey Gaze", artist:"_parasol",
    description:"Create a [random] {Sigil} of any Rarity<br>//(must have room)//"},
    {id:"R2", rarity:"Rare", type:"Charm", method:"Auto", name:"Fizzy Roar", artist:"artsy_the_ghost",
    description:"Create a [random] {Charm} of any Rarity<br>//(must have room)//"},
    {id:"R3", rarity:"Rare", type:"Charm", method:"Auto", name:"Heavenly Stare", artist:"melon8668",
    description:"[+1] Medal<br>//(turn off CrumbSeeker before using)//"},
    {id:"R4", rarity:"Rare", type:"Charm", method:"Auto", name:"Bubbly Performance", artist:"skooptroop",
    description:"[+2] Tokens for each of your {Titles}<br>//(Max of [50])//"},
    {id:"R5", rarity:"Rare", type:"Charm", method:"Auto", name:"Another Day", artist:"_parasol",
    description:"If you also own {Another Night},<br>[+50] Tokens and ~destroy~ both Charms"},
    {id:"R6", rarity:"Rare", type:"Charm", method:"Auto", name:"Another Night", artist:"_parasol",
    description:"If you also own {Another Day},<br>[+1] Pass and ~destroy~ both Charms"},
    {id:"R7", rarity:"Rare", type:"Sigil", method:"Auto", name:"Infernal Majesty", artist:"artsy_the_ghost",
    description:"&X1.25& basic {CrumbEconomy} rewards<br>from {Charms}"},
    {id:"R8", rarity:"Rare", type:"Sigil", method:"Auto", name:"Aurora Bow", artist:"_parasol",
    description:"&X2& basic {CrumbSeeker} rewards<br>from {Charms}"},
    {id:"R9", rarity:"Rare", type:"Sigil", method:"Auto", name:"Event Listener", artist:"artsy_the_ghost",
    description:"&X2& all !listed probabilities!"},
    {id:"R10", rarity:"Rare", type:"Sigil", method:"Auto", name:"Endless Ascent", artist:"skooptroop",
    description:"[+5] Tokens whenever a !probability! fails"},
    {id:"R11", rarity:"Rare", type:"Sigil", method:"Auto", name:"System Override", artist:"_parasol",
    description:"You can claim &X2& rewards for {Bribe Arts}<br>//~Deactivates~ after [3] claims//"},
    {id:"R12", rarity:"Rare", type:"Charm", method:"Auto", name:"Silent Watcher", artist:"skooptroop",
    description:"[+1] {Special Badge}<br>[-50] Tokens"},
    {id:"R13", rarity:"Rare", type:"Charm", method:"Manual", name:"Call for Help", artist:"dakotaspine",
    description:"Receive &X0.5& of [1st Place Rewards] for<br>your last participated {Casual Event}"},
    {id:"R14", rarity:"Rare", type:"Sigil", method:"Auto", name:"Little Big Planet", artist:"tamari108",
    description:"Transform next [given] card into<br>a random {Epic} Friend Card<br>~Self-destructs~"},
    {id:"R15", rarity:"Rare", type:"Charm", method:"Manual", name:"Ashen Oath", artist:"melon8668",
    description:"Randomize your [Token Rewards]<br>for the current {Monthly Event}<br>between &X0.5& and &X2&"},
    // ----- EPIC -----
    {id:"E1", rarity:"Epic", type:"Charm", method:"Auto", name:"Family Portrait", artist:"artsy_the_ghost",
    description:"[+1] Version<br>//(turn off CrumbSeeker before using)//"},
    {id:"E2", rarity:"Epic", type:"Charm", method:"Auto", name:"Sea of Solitude", artist:"skooptroop",
    description:"!1 in 10 chance! for [+1] HyperCube<br>!1 in 20 chance! for [+1] V.S.C."},
    {id:"E3", rarity:"Epic", type:"Charm", method:"Manual", name:"Couch Surfing", artist:"skooptroop",
    description:"Gain a [copy] of last bought {Ko-fi Item}"},
    {id:"E4", rarity:"Epic", type:"Charm", method:"Manual", name:"Crimson Corsair", artist:"_parasol",
    description:"Gain a [copy] of last bought {Shop Item}"},
    {id:"E5", rarity:"Epic", type:"Sigil", method:"Auto", name:"Masked Edge", artist:"skooptroop",
    description:"[+5] Tokens whenever a {Sigil} triggers"},
    {id:"E6", rarity:"Epic", type:"Sigil", method:"Auto", name:"Lazy Tactician", artist:"skooptroop",
    description:"You can claim [Bribe Rewards]<br>when drawing {Royal Velvet fan-arts}<br>//~Deactivates~ after [5] claims//"},
    {id:"E7", rarity:"Epic", type:"Charm", method:"Auto", name:"Vengeful Serpent", artist:"anon_serenade",
    description:"Create three [random] {cards} of any Rarity<br>//(must have room)//"},
    {id:"E8", rarity:"Epic", type:"Charm", method:"Auto", name:"Fire Write", artist:"skooptroop",
    description:"Cover up to [2] Gems worth of<br>{extra charges} for a {V.S.C.}"},
    {id:"E9", rarity:"Epic", type:"Charm", method:"Auto", name:"Tranquil Melody", artist:".r717",
    description:"Create a [random] {Legendary} card<br>~Destroy~ all other cards"},
    {id:"E10", rarity:"Epic", type:"Charm", method:"Auto", name:"Fallen Star", artist:"renataonline",
    description:"[Duplicate] one of your [random] cards<br>//(must have room)//"},
    // ----- LEGENDARY -----
    {id:"L1", rarity:"Legendary", type:"Charm", method:"Auto", name:"Abyssal Reflection", artist:"_parasol",
    description:"!1 in 4 chance! for a #Gold Shop Pass#<br>//Guaranteed if you have [50+] Knowledge//"},
    {id:"L2", rarity:"Legendary", type:"Charm", method:"Auto", name:"The Demon's Trinket", artist:"skooptroop",
    description:"[+3] HyperCubes<br>Set {Tokens, Gems, Passes} to [0]"},
    {id:"L3", rarity:"Legendary", type:"Charm", method:"Auto", name:"Celestial Grace", artist:"artsy_the_ghost",
    description:"Cover all {extra charges} for a {V.S.C.}<br>after drawing one {Bribe Art}"},
    {id:"L4", rarity:"Legendary", type:"Charm", method:"Auto", name:"Sunlit Waitress", artist:"skooptroop",
    description:"Receive four [random] {Badges}<br>//Burning (65%), Searing (25%),<br>Special (9%), Honorary (1%)//"},
    {id:"L5", rarity:"Legendary", type:"Sigil", method:"Manual", name:"Riverside Reverie", artist:"_parasol",
    description:"All {Shop Items} are [50%] off<br>and [bypass] {Knowledge} requirements<br>//~Deactivates~ after [3] items bought//"},
    {id:"L6", rarity:"Legendary", type:"Sigil", method:"Manual", name:"Serene Indifference", artist:"artsy_the_ghost",
    description:"All {Ko-fi Items} are [50%] off<br>//~Deactivates~ after [3] items bought//"},
    {id:"L7", rarity:"Legendary", type:"Charm", method:"Manual", name:"Dragon's Soliloquy", artist:"akkuma407",
    description:"~Reactivate~ up to 3 [Deactivated] {Sigils}"},
    {id:"L8", rarity:"Legendary", type:"Charm", method:"Manual", name:"Forgotten Code", artist:".r717",
    description:"Create a {discovered} card of [your choice]"},
    // ----- SPECIAL -----
    {id:"S1", rarity:"Special", type:"Charm", method:"Auto", name:"Hiring Help", artist:"lemonsoda<br>This card is only usable during Feb 5th - Feb 25th 2025",
    description:"Summon [LemonSoda] to chat in your<br>team's respective {Tri-Choice Chat}<br>until a different team calls him over<br>&nbsp;"},
    {id:"S2", rarity:"Special", type:"Charm", method:"Auto", name:"Am I Quirky Doe?", artist:"lemonsoda<br>This card is only usable during March 2025",
    description:"Automatically [complete] all 3 Missions<br>during a round of {Cookie Detective}"},
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
    description = description.replace(/\~(.*?)\~/g, "<span class='text_red'>$1</span>");
    description = description.replace(/\/\/(.*?)\/\//g, "<span class='text_gray'>$1</span>");
    description = description.replace(/\&(.*?)\&/g, "<span class='text_multiply'>$1</span>");

    $(".content.description > p:first-child").html(description);
    $(".content.description > p:last-child").html("Artwork by @" + card.artist);

    $(".tag").eq(0).text(card.rarity);
    $(".tag").eq(0).removeClass("common rare epic legendary special locked").addClass(card.rarity.toLowerCase());

    $(".tag").eq(1).text(card.type);
    $(".tag").eq(1).removeClass("sigil charm locked").addClass(card.type.toLowerCase());

    $(".tag").eq(2).text(card.method);
    $(".tag").eq(2).removeClass("auto manual locked").addClass(card.method.toLowerCase());
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