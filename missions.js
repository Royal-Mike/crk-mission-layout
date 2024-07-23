const missions = [
    {
        type:1, difficulty:0, icon:"fa-solid fa-cookie",
        text:"Reach a score of 10M or higher in CRK's Error Busters", rewards:300, count:10
    },
    {
        type:1, difficulty:0,  icon:"fa-solid fa-lightbulb",
        text:"Make an OvenBreak skill concept for one of your Cookie OCs!", rewards:300, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-gem",
        text:"Make an SSJ cutscene involving Fire Spirit Cookie, Strawberry Stick Cookie and Cream Ferret Cookie!", rewards:750, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Make a collab artwork with another CRT artist!", rewards:750, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-cookie",
        text:"Name every Kingdom Cookie in Cookie Challenge in under 6 minutes!", rewards:1000, count:129
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