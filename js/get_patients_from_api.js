let get_patients_api = document.getElementById("get_patients_api")

get_patients_api.addEventListener("click", function(){
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    
    xhr.addEventListener("load", function (){        
        if (xhr.status == 200){
            let response = xhr.responseText
            let patients = JSON.parse(response)
            
            patients.forEach(element => {
                add_patient_to_table(element)
            });
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
        }
    })

    xhr.send()
})
    
