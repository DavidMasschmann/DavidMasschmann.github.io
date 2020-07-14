function bmi_calculator (weight, height) {
    let bmi = 0;
    bmi = weight / (height * height);
    return bmi.toFixed(2);
}

function weight_validation(weight) {
    if (weight > 0 && weight < 500) {
        return true;
    } else {
        return false;
    }
}

function height_validation(height) {
    if (height > 0 && height < 3.00) {
        return true;
    } else {
        return false;
    }
}

let patients = document.querySelectorAll('.patient');

for (let i = 0; i < patients.length; i++) {
    let td_weight = patients[i].querySelector(".weight_info");
    let tf_height =  patients[i].querySelector(".height_info");
    let td_bmi = patients[i].querySelector(".bmi_info");

    let weight = td_weight.textContent;
    let height = tf_height.textContent;

    if (!weight_validation(weight)) {
        console.log("Invalid weight!");
        td_weight.textContent = "Invalid weight!"

        patients[i].classList.add("invalid_patient");
    }

    if (!height_validation(height)) {
        console.log("Invalid height!");
        tf_height.textContent =  "Invalid height!"

        patients[i].classList.add("invalid_patient");
    }

    if (weight_validation(weight) && height_validation(height)) {
        let bmi = bmi_calculator(weight, height);
        td_bmi.textContent = bmi;
    } else {
        td_bmi.textContent = "Invalid height and/or weight";
    }
}
