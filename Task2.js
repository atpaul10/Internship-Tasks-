document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault()
    let hasError = false;
    document.querySelectorAll(".error").forEach(error => {
        error.style.display = "none"
    });
            
    const firstName = document.getElementById('FirstName').value.trim()
    const lastName = document.getElementById('LastName').value.trim()
    const number = document.getElementById('Number').value.trim()
    const gender = document.getElementById('selectionid').value.trim()
    const address = document.getElementById('Address').value.trim()
    const dateBirth = document.getElementById('Date').value.trim()
    const profDetail = document.getElementById('filetype').value.trim()
    const title = document.getElementById('Title').value.trim()
    const experience = document.getElementById('Experience').value.trim()

    // fname validation 

    if (firstName === "") {
        document.getElementById('FirstNameError').style.display = "block"
        hasError = true;
    }else{
        for(i=0; i< firstName.length; i++){
            if(!((firstName[i] >='A'&& firstName[i]<='Z') || (firstName[i]>='a'&& firstName[i]<='z'))){
                document.getElementById('FirstNameError').style.display='block'
                document.getElementById('FirstNameError').textContent =" first name should contain only the letters"
                hasError = true;
                break
            }    
        }
    }
    // lastName 
    if (lastName === "") {
        document.getElementById('LastNameError').style.display = "block"
        hasError = true;
    }else{
        for(i=0; i<lastName.length; i++){
            if(!((lastName[i] >='A'&& lastName[i] <='Z') ||(lastName[i] >='a' && lastName[i]<='z'))){
                document.getElementById('LastNameError').style.display='block'
                document.getElementById('LastNameError').textContent="Last Name Should contain only the letter"
                hasError = true
            }
        }
    }

    // phone Number
    if (number === "") {
        document.getElementById('PhoneNumberError').style.display = "block"
        hasError = true;
    }else{
        for(i = 0; i< number.length; i++){
            if(!((number[i]>='0' && number[i]<='9'))){
            document.getElementById('PhoneNumberError').style.display = "block"
            document.getElementById('PhoneNumberError').textContent = "Number is Invaild "
            hasError = true;
            }
        }
    }

    // gender
    if (gender === "") {
        document.getElementById('GenderError').style.display = "block"
        hasError = true;
    }
    //address
    if (address === "") {
        document.getElementById('AddressError').style.display = "block"
        hasError = true;
    }
    //dob
    if (dateBirth === "") {
        document.getElementById('DateError').style.display = "block"
        hasError = true;
    }
    //profdetail
    if (profDetail === "") {
        document.getElementById('FileError').style.display = "block"
        hasError = true;
    }
    // title
    if (title === "") {
        document.getElementById('TitleError').style.display = "block"
        hasError = true;
    }
    //experenice
    if (experience === "") {
        document.getElementById('ExperienceError').style.display = "block"
    hasError = true;    
    }

    if (!hasError) {
       const tabledata = document.getElementById('dataTable').getElementsByTagName('tbody')[0]
       const newRow = tabledata.insertRow()

       newRow.insertCell(0).textContent = firstName
       newRow.insertCell(1).textContent = lastName
       newRow.insertCell(2).textContent = number
       newRow.insertCell(3).textContent = gender
       newRow.insertCell(4).textContent = address
       newRow.insertCell(5).textContent = dateBirth
       newRow.insertCell(6).textContent = profDetail.split("\\").pop(); 
       newRow.insertCell(7).textContent = title
       newRow.insertCell(8).textContent = experience

       document.getElementById('formid').reset()

       alert("Form Submit Successfully")
    }

})