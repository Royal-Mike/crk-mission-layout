const missions = [
    {
        type:1, difficulty:0, icon:"fa-solid fa-cake-candles",
        text:"Make 5 cakes in the Holiday Cake Shop!", rewards:300, count:5
    },
    {
        type:1, difficulty:0,  icon:"fa-brands fa-discord",
        text:"Thank a Moderator/Trusted for their hard work!", rewards:300, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Play CrumbSeeker for 15 minutes!", rewards:750, count:15
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Practice coding a Custom Effect! (Submission Optional)", rewards:750, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-palette",
        text:"Draw fan-art for a friend!", rewards:1000, count:1
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