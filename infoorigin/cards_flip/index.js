let card_input_field = document.querySelector(".input_field");

// cards number
const getCardsNumber = () => {

    let card_value = Number(card_input_field.value);
    let error_msg = document.querySelector("#input_error");

    if (card_value % 2 != 0 || card_value < 4 || card_value > 100) {
        error_msg.innerText = "*Please enter even number between 4-100";
    } else {
        error_msg.innerText = '';
    }
}