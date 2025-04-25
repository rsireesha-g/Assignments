// basic input variables

let no_of_walls = 0;
var wall_heights_input = document.querySelector("#wall_heights_input_field");
let heights_error = document.querySelector("#heights_error");
var wall_heights = [];
var wall_number_input = document.querySelector("#wall_number_input_field");
var number_error = document.querySelector("#number_error");
var wall_data_container = document.querySelector(".wall_data_container");

// validation check function for number of walls

const getWallNumber = () => {
    if (no_of_walls != 0) {
        wall_heights_input.value = '';
        heights_error.innerText = "";
    }

    no_of_walls = wall_number_input?.value;
    wall_heights_input.classList.remove("input_error");
    heights_error.innerText = "";
    if (no_of_walls < 1 || no_of_walls > 15) {
        number_error.innerText = "* Please enter the value between 1-15";
        wall_heights_input.disabled = "true";
        wall_number_input.classList.add("input_error");
    } else {
        wall_number_input.classList.remove("input_error");
        wall_heights_input.removeAttribute("disabled");
        number_error.innerText = "";
    }
}

// validation check function for height of walls

const getWallHeights = () => {
    wall_heights = wall_heights_input?.value;
    const heights_array = wall_heights?.split(",").map(Number);
    let check = heights_array.find((height) => height > 100);
    if (check) {
        wall_heights_input.classList.add("input_error")
        heights_error.innerText = "* Please enter value between 1-100";
    } else {
        no_of_walls = wall_number_input?.value;
        if (no_of_walls === 0) {
            wall_heights_input.classList.add("input_error")
            heights_error.innerText = "* Please enter number of walls";
        }
        else if (heights_array?.length != no_of_walls) {
            wall_heights_input.classList.add("input_error")
            heights_error.innerText = "* Please enter correct number of heights";
        } else {
            wall_heights_input.classList.remove("input_error");
            heights_error.innerText = "";
            displayWallData();
        }
    }
}

// displaying wall visualization data

var visible_from_left = 1;
var visible_from_right = 1;

const displayWallData = () => {
    let data = wall_heights?.split(",").map(Number);
    wall_data_container.style.display = "block";

    var bar_chart_div = document.querySelector(".bar_chart");
    bar_chart_div.innerHTML = "";
    bar_chart_div.style.gridTemplateColumns = `repeat(${data?.length},25px)`

    data?.map((height, index) => {
        var item_div = document.createElement("div");
        item_div.setAttribute("class", "item");
        item_div.style.height = `calc(1% * ${height})`;
        item_div.setAttribute("key", index);
        var label = document.createElement("div");
        label.setAttribute("class", 'label');
        label.innerText = height;

        item_div.append(label);
        bar_chart_div.appendChild(item_div);
    });

    checkLeftVisibility(data);
    checkRightVisibility(data);
}

// checking visibility for person on right

const checkRightVisibility = (data) => {
    visible_from_right = 1;
    let max_height = data[data?.length - 1];
    for (let index = data?.length - 2; index >= 0; index--) {
        if (data[index] > max_height) {
            max_height = data[index];
            console.log(data[index], max_height, 'left update', visible_from_right)
            visible_from_right++;
        }
    }
    document.querySelector(".right_side_visible_count").innerText = visible_from_right;
    document.querySelector(".right_count").innerText = visible_from_right;
}

// checking visibility for person on left

const checkLeftVisibility = (data) => {
    visible_from_left = 1;
    let max_height = data[0];
    for (let index = 1; index < data?.length; index++) {
        if (data[index] > max_height) {
            max_height = data[index];
            visible_from_left++;
        }
    }
    document.querySelector(".left_side_visible_count").innerText = visible_from_left;
    document.querySelector(".left_count").innerText = visible_from_left;
}

