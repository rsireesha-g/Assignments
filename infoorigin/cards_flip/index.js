let card_input_field = document.querySelector(".input_field");
let no_of_cards = 0;
let cards_no_obj = {};
let selected_card_values = [];
let blocked_cards_count = 0;
let cards_container = document.querySelector(".cards_container");


// cards number
const getCardsNumber = () => {

    no_of_cards = Number(card_input_field.value);
    let error_msg = document.querySelector("#input_error");

    if (no_of_cards % 2 != 0 || no_of_cards < 4 || no_of_cards > 100) {
        error_msg.innerText = "*Please enter even number between 4-100";
    } else {
        error_msg.innerText = '';
        generateRandomNumbersArray(no_of_cards / 2);
        displayCards();
    }

    selected_card_values = [];
    cards_no_obj = {};
    blocked_cards_count = 0;
}

// getting random N/2 numbers
const generateRandomNumbersArray = (n) => {
    for (let i = 0; i < n; i++) {
        let number = generateRandomNumber();

        while (cards_no_obj[number] === 'undefined') {
            is_number_exists = generateRandomNumber();
        }

        cards_no_obj[number] = 0;
    }
}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1)
}

const generateRandomIndexValue = () => {
    return Object.keys(cards_no_obj)[Math.floor(Math.random() * Object.keys(cards_no_obj).length)];
}

const onCardClick = (value, index, card, p) => {
    if (selected_card_values?.length == 0) {
        selected_card_values.push([value, index]);
        card.classList.add("flipped");
        p.style.display = "block";
        setTimeout(() => {
            p.innerText = value;
        }, 800)
    }
    else {
        selected_card_values.push([value, index]);
        card.classList.add("flipped");
        p.style.display = "block";

        setTimeout(() => {
            p.innerText = value;
        }, 800)

        let chcek = selected_card_values[0][0] === value;
        let prev_card = document.getElementById(`card${selected_card_values[0][1]}`);

        if (chcek) {
            blockCards(card, prev_card)

        } else {
            wrongCardsSelected(card, prev_card)
        }
    }
}

const blockCards = (card, prev_card) => {
    setTimeout(() => {
        card.classList.add("blocked");
        card.classList.remove("flipped");
        prev_card.classList.add("blocked");
        prev_card.classList.remove("flipped");

        selected_card_values = [];
    }, 1000);
    blocked_cards_count += 1;

    if (blocked_cards_count === (no_of_cards / 2)) {
        setTimeout(() => {
            congratulationsModal()
        }, 1500)
    };
}

const wrongCardsSelected = (card, prev_card) => {
    setTimeout(() => {
        card.classList.add("wrong");
        card.classList.remove("flipped");
        prev_card.classList.add("wrong");
        prev_card.classList.remove("flipped");
    }, 1000);

    let card_child = card.firstChild;
    let prev_card_child = prev_card.firstChild;

    setTimeout(() => {

        card.classList.toggle("wrong");
        prev_card.classList.toggle("wrong");

        prev_card_child.style.display = "none";
        card_child.style.display = "none";

    }, 2000);

    selected_card_values = [];
}

const displayCards = () => {
    cards_container.innerHTML = '';

    for (let i = 0; i < no_of_cards; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", `card${i}`);

        let p = document.createElement("p");
        p.setAttribute("class", "card_value");

        let random_key = generateRandomIndexValue();

        while (cards_no_obj[random_key] > 1) {
            random_key = generateRandomIndexValue();
        }
        cards_no_obj[random_key] += 1;

        card.addEventListener("click", () => {

            if (card.classList.contains("blocked") || (
                selected_card_values?.length === 1 && selected_card_values[0][1] === i)) {
                console.log('already blocked')
            } else {
                onCardClick(random_key, i, card, p)
            }
        })

        card.append(p);

        cards_container.appendChild(card);
    }
}

let modal = document.querySelector(".modal");

const congratulationsModal = () => {
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

const restartGame = () => {
    card_input_field.value = '';
    no_of_cards = 0;
    cards_no_obj = {};
    selected_card_values = [];
    blocked_cards_count = 0;
    modal.style.display = "none";
    cards_container.innerHTML = '';
}

