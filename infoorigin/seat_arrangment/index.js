// basic data and intial default data

let seat_matrix_input = document.querySelector("#seat_matrix_input_field");
let seats_matrix = {
    "total_seats": 0,
    "rows": 0,
    "columns": 0,
    "booked": 0,
    "available": 0,
    'blocked': 0
};

let blocked_seat = document.getElementById("blocked_seat_input_field");
let booked_seat = document.querySelector(".booked_count");

// validating seat matrix value and updating seat matrix object

const getSeatsMatrix = () => {
    let matrix_error_msg = document.querySelector("#matrix_error");
    blocked_seat.value = '';


    let seat_matrix_value = seat_matrix_input.value;
    let matrix_value_array = seat_matrix_value?.split("*").map(Number);

    if (matrix_value_array[0] < 1 || matrix_value_array[1] < 1) {  //minimum row and column value
        blocked_seat.disabled = "true";
        matrix_error_msg.innerText = "*Please enter value >0";
    }
    else if (matrix_value_array?.length != 2) { //to check whether row and column are given
        blocked_seat.disabled = "true";
        matrix_error_msg.innerText = "*Please enter correct format. Eg:rows*columns";
    }
    else if (matrix_value_array[1] > 25) { //maximum col value
        blocked_seat.disabled = "true";
        matrix_error_msg.innerText = "*Please enter column value between 1-25";
    }
    else {
        blocked_seat.removeAttribute("disabled");
        matrix_error_msg.innerText = '';
        seats_matrix = {
            ...seats_matrix,
            ["total_seats"]: (matrix_value_array[0] * matrix_value_array[1]),
            ["rows"]: matrix_value_array[0],
            ["columns"]: matrix_value_array[1]
        }
        displaySeatsArrangement(seats_matrix?.rows, seats_matrix?.columns, seats_matrix?.total_seats);
    }
}

// displaying seat arrangement based on the given data

const displaySeatsArrangement = (rows, columns, total) => {
    let seats_arrangement_container = document.querySelector(".seats_arrangement");
    seats_arrangement_container.innerHTML = '';

    seats_arrangement_container.style.gridTemplateColumns = `repeat(${columns},minmax(auto,60px)`;
    let index = 0; //for indexing the seat

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            index++;
            let seat = document.createElement("div");
            seat.setAttribute("class", "seat");
            seat.classList.add("default");

            seat.setAttribute("key", `rc${r}${c}`);
            seat.setAttribute("id", `row_col_${index}`);

            seat.addEventListener("click", () => { //on click toggle and update data
                let is_already_booked = seat.classList.contains("booked");
                seat.classList.toggle("booked");
                seat.classList.toggle("default");
                if (is_already_booked) {
                    booked_seat.innerText = seats_matrix?.booked - 1;
                    seats_matrix = { ...seats_matrix, ['booked']: seats_matrix?.booked - 1, ['available']: seats_matrix?.available + 1 };
                } else {
                    booked_seat.innerText = seats_matrix?.booked + 1;
                    seats_matrix = { ...seats_matrix, ['booked']: seats_matrix?.booked + 1, ['available']: seats_matrix?.available - 1 };
                }
            })
            seats_arrangement_container.appendChild(seat);
        }
    }
    seats_matrix = { ...seats_matrix, ['available']: total }
    booked_seat.innerText = 0;
}

let blocked_seats_index_array = [];

// validating blocked seats value

const getBlockedSeats = () => {
    let blocked_seat_error_msg = document.querySelector("#blocked_seat_error");
    let blocked_seats_count = Number(blocked_seat.value);
    seats_matrix = { ...seats_matrix, ['available']: (seats_matrix?.total_seats - blocked_seats_count), ['blocked']: blocked_seats_count }


    if (blocked_seats_count < 0) { //minimum value check
        blocked_seat_error_msg.innerText = `*Please enter value >0`;
    }
    else if (blocked_seats_count > seats_matrix?.total_seats) { // maximum value check
        blocked_seat_error_msg.innerText = `*Please enter value <=${seats_matrix?.total_seats}`;
    }
    else {
        blockingSeats(blocked_seats_count)
    }
}

let seat_no = -1;
const blockingSeats = (n) => {
    blocked_seats_index_array = []; //reset array

    if (n != 0) {
        for (let i = 0; i < n; i++) {
            let is_already_blocked = checkAlreadyBlocked(getSeatNo());
            while (is_already_blocked) {
                is_already_blocked = checkAlreadyBlocked(getSeatNo())
            }
            blocked_seats_index_array.push(seat_no);
            let block_seat = document.getElementById(`row_col_${seat_no}`);
            block_seat.classList.add("blocked");
            block_seat.classList.remove("default");
        }
    } else {  // if number updated to zero
        let blocked_seats = [...document.getElementsByClassName("blocked")];
        blocked_seats?.map((seat) => {
            seat.classList.toggle("blocked");
            seat.classList.toggle("default")
        })
    }
}

// random number to block seat
const getSeatNo = () => {
    return Math.floor(Math.random() * seats_matrix?.total_seats + 1);
}

// check whether seat is already blocked or not
const checkAlreadyBlocked = (n) => {
    let check = blocked_seats_index_array.includes(n);
    if (check) {
        return true;
    } else {
        seat_no = n;
        return false;
    }
}