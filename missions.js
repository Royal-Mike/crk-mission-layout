const missions = [
    {
        type:0, difficulty:0, icon:"fa-brands fa-discord",
        text:"Vote in Cookie Debate Club", rewards:100, count:1
    },
    {
        type:1, difficulty:0,  icon:"fa-brands fa-youtube",
        text:"Comment on RoyalMike's latest YouTube Short", rewards:100, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Obtain 3 Cookies by [AnonnyPas] in CrumbSeeker", rewards:300, count:3
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Draw concept art for an Epic Costume for an OC that DOESN'T belong to you", rewards:300, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-cube",
        text:"Get to Wave 10 in CrumbSeeker Survival by using ONLY the first 2 Moves a Cookie has", rewards:700, count:10
    }
];

missions.forEach((item, index) => {
    const color = item.difficulty === 0 ? "easy" : (item.difficulty === 1 ? "normal" : "hard");
    const type = item.type === 0 ? "auto" : "manual";

    $("body").append(
        `<div class="box box-${color} flex">
            <div class="icon flex">
                <i class="${item.icon} text_border"></i>
            </div>
            <div class="mission">
                <div class="flex">
                    <img src="images/${type}.png">
                    &nbsp;${type} ${index === 4 ? "(Requires Video Evidence)" : ""}
                </div>
                <p class="text">${item.text}</p>
            </div>
            <div class="rewards flex flexcol">
                <img src="images/spring.png">
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