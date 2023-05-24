//About section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "I am a 21 year old aspiring full stack developer based in Cape Town, who is passionate about coding and infomation communication technology as a whole. Out of school, you will find me watching or playing cricket, reading books or spendig some quality time with my family. My soft skills include critical and problem solving skills, communication, teamwork, decision-making, adaptability and time management skills.",
    "I am a 21 year old aspiring full stack developer based in Cape Town, who is passionate about coding and infomation communication technology as a whole. Out of school, you will find me watching or playing cricket, reading books or spendig some quality time with my family. My soft skills include critical and problem solving skills, communication, teamwork, decision-making, adaptability and time management skills"
]
// Loop through the content
aboutContents.forEach( (content)=>{
    about.innerHTML+=`
    <p class = 'lead' > ${content} </p>
    `
} )

// Education
let education = [
    {
        id: 1,
        year: 2020,
        description: 'I got my certificates on Data science',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2019,
        description: 'I got my certificates on Advanced to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I got my certificates on Intro to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2015,
        description: 'I got my certificate on Intro to Android Developer',
        place: 'Study Jams',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2014,
        description: 'I got my diploma on Software Engineering',
        place: 'Tshwane University of Technology',
        type: 'Diploma',
        certificate: ''
    },
    {
        id: 6,
        year: 2005,
        description: 'Completed my course on PC Engineering',
        place: 'Havatech',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 7,
        year: 2000,
        description: 'Grade 12',
        place: '',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})