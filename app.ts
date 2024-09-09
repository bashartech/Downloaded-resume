let education = document.querySelector(".education")
let formCheck = document.getElementById("resumeForm") as HTMLFormElement;

let icon = document.querySelector(".education span img") as HTMLElement
let sec1 = document.querySelector(".sec1") as HTMLElement
let resume = document.querySelector(".resume") as HTMLElement
let form = document.querySelector(".form") as HTMLElement

let skills = document.querySelector(".skills")
let icon2 = document.querySelector(".skills span img") as HTMLElement
let sec2 = document.querySelector(".sec2") as HTMLElement

let contact = document.querySelector(".contact")
let icon4 = document.querySelector(".contact span img") as HTMLElement
let sec4 = document.querySelector(".sec4") as HTMLElement

let workExperience = document.querySelector(".workExperience")
let sec3 = document.querySelector(".sec3") as HTMLElement
let icon3 = document.querySelector(".workExperience span img") as HTMLElement

let button = document.querySelector(".btn")as HTMLButtonElement

let conName = document.getElementById("ConName") as HTMLInputElement
let resName = document.getElementById("resName") as HTMLElement

let conEdu = document.getElementById("ConEdu") as HTMLInputElement
let resEdu = document.getElementById("resEdu") as HTMLElement

let conSkills = document.getElementById("ConSkills") as HTMLInputElement
let resSkills = document.getElementById("resSkills") as HTMLElement

let conExp = document.getElementById("ConExp") as HTMLInputElement
let resExp = document.getElementById("resExp") as HTMLElement

let conGmail = document.getElementById("ConGmail") as HTMLInputElement
let resGmail = document.getElementById("resGmail") as HTMLElement

let downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement


button.addEventListener("click", (event)=>{
    event.preventDefault(); // Prevents the form from submitting and reloading the page
  // Scroll smoothly to the resume section
  resume.scrollIntoView({ behavior: "smooth" });
})

conName.addEventListener("keyup",()=>{
    let formName = conName.value
    resName.textContent = formName  
})

conEdu.addEventListener("keyup",()=>{
    let formEdu = conEdu.value
    resEdu.textContent = formEdu  
})

conSkills.addEventListener("keyup",()=>{
    let formSkills = conSkills.value
    resSkills.textContent = formSkills  
})

conGmail.addEventListener("keyup",()=>{
    let formGmail = conGmail.value
    resGmail.textContent = formGmail  
})

conExp.addEventListener("keyup",()=>{
    let formExp = conExp.value
    resExp.textContent = formExp  
})



icon.addEventListener("click",()=>{
    if(sec1.style.display === "none"){
        sec1.style.display = "block"
        icon.textContent = "Hide"
    }else {
        sec1.style.display = "none";
        icon.textContent = "Show"; // Change button text to 'Show'

    }
}
)
icon2.addEventListener("click",()=>{
    if(sec2.style.display === "none"){
        sec2.style.display = "block"
        icon2.textContent = "Hide"
    }else {
        sec2.style.display = "none";
        icon2.textContent = "Show"; // Change button text to 'Show'

    }
}
)
icon3.addEventListener("click",()=>{
    if(sec3.style.display === "none"){
        sec3.style.display = "block"
        icon3.textContent = "Hide"
    }else {
        sec3.style.display = "none";
        icon3.textContent = "Show"; // Change button text to 'Show'

    }
}
)
icon4.addEventListener("click",()=>{
    if(sec4.style.display === "none"){
        sec4.style.display = "block"
        icon4.textContent = "Hide"
    }else {
        sec4.style.display = "none";
        icon4.textContent = "Show"; // Change button text to 'Show'

    }
}
)

// Function to download section content as a text file
const downloadSectionContent = (): void => {
    // Get the content of the section you want to download
    const sectionElements = document.getElementsByClassName('resume');
  
    // Check if the collection contains at least one element
    if (sectionElements.length > 0) {
      const sectionElement = sectionElements[0] as HTMLElement; // Assuming you want the first element
  
      // Get the inner text of the section element
      const sectionContent: string = sectionElement.innerText;
  
      // Create a Blob with the content
      const blob = new Blob([sectionContent], { type: 'text/plain' });
  
      // Create a temporary anchor element
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
  
      // Set the download attribute with a filename
      a.download = 'resume.txt';
  
      // Append the anchor to the body and trigger the download
      document.body.appendChild(a);
      a.click();
  
      // Remove the anchor from the DOM
      document.body.removeChild(a);
    } else {
      console.error('Section to download not found');
    }
  };
  
  // Add event listener to the download button
  const downloadButton = document.getElementById('downloadBtn');
  if (downloadButton) {
    downloadButton.addEventListener('click', downloadSectionContent);
  }
  