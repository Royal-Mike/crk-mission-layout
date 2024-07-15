const missions = [
    {
        type:1, difficulty:0, icon:"fa-solid fa-gem",
        text:"Make a Cookie with 3 separate expressions in the Sixth Soul Jam!", rewards:300, count:3
    },
    {
        type:1, difficulty:0,  icon:"fa-brands fa-discord",
        text:"Buy a Lucky Bear!", rewards:300, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cake-candles",
        text:"Earn 10 5-heart reviews in a row in the Holiday Cake Shop", rewards:750, count:10
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Add 3 relationships to your CrumbSeeker Cookies", rewards:750, count:3
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-cube",
        text:"Sketch a Cookie OC based on the following word: \"Skull\"", rewards:1000, count:1
    }
];

missions.forEach((item, index) => {
    const color = item.difficulty === 0 ? "easy" : (item.difficulty === 1 ? "normal" : "hard");
    const type = item.type === 0 ? "auto" : (item.type === 1 ? "manual" : "team");

    $("body").append(
        `<div class="box box-${color} flex">
            <div class="icon flex">
                <i class="${item.icon} text_border"></i>
            </div>
            <div class="mission">
                <div class="flex">
                    <img src="images/${type}.png">
                    &nbsp;${type}
                </div>
                <p class="text">${item.text}</p>
            </div>
            <div class="rewards flex flexcol">
                <img src="images/currency.png">
                <p class="text_border">${item.rewards}</p>
            </div>
            <div class="button_cont flex flexcol">
                <div class="shine"></div>
                <div class="button flex">
                    <p class="text_border">>></p>
                </div>
                <div class="bar flex">0/${item.count}</div>
            </div>
        </div>`
    );
});