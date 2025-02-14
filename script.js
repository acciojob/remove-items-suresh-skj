//your JS code here. If required.

let colorSelect = document.getElementById("colorSelect");
let removeBtn = document.querySelector("input[type='button']");


let removeSelectedColor = () => {
    let selectedIndex = colorSelect.selectedIndex; 
    if (selectedIndex !== -1) { 
        colorSelect.remove(selectedIndex);
    }
};


removeBtn.addEventListener("click", removeSelectedColor);
