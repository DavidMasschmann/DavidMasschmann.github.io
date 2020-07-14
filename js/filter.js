let search_field = document.querySelector("#table_filter");

search_field.addEventListener("input", function() {
    let patients = document.querySelectorAll(".patient");

    if (this.value.length > 0) {
        for (let i = 0; i < patients.length; i++) {
            let patient = patients[i];
            let name_td = patient.querySelector(".name_info")
            let name = name_td.textContent;
            let regex = new RegExp(this.value, "i")

            if (regex.test(name)) {
                patient.classList.remove("hide");
            } else {
                patient.classList.add("hide");
            }
        };
    } else {
        for (let i = 0; i < patients.length; i++) {
            let patient = patients[i];
            patient.classList.remove("hide");
        };
    }
});
