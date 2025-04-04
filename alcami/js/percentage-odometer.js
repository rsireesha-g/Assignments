function createOdometer(e, value) {
    const odometer = new Odometer({ el: e, value: 0 });
    odometer.update(value)
}
const energyPer = document.querySelector(".energy-per")
createOdometer(energyPer, 84)
const focusPer = document.querySelector(".focus-per")
createOdometer(focusPer, 78)
const moodPer = document.querySelector(".mood-per")
createOdometer(moodPer, 89)
const healthPer = document.querySelector(".health-per")
createOdometer(healthPer, 90)