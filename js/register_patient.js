function get_patient_from_form (form) {
    let patient = {
        nome: form.name.value,
        peso: form.weight.value,
        altura: form.height.value,
        gordura: form.body_fat.value,
        imc: bmi_calculator(form.weight.value, form.height.value)
    }

    return patient;
}

function assemble_tr (patient) {
    let patient_tr = document.createElement("tr");
    patient_tr.classList.add("patient");

    patient_tr.append(
        assemble_td(patient.nome, "name_info"),
        assemble_td(patient.peso, "weight_info"),
        assemble_td(patient.altura, "height_info"),
        assemble_td(patient.gordura, "bodyFat_info"),
        assemble_td(patient.imc, "bmi_info")
    );

    return patient_tr;
}

function assemble_td (info, html_class) {
    let td = document.createElement("td");
    td.classList.add(html_class);
    td.textContent = info;

    return td;
}

function patient_validation(patient) {
    let errors = [];

    if (patient.nome.length == 0) {
        errors.push("Name field can't be blank");
    }

    if (patient.gordura.length == 0) {
        errors.push("Body Fat field can't be blank");
    }

    if (patient.peso.length == 0) {
        errors.push("Weight field can't be blank");
    } else if (!height_validation(patient.altura)) {
        errors.push("Height is invalid");
    }

    if (patient.altura.length == 0) {
        errors.push("Height field can't be blank");
    } else if (!weight_validation(patient.peso)) {
        errors.push("Weight is invalid");
    }
    
    return errors;
}

function show_error_message(errors) {
    let ul = document.querySelector("#error-messages");
    ul.innerHTML = "";

    errors.forEach(function(error) {
        let li = document.createElement("li");
        li.textContent = error;
        ul.append(li);
    });
}

function add_patient_to_table(patient) {
    let patient_tr = assemble_tr(patient);
    let table = document.querySelector("#patients_table");
    table.append(patient_tr);
}

let add_button = document.getElementById("add_patient");

add_button.addEventListener("click", function(){
    event.preventDefault();
    
    let form = document.getElementById("form");

    let patient = get_patient_from_form(form);

    let errors = patient_validation(patient);

    if (errors.length > 0) {
        show_error_message(errors);
        return;
    }

    add_patient_to_table(patient)

    form.reset();
    let error_messages = document.querySelector("#error-messages");
    error_messages.innerHTML = "";
});
