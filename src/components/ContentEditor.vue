<template>
    <div class="content-editor">
        <div class="item">Basics</div>
        <div class="item">Social</div>
        <div class="item">Intro</div>
        <div class="item">Skills</div>
        <div class="item">Achievements</div>
        <div class="item">Conferences</div>
        <div class="item">Courses</div>
        <div class="item">Soft Skills</div>
        <div class="item">Technical Skills</div>
        <div class="item">Education</div>
        <div class="item">Volunteer Experience</div>
        <div class="item">Publications</div>
        <div class="item">References</div>
        <div class="item">Languages</div>
        <div class="item">Interests</div>
        <div class="item">Certifications</div>
        <div class="item">Awards</div>
        <div class="item">Work Experience</div>
        <div class="item">Projects</div>
    </div>
</template>

<script>
export default {
    name: "ContentEditor",
    data() {
        return {
            contentEditorSelected: null,
            data: {
                name: "Sagnik Paul",
                email: "sagnikpaul2882@gmail.com",
                number: "+91-9674658599",
                country: "India",
                city: "Kolkata",
                address: "40, Sisir Bagan Road,\nBehala",
                website: "www.sagnikpaul.com",
                social: {
                    twitter: "https://twitter.com",
                    linkedin: "https://twitter.com",
                    facebook: "https://twitter.com",
                    github: "https://twitter.com",
                    stackoverflow: "https://twitter.com",
                    instagram: "https://twitter.com",
                    medium: "https://twitter.com",
                    quora: "https://twitter.com"
                },
                intro: {
                    title: "Professional Title",
                    summary: "Short and engaging stuff about yourself"
                },
                skills: [
                    {
                        name: "HTML"
                    }, {
                        name: "CSS"
                    }, {
                        name: "Javascript"
                    }, {
                        name: "jQuery"
                    }
                ],
                achievements: [
                    { 
                        name: "Achievement 1",
                        link: null,
                        description: "Some random description",
                        dateFrom: null,
                        dateTo: null
                    }, { 
                        name: "Achievement 2",
                        link: "https://achievement.com",
                        description: "Some description",
                        dateFrom: "07/2018",
                        dateTo: "09/2109"
                    }, { 
                        name: "Achievement 3",
                        link: null,
                        description: null,
                        dateFrom: "09/2019",
                        dateTo: null
                    }
                ],
                conferences: [
                    {
                        name: "Conference 1",
                        link: null,
                        description: "Some random description",
                        dateFrom: null,
                        dateTo: null
                    }, { 
                        name: "Conference 2",
                        link: "https://achievement.com",
                        description: "Some description",
                        dateFrom: "07/2018",
                        dateTo: "09/2109"
                    }, { 
                        name: "Conference 3",
                        link: null,
                        description: null,
                        dateFrom: "09/2019",
                        dateTo: null
                    }
                ],
                courses: [
                    {
                        name: "Course 1",
                        link: null,
                        description: "Some random description",
                        dateFrom: null,
                        dateTo: null
                    }, { 
                        name: "Course 2",
                        link: "https://achievement.com",
                        description: "Some description",
                        dateFrom: "07/2018",
                        dateTo: "09/2109"
                    }, { 
                        name: "Course 3",
                        link: null,
                        description: null,
                        dateFrom: "09/2019",
                        dateTo: null
                    }
                ],
                softSkills: [
                    {
                        name: "HTML"
                    }, {
                        name: "CSS"
                    }, {
                        name: "Javascript"
                    }, {
                        name: "jQuery"
                    }
                ],
                technicalSkills: [
                    {
                        name: "HTML"
                    }, {
                        name: "CSS"
                    }, {
                        name: "Javascript"
                    }, {
                        name: "jQuery"
                    }
                ],
                education: [
                    {
                        program: "12th",
                        institute: "VMS",
                        dateFrom: "01/01/2019",
                        dateTo: "01/01/2019",
                        place: "Kolkara",
                        course: "12th"
                    }, {
                        program: "12th",
                        institute: "VMS",
                        dateFrom: "01/01/2019",
                        dateTo: "01/01/2019",
                        place: "Kolkara",
                        course: "12th"
                    }, {
                        program: "12th",
                        institute: "VMS",
                        dateFrom: "01/01/2019",
                        dateTo: "01/01/2019",
                        place: "Kolkara",
                        course: "12th"
                    }
                ],
                volunteer: [
                    {
                        title: "Some title",
                        organization: "some organization",
                        dateFrom: "01/01/2019",
                        dateTo: "01/01/2019",
                        place: "Kolkata",
                        description: "Some random description"
                    }, {
                        title: "Some title",
                        organization: "some organization",
                        dateFrom: "01/01/2019",
                        dateTo: "01/01/2019",
                        place: "Kolkata",
                        description: "Some random description"
                    }, {
                        title: "Some title",
                        organization: "some organization",
                        dateFrom: "01/01/2019",
                        dateTo: "01/01/2019",
                        place: "Kolkata",
                        description: "Some random description"
                    }
                ],
                publications: [
                    {
                        type: null,
                        title: "Publication 1",
                        authors: "A, B, C",
                        date: "01/01/2019",
                        description: "some random description"
                    }, {
                        type: null,
                        title: "Publication 2",
                        authors: "A, B, C",
                        date: "01/01/2019",
                        description: "some random description"
                    }
                ],
                reference: [
                    {
                        name: "Dr N. K. Rout",
                        position: "Some position",
                        email: "email@email.com",
                        number: "9674658599"
                    }, {
                        name: "Dr N. K. Rout",
                        position: "Some position 1",
                        email: "email@email.com",
                        number: "9674658599"
                    }, {
                        name: "Dr N. K. Rout",
                        position: "Some position 2",
                        email: "email@email.com",
                        number: "9674658599"
                    }
                ],
                language: [
                    {
                        name: "HTML"
                    }, {
                        name: "CSS"
                    }, {
                        name: "Javascript"
                    }, {
                        name: "jQuery"
                    }
                ],
                interests: [
                    {
                        name: "HTML"
                    }, {
                        name: "CSS"
                    }, {
                        name: "Javascript"
                    }, {
                        name: "jQuery"
                    }
                ],
                certificates: [
                    {
                        link: "somelink.com",
                        date: "01/01/2018",
                        description: "Some certificate"
                    }, {
                        link: "somelink1.com",
                        date: "01/01/2018",
                        description: "Some certificate"
                    }, {
                        link: "somelink2.com",
                        date: "01/01/2018",
                        description: "Some certificate"
                    }
                ],
                awards: [
                    {
                        name: "Award 1",
                        date: "01/01/2018",
                        instituteName: "KIIT",
                        description: "some award"
                    }, {
                        name: "Award 2",
                        date: "01/01/2018",
                        instituteName: "KIIT",
                        description: "some award"
                    }, {
                        name: "Award 3",
                        date: "01/01/2018",
                        instituteName: "KIIT",
                        description: "some award"
                    }
                ],
                work: [
                    {
                        title: "Product Developer",
                        companyName: "NowFloats",
                        dateFrom: "01/01/2018",
                        dateTo: "01/01/2019",
                        location: "Hyderabad",
                        description: "Some random description",
                        accomplishments: null,
                    }, {
                        title: "Product Developer",
                        companyName: "NowFloats",
                        dateFrom: "01/01/2018",
                        dateTo: "01/01/2019",
                        location: "Hyderabad",
                        description: "Some random description",
                        accomplishments: null,
                    }, {
                        title: "Product Developer",
                        companyName: "NowFloats",
                        dateFrom: "01/01/2018",
                        dateTo: "01/01/2019",
                        location: "Hyderabad",
                        description: "Some random description",
                        accomplishments: null,
                    }
                ],
                projects: [
                    {
                        name: "project1",
                        link: "somelink.com",
                        dateFrom: "01/01/2018",
                        dateTo: "01/01/2018",
                        description: "some random description"
                    }, {
                        name: "project1",
                        link: "somelink.com",
                        dateFrom: "01/01/2018",
                        dateTo: "01/01/2018",
                        description: "some random description"
                    }, {
                        name: "project1",
                        link: "somelink.com",
                        dateFrom: "01/01/2018",
                        dateTo: "01/01/2018",
                        description: "some random description"
                    }
                ]
            }
        }
            
    }
}
</script>

<style lang="scss">
.content-editor {
    position: fixed;
    width: 90%;
    top: 50%;
    transform: translateY(-50%);
    left: 120px;
    height: auto;
    max-width: 300px;
    background: #303d46;
    border: 2px solid #1886d1;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;

    .item {
        color: #1886d1;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 0;
        border-radius: 4px;
        transition: .4s;
        border: 2px solid transparent;
        cursor: pointer;

        &:hover {
            border: 2px solid;
        }

        &.selected {
            background: #1886d1;
            color: #303d46;
        }
    }
}
</style>
