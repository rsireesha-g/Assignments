let card_input_field = document.querySelector(".input_field");
let no_of_cards = 0;
let cards_no_obj = {};
let selected_card_values = [];
let blocked_cards_count = 0;

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
    console.log(cards_no_obj)
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
        p.style.display = 'block';
    }
    else if (selected_card_values?.length == 1) {
        selected_card_values.push([value, index]);
        card.classList.add("flipped");
        p.style.display = 'block';

        let chcek = selected_card_values[0][0] === value;
        console.log(selected_card_values)
        let prev_card = document.getElementById(`card${selected_card_values[0][1]}`);

        if (chcek) {
            card.classList.add("blocked");
            card.classList.remove("flipped");
            prev_card.classList.add("blocked");
            prev_card.classList.remove("flipped");
            blocked_cards_count += 1;

            selected_card_values = [];
            if (blocked_cards_count === (no_of_cards / 2)) {
                alert("won the game");
            };
        } else {
            card.classList.add("wrong");
            card.classList.remove("flipped");
            prev_card.classList.add("wrong");
            prev_card.classList.remove("flipped");

            setTimeout(() => {
                card.classList.toggle("wrong");
                let card_child = card.firstChild;
                card_child.style.display = "none";

                prev_card.classList.toggle("wrong");
                let prev_card_child = prev_card.firstChild;
                prev_card_child.style.display = "none"
            }, 1000);
            selected_card_values = [];
        }
        console.log(chcek, 'checking', selected_card_values)
    } else {
        console.log('already clicked')
    }
}

const displayCards = () => {
    let cards_container = document.querySelector(".cards_container");
    cards_container.innerHTML = '';

    for (let i = 0; i < no_of_cards; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", `card${i}`);

        let p = document.createElement("p");
        p.setAttribute("class", "card_value");

        // if(cards_no_obj[])
        // Random Key
        let random_key = generateRandomIndexValue();
        while (cards_no_obj[random_key] > 1) {
            random_key = generateRandomIndexValue();
        }
        cards_no_obj[random_key] += 1;
        p.innerText = random_key;

        card.addEventListener("click", () => {
            if (card.classList.contains("blocked")) {
                console.log('already blocked')
            } else {
                onCardClick(random_key, i, card, p)
            }
        })

        card.append(p);

        cards_container.appendChild(card);
    }
    console.log(cards_no_obj)
}