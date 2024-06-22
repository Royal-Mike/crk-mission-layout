const missions = [
    {
        type:0, difficulty:0, icon:"fa-solid fa-dice",
        text:"Use your free daily roll!", rewards:100, count:1
    },
    {
        type:1, difficulty:0,  icon:"fa-solid fa-palette",
        text:"Doodle Royal Velvet Cookie!", rewards:100, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cake-candles",
        text:"Make ten 5-heart Cake Orders from [OCs] in RoyalMike's Holiday Cake Shop!", rewards:300, count:10
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Draw a Cookie whose color palette is exclusively black OR yellow!!!!", rewards:300, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-bomb",
        text:"Attempt to disarm a Bomb Gem!", rewards:600, count:1
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