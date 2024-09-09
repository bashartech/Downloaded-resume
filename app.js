var education = document.querySelector(".education");
var formCheck = document.getElementById("resumeForm");
var icon = document.querySelector(".education span img");
var sec1 = document.querySelector(".sec1");
var resume = document.querySelector(".resume");
var form = document.querySelector(".form");
var skills = document.querySelector(".skills");
var icon2 = document.querySelector(".skills span img");
var sec2 = document.querySelector(".sec2");
var contact = document.querySelector(".contact");
var icon4 = document.querySelector(".contact span img");
var sec4 = document.querySelector(".sec4");
var workExperience = document.querySelector(".workExperience");
var sec3 = document.querySelector(".sec3");
var icon3 = document.querySelector(".workExperience span img");
var button = document.querySelector(".btn");
var conName = document.getElementById("ConName");
var resName = document.getElementById("resName");
var conEdu = document.getElementById("ConEdu");
var resEdu = document.getElementById("resEdu");
var conSkills = document.getElementById("ConSkills");
var resSkills = document.getElementById("resSkills");
var conExp = document.getElementById("ConExp");
var resExp = document.getElementById("resExp");
var conGmail = document.getElementById("ConGmail");
var resGmail = document.getElementById("resGmail");
var downloadBtn = document.getElementById("downloadBtn");
button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    // Scroll smoothly to the resume section
    resume.scrollIntoView({ behavior: "smooth" });
});
conName.addEventListener("keyup", function () {
    var formName = conName.value;
    resName.textContent = formName;
});
conEdu.addEventListener("keyup", function () {
    var formEdu = conEdu.value;
    resEdu.textContent = formEdu;
});
conSkills.addEventListener("keyup", function () {
    var formSkills = conSkills.value;
    resSkills.textContent = formSkills;
});
conGmail.addEventListener("keyup", function () {
    var formGmail = conGmail.value;
    resGmail.textContent = formGmail;
});
conExp.addEventListener("keyup", function () {
    var formExp = conExp.value;
    resExp.textContent = formExp;
});
icon.addEventListener("click", function () {
    if (sec1.style.display === "none") {
        sec1.style.display = "block";
        icon.textContent = "Hide";
    }
    else {
        sec1.style.display = "none";
        icon.textContent = "Show"; // Change button text to 'Show'
    }
});
icon2.addEventListener("click", function () {
    if (sec2.style.display === "none") {
        sec2.style.display = "block";
        icon2.textContent = "Hide";
    }
    else {
        sec2.style.display = "none";
        icon2.textContent = "Show"; // Change button text to 'Show'
    }
});
icon3.addEventListener("click", function () {
    if (sec3.style.display === "none") {
        sec3.style.display = "block";
        icon3.textContent = "Hide";
    }
    else {
        sec3.style.display = "none";
        icon3.textContent = "Show"; // Change button text to 'Show'
    }
});
icon4.addEventListener("click", function () {
    if (sec4.style.display === "none") {
        sec4.style.display = "block";
        icon4.textContent = "Hide";
    }
    else {
        sec4.style.display = "none";
        icon4.textContent = "Show"; // Change button text to 'Show'
    }
});
// Function to download section content as a text file
var downloadSectionContent = function () {
    // Get the content of the section you want to download
    var sectionElements = document.getElementsByClassName('resume');
    // Check if the collection contains at least one element
    if (sectionElements.length > 0) {
        var sectionElement = sectionElements[0]; // Assuming you want the first element
        // Get the inner text of the section element
        var sectionContent = sectionElement.innerText;
        // Create a Blob with the content
        var blob = new Blob([sectionContent], { type: 'text/plain' });
        // Create a temporary anchor element
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        // Set the download attribute with a filename
        a.download = 'resume.txt';
        // Append the anchor to the body and trigger the download
        document.body.appendChild(a);
        a.click();
        // Remove the anchor from the DOM
        document.body.removeChild(a);
    }
    else {
        console.error('Section to download not found');
    }
};
// Add event listener to the download button
var downloadButton = document.getElementById('downloadBtn');
if (downloadButton) {
    downloadButton.addEventListener('click', downloadSectionContent);
}
