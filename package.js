const packages = [
    {name:"Beginner Prank Set", cookie:"cookie3", price: 1500, conveyor: 2, spring: 2, plank: 5},
    {name:"Regular Pranksters Set", cookie:"cookie4", price: 3000, conveyor: 4, spring: 4, glue: 2, plank: 10},
    {name:"Seasoned Pranksters Set", cookie:"cookie1", price: 5000, conveyor: 7, spring: 7, glue: 4, ice: 2, baseball: 1, teleport: 2, plank: 15},
];

const current = packages[2];

$("h1").text(current.name);
$(".cookie_package").attr("src", `images/${current.cookie}.png`);
$(".button.package > p").text(current.price.toLocaleString());

let count = 0;
for (let key in current) {
    if (key === "name" || key === "cookie" || key === "price") continue;

    let name = key;

    switch (key) {
        case "teleport":
            name = "Teleporter"; break;
        case "baseball":
            name = "Automatic Baseball Bat"; break;
    }

    $(".package_content").append(
        `<div class="flex flexcol item">
            <img src="images/prank/${key}.png">
            <p class="text_border text_small">${name}</p>
            <p class="text_border">x${current[key]}</p>
        </div>`
    );

    count++;
}

if (count > 4) {
    $(".package_content > .item").addClass("package_item_small");
}