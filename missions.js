const missions = [
    {
        type:0, difficulty:0, icon:"fa-solid fa-heart",
        text:"Free points! Thanks for playing!", rewards:100, count:0
    },
    {
        type:0, difficulty:0,  icon:"fa-brands fa-discord",
        text:"Fill out the form for May's CrumbEvent!<br>(Please we need more submissions)", rewards:100, count:1
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Obtain 10 Cookies by ANYONE in CrumbSeeker,<br>must be in the same pull", rewards:300, count:10
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Draw ANY Cookie!", rewards:300, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-brands fa-discord",
        text:"DM your finalized Blueprint to LemonSoda!<br>(This will be used to evaluate your score for the event)", rewards:1000, count:1
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
                <div class="bar ${index === 0 ? "bar_completed" : ""} flex">0/${item.count}</div>
            </div>
        </div>`
    );
});