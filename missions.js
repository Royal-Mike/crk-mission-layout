const missions = [
    {
        type:1, difficulty:0, icon:"fa-brands fa-discord",
        text:"Buy something from the Economy Shop!", rewards:100, count:1
    },
    {
        type:0, difficulty:0,  icon:"fa-brands fa-discord",
        text:"Fill out the form for May's CrumbEvent!", rewards:100, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Obtain 3 Cookies by [Acko, Acko O Bacco] in CrumbSeeker", rewards:300, count:3
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Draw a Common Cookie from the Cookie Run Kingdom OC Wiki!", rewards:300, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-cube",
        text:"Reach a score of 150 in Jump Over Atoms", rewards:500, count:150
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
                <div class="bar flex">0/${item.count}</div>
            </div>
        </div>`
    );
});