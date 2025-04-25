let no_of_walls = 0;
const wall_heights_input = document.querySelector("#wall_heights_input_field");

const getWallNumber = () => {
    let number_error = document.querySelector("#number_error");

    const wall_number_input = document.querySelector("#wall_number_input_field");
    no_of_walls = wall_number_input?.value || 0;

    if (no_of_walls < 1 || no_of_walls > 30) {
        number_error.innerText = "* please, enter the value in between the range 1 to 30";
        wall_heights_input.disabled = "true";
        wall_number_input.classList.add("input_error")
    } else {
        wall_number_input.classList.remove("input_error");
        wall_heights_input.removeAttribute("disabled");
        number_error.innerText = "";
        console.log(no_of_walls);
    }
}

const getWallHeights = () => {
    const wall_heights = wall_heights_input?.value;
    const heights_array = wall_heights?.split(",");
    if (heights_array.length < no_of_walls) {
        let heights_error = document.querySelector("#heights_error");
        heights_error.innerText = "* please, enter correct no of heights";
    } else {
        console.log(wall_heights_input);
    }
}