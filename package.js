const packages = [
    {
        name:"Jolly Gift",
        header:"Happy Holidays!",
        note:"Thank you for 4 Years of CrumbSeeking!<br>Take this FREE package as a token of our gratitude!",
        footer:"Redeem this package by pinging <span class='discord_mention'>@royalmike</span> in <span class='discord_mention'>#crumbtalk</span>.",
        background:"holidays/background0", cookie:"holidays/cookie0", currency:false, price:"FREE",
        colors:{
            header: "#93caf6",
            details:{
                header: "#6379c4c2", item:"#5881d0", image:"#2e426a"
            }
        },
        details:[
            {name:"Tokens", image:"token", count:50},
            {name:"Gem", image:"gem", count:1},
            {name:"Friend Cards", image:"card", count:2}
        ]
    },
    {
        name:"Welcome Package",
        header:"Newbie Bonus!",
        note:"Are you new to CrumbSeeker and our community?<br>Take this FREE package and submit your Cookies to the game!",
        footer:"This package is <span class='discord_mention'>automatically</span> redeemed for those who currently have <span class='discord_mention'>5 or less</span> Cookies in CrumbSeeker.",
        background:"holidays/background1", cookie:"holidays/cookie1", currency:false, price:"FREE",
        colors:{
            header: "#9ddbc9ff",
            details:{
                header: "#73b5509c", item:"#88c9b5", image:"#4f7569"
            }
        },
        details:[
            {name:"HyperCubes", image:"cube", count:3},
            {name:"V.S.C.", image:"vsc", count:1}
        ]
    },
    {
        name:"Holiday Package",
        header:"Great Offer!",
        note:"Purchase this package with ONLY a Pass<br>and receive amazing value for the cost!",
        footer:"Purchase this package by using the <span class='discord_mention'>em/pay</span> command in <span class='discord_mention'>#commands</span>.",
        notice:"2 per member (2/2)",
        background:"holidays/background2", cookie:"holidays/cookie2", currency:"pass", price:"1", method4:true,
        colors:{
            header: "#ffff60ff",
            details:{
                header: "#7b5025b5", item:"#7e5e32", image:"#3e2e18"
            }
        },
        details:[
            {name:"HyperCube", image:"cube", count:1},
            {name:"Medals", image:"medal", count:10},
            {name:"Epic Friend Card", image:"card_epic", count:1}
        ]
    },
    {
        name:"Ko-fi Package",
        header:"Support Us!",
        note:"Purchase this package if you're into Dungeon Movesets<br>and support us in the process to keep the game going!",
        footer:"Purchase this package by <span class='discord_mention'>donating</span> the price to Mike's <span class='discord_mention'>Ko-fi</span>.",
        notice:"3 per member (3/3)",
        background:"holidays/background3", cookie:"holidays/cookie3", currency:false, price:"$9.98", method4:true,
        colors:{
            header: "#ff943cff",
            details:{
                header: "#e84e2796", item:"#c9885a", image:"#795237"
            }
        },
        details:[
            {name:"Gems", image:"gem", count:2},
            {name:"V.S.C.s", image:"vsc", count:3},
            {name:"Searing Badge", image:"searing", count:1},
            {name:"Legendary Friend Card", image:"card_legendary", count:1}
        ]
    },
    {
        name:"Oldbie Discount",
        header:"why did i make this",
        note:"I think instead of a newbie discount we have an oldbie discount where I get<br>80 cubes for free and have all my bill paid for me and I get a house and a car and<br>a sexy trophy wife who cooks me big fucking steak and baked potatoes every night",
        footer:"i spent too much time on this",
        notice:"0 per LemonSoda",
        background:"holidays/background4", cookie:"holidays/cookie4", currency:"token", price:"0.1",
        colors:{
            header: "#93caf6",
            details:{
                header: "#6379c4c2", item:"#5881d0", image:"#2e426a"
            }
        },
        details:[
            {name:"HyperCubes", image:"cube", count:80},
            {name:"Bills", image:"bill", count:"Paid"},
            {name:"House", image:"home", count:1},
            {name:"Car", image:"bravecar", count:1},
            {name:"Sexy Trophy Wife", image:"trophy", count:1}
        ]
    }
];

let index = 0;

$("body").on("click", function() {
    index++;
    if (index === packages.length) index = 0;
    updatePackage(packages[index]);
});

updatePackage(packages[index]);

function updatePackage(package) {
    $(".background").css("background-image", `url(images/${package.background}.png)`);
    $("h1").text(package.name);
    $("h3").text(package.header).css("color", package.colors.header);
    $(".text_title_note").html(package.note);
    $(".text_note").html(package.footer).css("width", package.width);
    $(".package_cookie").attr("src", `images/${package.cookie}.png`);
    $(".button.package > .flex > .text_price").text(package.price.toLocaleString());
    $(".header").css("background-color", package.colors.details.header);

    if (!package.notice) $(".button.package > .text_notice").text("1 per member");
    else $(".button.package > .text_notice").text(package.notice);

    if (!package.currency) $(".button.package > .flex > img").hide();
    else $(".button.package > .flex > img").show().attr("src", `images/${package.currency}.png`);

    if (package.method4) $(".method4").show();
    else $(".method4").hide();

    $(".package_details > .content").empty();
    package.details.forEach(item => {
        $(".package_details > .content").append(
            `<div class="flex item" style="background-color:${package.colors.details.item}">
                <div class="flex image" style="background-color:${package.colors.details.image}">
                    <img src="images/${item.image}.png">
                </div>
                <div class="flex flexcol">
                    <p class="text_border text_small">${item.name}</p>
                    <p class="text_border">${item.count}</p>
                </div>
            </div>`
        );
    });
}