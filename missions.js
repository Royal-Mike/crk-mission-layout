const missions = [
    {
        type:1, difficulty:0, icon:"fa-solid fa-cookie",
        text:"Reach a score of 650 million or higher in any game mode in CookieRun: Ovenbreak!", rewards:300, count:650
    },
    {
        type:1, difficulty:0, icon:"fa-solid fa-headphones",
        text:"Reach a score of 20 or higher in any CookieWare Stage!", rewards:300, count:20
    },
    {
        type:1, difficulty:1, icon:"fa-solid fa-cube",
        text:"Collect every new Cookie from the 2.2.1 Patch Notes in CrumbSeeker!", rewards:750, count:21
    },
    {
        type:1, difficulty:1, icon:"fa-solid fa-cube",
        text:"Add a Super Epic Costume to one of your Cookies", rewards:750, count:1
    },
    {
        type:1, difficulty:2, icon:"fa-solid fa-cookie",
        text:"Name every OvenBreak Cookie in Cookie Challenge in under 4 minutes!", rewards:1000, count:206
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