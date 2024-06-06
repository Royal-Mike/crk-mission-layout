const missions = [
    {
        type:0, difficulty:0, icon:"fa-solid fa-dice",
        text:"Use your free daily roll!", rewards:100, count:1
    },
    {
        type:1, difficulty:0,  icon:"fa-solid fa-cube",
        text:"Obtain 5 Costumes!", rewards:100, count:5
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Obtain 3 Cookies by Sugar Skull", rewards:300, count:3
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Draw a CrumbSeeker Cookie whose ID is 1000 or more!", rewards:300, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-cube",
        text:"Obtain 5 Cookies with 5 different colors in their name", rewards:600, count:5
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