    const enrollment_form = document.querySelector('#enrollment-form');
    const input_name = document.querySelector('#input-name');
    const input_email = document.querySelector('#input-email');
    const input_website = document.querySelector('#input-website');
    const input_image_link = document.querySelector('#input-image-link');
    var input_gender = document.getElementsByClassName('input-gender');
    var input_skills = document.getElementsByClassName('input-skills');
    

    const table_body = document.querySelector('.table-body');

    enrollment_form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = input_name.value;
        const email = input_email.value;
        const website = input_website.value;
        const image_link = input_image_link.value;
    
        const table_row = document.createElement("tr");
        table_body.appendChild(table_row);

        const description = document.createElement("td");
        table_row.appendChild(description);

        const photo = document.createElement("td");
        table_row.appendChild(photo);

        const enrolled_name = document.createElement("div");
        enrolled_name.classList.add("text");
        description.appendChild(enrolled_name);
        enrolled_name.innerHTML = `<h4>Name: ${name}</h4>`;
        input_name.value = "";

        const enrolled_gender = document.createElement("div");
        enrolled_gender.classList.add("text");
        description.appendChild(enrolled_gender);
        var gender = '';
            for( i=0; i<3; i++){
                if(input_gender[i].checked === true) {
                    gender = input_gender[i].value;
                    input_gender[i].checked = false;
                    break;
                }   
            }
        enrolled_gender.innerText = "Gender: " + gender;

        const enrolled_email = document.createElement("div");
        enrolled_email.classList.add("text");
        description.appendChild(enrolled_email);
        enrolled_email.innerText = "Email: " + email;
        input_email.value = "";

        const enrolled_website = document.createElement("div");
        enrolled_website.classList.add("text");
        description.appendChild(enrolled_website);
        enrolled_website.innerText = "Website: " + website;
        input_website.value = "";

        const enrolled_skills = document.createElement("div");
        enrolled_skills.classList.add("text");
        description.appendChild(enrolled_skills);
        var skills = '';
            for( i=0; i<3; i++){
                if(input_skills[i].checked == true ) {
                    skills += input_skills[i].value + " ";
                    input_skills[i].checked = false; 

                }

            }
        enrolled_skills.innerText = "Skills: " + skills;

        const enrolled_image = document.createElement("img");
        photo.appendChild(enrolled_image);
        enrolled_image.src = image_link;
        enrolled_image.alt = "no image found";
        input_image_link.value = "";

    
    })