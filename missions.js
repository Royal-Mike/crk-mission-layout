const missions = [
    {
        type:1, difficulty:0, icon:"fa-brands fa-discord",
        text:"Showcase a W.I.P. of your blueprint!", rewards:100, count:1
    },
    {
        type:1, difficulty:0,  icon:"fa-solid fa-cube",
        text:"Spend 10 million Charges in CrumbSeeker's Seekers", rewards:100, count:10
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-cube",
        text:"Obtain 3 Cookies by [LemonSoda☆] in CrumbSeeker", rewards:300, count:3
    },
    {
        type:1, difficulty:1,  icon:"fa-solid fa-palette",
        text:"Draw a Pet from the Cookie Run: OvenBreak OC Wiki!", rewards:300, count:1
    },
    {
        type:1, difficulty:2,  icon:"fa-solid fa-cube",
        text:"Obtain [Red Velvet Crinkle], [Victoria Sponge Cake], and [Mint Brownie Milkshake] in CrumbSeeker's Seeker B", rewards:500, count:3
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