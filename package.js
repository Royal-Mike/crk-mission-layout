const packages = [
    {
        name:"Jolly Gift", note:"Thank you for being here with us!",
        background:"holidays/background0", cookie:"cookie0", currency:false, price:"FREE",
        r_gem:1, r_pass:1,
        footer:"Redeem this free package by pinging <span class='discord_mention'>@royalmike</span> in <span class='discord_mention'>#crumbtalk</span>."
    },
    {
        name:"Casual Holiday Package", note:"Add a Cookie to CrumbSeeker with this package!",
        background:"holidays/background1", cookie:"cookie1", currency:"token", price:"50",
        gem:1, r_cube:1, r_cog:5, r_badge:2,
        footer:"Use the <span class='discord_mention'>em/pay</span> command in <span class='discord_mention'>#crumbtalk</span> to pay for this package."
    },
    {
        name:"Premium Holiday Package", note:"Add Dungeon Movesets to CrumbSeeker Cookies with this package!",
        background:"holidays/background2", cookie:"cookie2", currency:"token", price:"100",
        r_vsc:3, r_medal:5, r_searing:2,
        footer:"Use the <span class='discord_mention'>em/pay</span> command in <span class='discord_mention'>#crumbtalk</span> to pay for this package."
    },
    {
        name:"Bribe Package", note:"Receive more rewards for bribing!", width:"325px",
        background:"holidays/background3", cookie:"cookie3", currency:"art", price:"1",
        r_cube:2, r_vsc:2, r_special:1,
        footer:"Submit to the <span class='discord_mention'>Fan-Art Box</span>, then ping <span class='discord_mention'>@royalmike</span> in <span class='discord_mention'>#crumbtalk</span> to receive this package."
    },
];

const current = packages[3];

$(".background").css("background-image", `url(images/${current.background}.png)`);
$("h1").text(current.name);
$(".text_title_note").text(current.note);
$(".text_note").html(current.footer).css("width", current.width);
$(".cookie_package").attr("src", `images/${current.cookie}.png`);
$(".button.package > p").text(current.price.toLocaleString());

if (!current.currency) {
    $(".button.package > img").hide();
}
else {
    $(".button.package > img").attr("src", `images/${current.currency}.png`);
}

let count = 0;
for (let key in current) {
    if (!key.startsWith("r_")) continue;

    let name = key.replace("r_", "");

    switch (key) {
        case "r_cog":
            name = "M. Cog"; break;
        case "r_special":
            name = "Sp. Badge"; break;
        case "r_badge":
            name = "B. Badge"; break;
        case "r_searing":
            name = "Sr. Badge"; break;
        case "r_vsc":
            name = "V.S.C"; break;
    }

    if (current[key] > 1) {
        if (name.endsWith("s")) name += "es";
        else name += "s";
    }

    $(".package_content").append(
        `<div class="flex flexcol item">
            <img src="images/${key.replace("r_", "")}.png">
            <p class="text_border text_small">${name}</p>
            <p class="text_border">x${current[key]}</p>
        </div>`
    );

    count++;
}

if (count > 4) {
    $(".package_content > .item").addClass("package_item_small");
}