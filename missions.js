const missions = [
    {
        type:0, difficulty:0, icon:"fa-brands fa-discord",
        text:"Vote in Cookie Debate Club", rewards:100, count:1
    },
    {
        type:1, difficulty:0,  icon:"fa-solid fa-cube",
        text:"Get to Wave 5 of Survival in CrumbSeeker Dungeon with [Orange Soda Cookie]", rewards:100, count:5
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Obtain 3 Cookies by [pearleslyrin] in CrumbSeeker", rewards:300, count:3
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Draw one of your OCs at the Spring Pop Festival!", rewards:300, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-cube",
        text:"Encounter [Gummy Worm Cookie] in CrumbSeeker Champion's League", rewards:500, count:1
    }
];

missions.forEach(item => {
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
                    &nbsp;${type}
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
                    <p class="text_border">${type[0].toUpperCase()}</p>
                </div>
                <div class="bar flex">0/${item.count}</div>
            </div>
        </div>`
    );
});