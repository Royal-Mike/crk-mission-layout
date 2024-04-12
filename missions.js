const missions = [
    {
        type:1, difficulty:0, icon:"fa-solid fa-cube",
        text:"Level Up [Cream Pie Cookie] or [White Frosting Cookie] to Lv. 10", rewards:100, count:10
    },
    {
        type:1, difficulty:0,  icon:"fa-solid fa-cube",
        text:"Win over 10,000 CrumbBytes from CrumbSeeker Survival", rewards:100, count:10000
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Obtain 3 Cookies by [anon_serenade] in CrumbSeeker", rewards:300, count:3
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Draw Blue Heaven Cookie!", rewards:300, count:1
    },
    {
        type:2, difficulty:2,  icon:"fa-solid fa-cube",
        text:"Get [Sugar Skull Cookie] to 1,500 Total Affection TOGETHER!", rewards:500, count:1500
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
                <img src="images/spring.png">
                <p class="text_border">${item.rewards}</p>
            </div>
            <div class="button_cont flex flexcol">
                <div class="shine"></div>
                <div class="button flex">
                    <p class="text_border">>></p>
                </div>
                <div class="bar flex">${index === 4 ? "100" : "0"}/${item.count}</div>
            </div>
        </div>`
    );
});