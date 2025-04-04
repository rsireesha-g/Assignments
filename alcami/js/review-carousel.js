var reviewsData = [
    {
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum natus sunt quidem perspiciatis nulla nam debitis. Repellat ea ad temporibus sunt cumque aperiam, dolor laborum facere nostrum officiis illum.",
        profileImg: "./assets/svg/profile-icon.svg",
        name: "Name Surname",
        designation: "position, company name"
    }, {
        rating: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum natus sunt quidem perspiciatis nulla nam debitis. Repellat ea ad temporibus sunt cumque aperiam, dolor laborum facere nostrum officiis illum.",
        profileImg: "./assets/svg/profile-icon.svg",
        name: "Name Surname",
        designation: "position, company name"
    }, {
        rating: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum natus sunt quidem perspiciatis nulla nam debitis. Repellat ea ad temporibus sunt cumque aperiam, dolor laborum facere nostrum officiis illum.",
        profileImg: "./assets/svg/profile-icon.svg",
        name: "Name Surname",
        designation: "position, company name"
    }, {
        rating: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum natus sunt quidem perspiciatis nulla nam debitis. Repellat ea ad temporibus sunt cumque aperiam, dolor laborum facere nostrum officiis illum.",
        profileImg: "./assets/svg/profile-icon.svg",
        name: "Name Surname",
        designation: "position, company name"
    }, {
        rating: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum natus sunt quidem perspiciatis nulla nam debitis. Repellat ea ad temporibus sunt cumque aperiam, dolor laborum facere nostrum officiis illum.",
        profileImg: "./assets/svg/profile-icon.svg",
        name: "Name Surname",
        designation: "position, company name"
    }, {
        rating: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum natus sunt quidem perspiciatis nulla nam debitis. Repellat ea ad temporibus sunt cumque aperiam, dolor laborum facere nostrum officiis illum.",
        profileImg: "./assets/svg/profile-icon.svg",
        name: "Name Surname",
        designation: "position, company name"
    }, {
        rating: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorum natus sunt quidem perspiciatis nulla nam debitis. Repellat ea ad temporibus sunt cumque aperiam, dolor laborum facere nostrum officiis illum.",
        profileImg: "./assets/svg/profile-icon.svg",
        name: "Name Surname",
        designation: "position, company name"
    }
]

var prevIndex = 0;
var reviewsCount = reviewsData?.length || 0;
function reviewsDataMapping() {
    document.getElementById("reviews-container").innerText = ""
    reviewsData.forEach((review, i) => {
        if (i < 3 && prevIndex < reviewsCount) {

            var box = document.createElement("div");
            box.setAttribute("class", "review-box");

            var starBox = document.createElement("div");
            starBox.setAttribute("class", "stars-box");

            for (let j = 0; j < 5; j++) {
                var star = document.createElement("img");
                star.setAttribute("class", "star")
                if (j + 1 <= reviewsData[i + prevIndex]?.rating) {
                    star.src = "./assets/svg/star-filled.svg"
                } else {
                    star.src = "./assets/svg/star-empty.svg"
                }
                starBox.append(star)
            }

            var review = document.createElement("p");
            review.setAttribute("class", "review");
            review.innerText = reviewsData[i + prevIndex]?.description;

            var reviewerProfile = document.createElement("div");
            reviewerProfile.setAttribute("class", "reviewer-profile");

            var profile = document.createElement("div");
            profile.setAttribute("class", "profile");
            var profileIcon = document.createElement("img");
            profileIcon.setAttribute("class", "profile-icon");
            profileIcon.src = reviewsData[i + prevIndex]?.profileImg;
            profile.append(profileIcon);

            var profileData = document.createElement("div");
            profileData.setAttribute("class", "profile-data");
            var profileName = document.createElement("div");
            profileName.setAttribute("class", "profile-name");
            var profileDescrip = document.createElement("div");
            profileDescrip.setAttribute("class", "profile-descrip");
            profileName.innerText = reviewsData[i + prevIndex]?.name;
            profileDescrip.innerText = reviewsData[i + prevIndex]?.designation;
            profileData.append(profileName, profileDescrip);

            reviewerProfile.append(profile, profileData);
            box.append(starBox, review, reviewerProfile);

            document.getElementById("reviews-container").append(box)

        }
    });
}
reviewsDataMapping();

function dotsMapping() {
    document.getElementsByClassName("dots-container")[0].innerText = "";
    for (let j = 0; j < reviewsCount - 2; j++) {
        var dot = document.createElement("div");
        dot.setAttribute("class", "dot")
        if (j <= prevIndex) {
            dot.style.background = "#333"
        } else {
            dot.style.background = "none"
        }
        document.getElementsByClassName("dots-container")[0].append(dot)
    }
}

dotsMapping();

var prevArrow = document.getElementsByClassName("prev")[0];
var nextArrow = document.getElementsByClassName("next")[0];

nextArrow.addEventListener("click", function () {
    prevIndex < reviewsCount - 3 ? prevIndex += 1 : prevIndex;
    if (prevIndex >= reviewsCount - 3) {
        nextArrow.style.background = "none";
    } else {
        nextArrow.style.background = "#666";
    }
    prevArrow.style.background = "#666";
    reviewsDataMapping();
    dotsMapping();
})

prevArrow.addEventListener("click", function () {
    prevIndex > 0 ? prevIndex -= 1 : prevIndex;
    if (prevIndex === 0) {
        prevArrow.style.background = "none";
    } else {
        prevArrow.style.background = "#666";
    }
    nextArrow.style.background = "#666";
    reviewsDataMapping();
    dotsMapping();
})

function reviewsDataMappingMobile() {
    document.getElementById("reviews-container-mobile").innerText = ""
    reviewsData.forEach((review, i) => {

        var box = document.createElement("div");
        box.setAttribute("class", "review-box");

        var starBox = document.createElement("div");
        starBox.setAttribute("class", "stars-box");

        for (let j = 0; j < 5; j++) {
            var star = document.createElement("img");
            star.setAttribute("class", "star")
            if (j + 1 <= reviewsData[i + prevIndex]?.rating) {
                star.src = "./assets/svg/star-filled.svg"
            } else {
                star.src = "./assets/svg/star-empty.svg"
            }
            starBox.append(star)
        }

        var review = document.createElement("p");
        review.setAttribute("class", "review");
        review.innerText = reviewsData[i + prevIndex]?.description;

        var reviewerProfile = document.createElement("div");
        reviewerProfile.setAttribute("class", "reviewer-profile");

        var profile = document.createElement("div");
        profile.setAttribute("class", "profile");
        var profileIcon = document.createElement("img");
        profileIcon.setAttribute("class", "profile-icon");
        profileIcon.src = reviewsData[i + prevIndex]?.profileImg;
        profile.append(profileIcon);

        var profileData = document.createElement("div");
        profileData.setAttribute("class", "profile-data");
        var profileName = document.createElement("div");
        profileName.setAttribute("class", "profile-name");
        var profileDescrip = document.createElement("div");
        profileDescrip.setAttribute("class", "profile-descrip");
        profileName.innerText = reviewsData[i + prevIndex]?.name;
        profileDescrip.innerText = reviewsData[i + prevIndex]?.designation;
        profileData.append(profileName, profileDescrip);

        reviewerProfile.append(profile, profileData);
        box.append(starBox, review, reviewerProfile);

        document.getElementById("reviews-container-mobile").append(box)

    });
}
reviewsDataMappingMobile();