let command = "em/tf";

$("input").on("input", function() {
    const inputs = $("input[type='text']");
    const correct = $("input[type='radio']:checked").attr("id").split("choice")[1];

    command = `em/tf ${inputs.eq(0).val()}; ${correct}; `;

    const choices = [];
    for (let i = 1; i <= 5; i++) {
        const value = inputs.eq(i).val();
        if (value) choices.push(value);
    }

    command += choices.join("; ");
    $("p").text(command);
});

$("button").on("click", function() {
    navigator.clipboard.writeText(command).then(function() {
        alert("Copied");
    }, function(err) {
        alert("Error");
    });
});