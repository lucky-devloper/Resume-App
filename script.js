// upload image code

let userdata = []

// name, surname, DOB
let nameE1 = document.querySelector(".Name")
let surname = document.querySelector(".surname")
let dateofbirth = document.querySelector(".dob")

// gender location email and contact
let gender = document.querySelector(".gender")
let userlocation = document.querySelector(".location")
let email = document.querySelector(".useremail")
let mobile = document.querySelector(".usernumber")
// 10th details
let school = document.querySelector(".school")
let board10th = document.querySelector(".board-ten")
let percent10th = document.querySelector(".percent-ten")
let interPassingYear = document.querySelector(".inter-passing-year")
// 12th details
let school12th = document.querySelector(".school12th")
let board12th = document.querySelector(".board-inter")
let percent12th = document.querySelector(".percent-inter")
let IntermediatePassingYear = document.querySelector(".intermediate-passing-year")
// graduation
let coursename = document.querySelector(".coursename")
let university = document.querySelector(".university")
let universitypercent = document.querySelector(".universitypercentage")
let graduationPassingYear = document.querySelector(".graduation-passing-year")
// address
let village = document.querySelector(".village")
let house = document.querySelector(".house")
let pincode = document.querySelector(".pincode")
let state = document.querySelector(".state")
//Projects details
let projectname = document.querySelector(".projectname")
let startmonth = document.querySelector(".startmonth")
let endmonth = document.querySelector(".endmonth")
let projectbrif = document.querySelector(".projectbrif")
let useSkill = document.querySelector(".useskill")
// Skill and Language
let myskill = document.querySelector(".myskill")
let language = document.querySelector(".language")
// ********************************************** select elements over here *********************

const inputContainer = document.querySelector(".form-container")
const resumeContainer = document.querySelector(".resume-container")

const btnE1 = document.querySelector(".formbtn")
const resumebtn = document.querySelector(".resumebtn")

// form switch button
btnE1.addEventListener('click', (e) => {
    e.preventDefault()
    resumeContainer.classList.remove('hide')
    inputContainer.classList.add('hide')
    userinputval()
})

resumebtn.addEventListener('click', (e) => {
    e.preventDefault()
    resumeContainer.classList.add('hide')
    inputContainer.classList.remove('hide')
})

function userinputval() {
    const inputdata = {
        name: nameE1.value,
        surname: surname.value,
        DOB: dateofbirth.value,
        gender: gender.value,
        location: userlocation.value,
        email: email.value,
        mobile: mobile.value,
        school: school.value,
        boardX: board10th.value,
        percentageX: percent10th.value,
        passingyearX: interPassingYear.value,
        schoolXII: school12th.value,
        boardXII: board12th.value,
        percentageXII: percent12th.value,
        passingyearXII: IntermediatePassingYear.value,
        course:coursename.value,
        university:university.value,
        universitypercent:universitypercent.value,
        graduationPassingYear: graduationPassingYear.value,
        userSkill:myskill.value,
        language:language.value
    }

    userdata.push(inputdata)
    console.log(userdata);

    addresumeData(userdata)
}

// Project Switch button
const addproject = document.querySelector(".add-project") 
const projectContainer = document.querySelector(".Project") 

const addbtn = document.querySelector(".addbtn")
const savebtn = document.querySelector(".savebtn")

addbtn.addEventListener('click', (e)=>{
    e.preventDefault()
    projectContainer.classList.remove('hide')
    addproject.classList.add('hide')
})

savebtn.addEventListener('click', (e)=>{
    e.preventDefault()
    projectContainer.classList.add('hide')
    addproject.classList.remove('hide')
    addprojectdata()
    projectname.value = ""
    startmonth.value = ""
    endmonth.value = ""
    projectbrif.value = ""
    useSkill.value = ""
})
let projectdata = []
function addprojectdata(){
    const projectobj = {
        projectname:projectname.value,
        Projectstart:startmonth.value,
        Projectend:endmonth.value,
        description:projectbrif.value,
        usetechnology:useSkill.value
    }
    projectdata.push(projectobj)
    userdata.projectdata = projectdata
}

let resumename = document.querySelector(".resume-name")
let personaldetail = document.querySelector(".data")
let course = document.querySelector(".course")
let ProjectAlldetail = document.querySelector(".Detail-about-project")
let knowledge = document.querySelector(".knowledge")

function addresumeData() {
    userdata.forEach((alldata) => {
        resumename.innerHTML = `<h1 class="text-4xl">${alldata.name} ${alldata.surname}</h1>
        <div class="flex gap-6 mt-4">
          <p class="text-[20px]"><i class="text-amber-700 fa-solid fa-phone"></i> ${alldata.mobile}</p>
          <a class="text-[20px]" href="#"><i class="text-amber-700 fa-solid fa-envelope"></i>
            ${alldata.email}</a>
        </div>`

        personaldetail.innerHTML = `<p>${alldata.location}</p> <p>${alldata.DOB}</p> <p>${alldata.gender}</p>`

        course.innerHTML = `<p class="tracking-widest">${alldata.course} <br> ${alldata.university}, with score ${alldata.universitypercent}% in ${alldata.graduationPassingYear}</p>
        <p class="tracking-widest">${alldata.schoolXII} ${alldata.boardXII} <br> with ${alldata.percentageXII}% marks in ${alldata.passingyearXII}</p>
        <p class="tracking-widest">${alldata.school} ${alldata.boardX} <br> with ${alldata.percentageX}% marks in ${alldata.passingyearX}</p>`

        userdata.projectdata.map((allproject)=>{
            ProjectAlldetail.innerHTML += `<h3 class="font-bold tracking-wider">${allproject.projectname} <span class="font-normal">( Duration ${allproject.Projectstart} - ${allproject.Projectend} )<br>${allproject.description}<br>${allproject.usetechnology}</span></h3>`
        })

        knowledge.innerHTML = `<p class="tracking-widest">${alldata.userSkill}</p>
        <p class="tracking-widest">${alldata.language}</p>`
    })
}

const downloadbtn = document.querySelector(".download") 
window.onload = function(){
    document.querySelector("#downloadPDF").addEventListener('click', ()=>{
        const resumepdf = document.querySelector("#resume-template")
        resumebtn.classList.add('hide')
        downloadbtn.classList.add('hide')
        var opt = {
            margin:       0.3,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
        html2pdf().from(resumepdf).set(opt).save();
    })
}


