let count = 0;
let saves = []

function IncrementCount() {
    count += 1;
    UpdateCountText();
}

function AddSave() {
    if (saves.length < 5) {
        saves.push(count);
        UpdateSavesText();
    } else {
        saves.shift();
        saves.push(count);
        UpdateSavesText();
    }
    count = 0;
    UpdateCountText();
}

function UpdateCountText() {
    const button = document.getElementById("count-element");
    button.innerText = `${count}`;
}

function UpdateSavesText() {
    const button = document.getElementById("saves-element");
    button.innerText = `Previous 5 Saves: ${saves.join(", ")}`;
}