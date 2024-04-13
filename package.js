const packages = [
    {name:"Beginner Prank Set", conveyor: 2, spring: 2, plank: 5},
    {name:"Regular Pranksters Set", conveyor: 4, spring: 4, glue: 2, plank: 10},
    {name:"Seasoned Pranksters Set", conveyor: 7, spring: 7, glue: 4, ice: 2, baseball: 1, teleport: 2, plank: 15},
];

const current = packages[1];

$("h1").text(current.name);

let count = 0;
for (let key in current) {
    if (key === "name") continue;

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