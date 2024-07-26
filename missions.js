const missions = [
    {
        type:1, difficulty:0, icon:"fa-brands fa-discord",
        text:"Last set of missions! Ping @lemonsoda for some free Cheese Cubes!", rewards:300, count:1
    },
    {
        type:1, difficulty:0,  icon:"fa-solid fa-crown",
        text:"Make a Kingdom skill concept for one of your Cookie OCs!", rewards:300, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-gem",
        text:"Make an SSJ cutscene involving an OC made by Parasol, Sugar Skull and LemonSoda☆!", rewards:750, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Submit a Cookie to CrumbSeeker!", rewards:750, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-palette",
        text:"Make a collaborative artwork with 3 other artists!", rewards:1000, count:1
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