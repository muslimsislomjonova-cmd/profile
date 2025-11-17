function calculateAge(birthYear) {
    return new Date().getFullYear() - Number(birthYear);
}

function normalizeName(name) {
    name = name.trim().toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}


const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const birthYear = document.getElementById("birthYear").value;
    const email = document.getElementById("email").value.toLowerCase().trim();
    const hobby = document.getElementById("hobby").value;
    const gender = document.getElementById("gender").value;

    let hasError = false;

   
    if (fullName.trim() === "") {
        document.getElementById("nameError").textContent = "Ismni kiriting!";
        hasError = true;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (birthYear === "" || Number(birthYear) < 1900) {
        document.getElementById("yearError").textContent = "Tugilgan yil notogri!";
        hasError = true;
    } else {
        document.getElementById("yearError").textContent = "";
    }

    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Email notogri!";
        hasError = true;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (hasError) return;


    const finalName = normalizeName(fullName);
    const age = calculateAge(birthYear);
    const hobbies = hobby.trim().repeat(2);

    let finalGender = "";

    switch (gender) {
        case "male": finalGender = "Male"; break;
        case "female": finalGender = "Female"; break;
        default: finalGender = "Other";
    }

    const ageCategory =
        age <= 12 ? "Child" :
        age <= 19 ? "Teen" :
        age <= 59 ? "Adult" : "Senior";

   
    document.getElementById("resultContent").innerHTML = `
        <p class="result-item"><strong>Name:</strong> ${finalName}</p>
        <p class="result-item"><strong>Email:</strong> ${email}</p>
        <p class="result-item"><strong>Age:</strong> ${age}</p>
        <p class="result-item"><strong>Age Category:</strong> ${ageCategory}</p>
        <p class="result-item"><strong>Gender:</strong> ${finalGender}</p>
        <p class="result-item"><strong>Hobby (x2):</strong> ${hobbies}</p>
    `;
});


document.getElementById("resultContent").classList.remove("empty");

clearBtn.addEventListener("click", () => {
    document.getElementById("profileForm").reset();
    document.getElementById("resultContent").innerHTML = "";
});
