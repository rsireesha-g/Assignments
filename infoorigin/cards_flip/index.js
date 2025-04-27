let card_input_field = document.querySelector(".input_field");
let no_of_cards = 0;
let cards_no_array = [];

// cards number
const getCardsNumber = () => {

    no_of_cards = Number(card_input_field.value);
    let error_msg = document.querySelector("#input_error");

    if (no_of_cards % 2 != 0 || no_of_cards < 4 || no_of_cards > 100) {
        error_msg.innerText = "*Please enter even number between 4-100";
    } else {
        error_msg.innerText = '';
        generateRandomNumbersArray(no_of_cards / 2)
    }
}

// getting random N/2 numbers
const generateRandomNumbersArray = (n) => {
    for (let i = 0; i < n; i++) {
        let number = generateRandomNumber();
        let is_number_exists = cards_no_array.includes(number);
        while (is_number_exists) {
            is_number_exists = generateRandomNumber(generateRandomNumber());
        }
        cards_no_array.push(number);
    }
    console.log('cards array', cards_no_array)

}
const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
}

// const displayCards=()=>{

// }