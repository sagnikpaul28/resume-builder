<template>
    <div class="content-editor-details">
        <p class="go-back">&#8678; Back</p>

        <!-- Basics -->
        <div v-if="showEditDetails === 'basics'">
            <div class="input-containers">
                <label>Name: </label>
                <input type="text" v-model="data.name" />
            </div>
            <div class="input-containers">
                <label>Email: </label>
                <input type="text" v-model="data.email" />
            </div>
            <div class="input-containers">
                <label>Number: </label>
                <input type="text" v-model="data.number" />
            </div>
            <div class="input-containers">
                <label>Country: </label>
                <input type="text" v-model="data.country" />
            </div>
            <div class="input-containers">
                <label>City: </label>
                <input type="text" v-model="data.city" />
            </div>
            <div class="input-containers">
                <label>Address: </label>
                <textarea rows="3" v-model="data.address" />
            </div>
            <div class="input-containers">
                <label>Website: </label>
                <input type="text" v-model="data.website" />
            </div>
        </div>

        <!-- Social -->
        <div v-if="showEditDetails === 'social'">
            <div class="input-containers">
                <label>Facebook: </label>
                <input type="text" v-model="data.social.facebook" />
            </div>
            <div class="input-containers">
                <label>Twitter: </label>
                <input type="text" v-model="data.social.twitter" />
            </div>
            <div class="input-containers">
                <label>LinkedIn: </label>
                <input type="text" v-model="data.social.linkedin" />
            </div>
            <div class="input-containers">
                <label>Github: </label>
                <input type="text" v-model="data.social.github" />
            </div>
            <div class="input-containers">
                <label>Stack Overflow: </label>
                <input type="text" v-model="data.social.stackoverflow" />
            </div>
            <div class="input-containers">
                <label>Instagram: </label>
                <textarea rows="3" v-model="data.social.instagram" />
            </div>
            <div class="input-containers">
                <label>Medium: </label>
                <input type="text" v-model="data.social.medium" />
            </div>
            <div class="input-containers">
                <label>Quora: </label>
                <input type="text" v-model="data.social.quora" />
            </div>
        </div>

        <!-- Header -->
        <div v-if="showEditDetails === 'header'">
            <div class="input-containers">
                <label>Title: </label>
                <input type="text" v-model="data.intro.title" />
            </div>
            <div class="input-containers">
                <label>Summary: </label>
                <textarea rows="3" v-model="data.intro.summary" />
            </div>
        </div>

        <!-- Skills -->
        <div v-if="showEditDetails === 'skills'">
            <div class="items" v-for="item in data.skills" :key="item.name">
                {{ item.name }}
                <span class="close">x</span>
            </div>
            <div class="input-containers">
                <label>Add Skills: </label>
                <input type="text" v-model="newFields.skills" class="add-item" />
                <button type="button" @click="onSkillSubmit('skills')">Save</button>
            </div>
        </div>

        <!-- Achievements -->

        <!-- Conferences -->

        <!-- Courses -->

        <!-- Soft Skills -->
        <div v-if="showEditDetails === 'softSkills'">
            <div class="items" v-for="item in data.softSkills" :key="item.name">
                {{ item.name }}
                <span class="close">x</span>
            </div>
            <div class="input-containers">
                <label>Add Soft Skills: </label>
                <input type="text" v-model="newFields.softSkills" class="add-item" />
                <button type="button" @click="onSkillSubmit('softSkills')">Save</button>
            </div>
        </div>

        <!-- Technical Skills -->
        <div v-if="showEditDetails === 'technicalSkills'">
            <div class="items" v-for="item in data.technicalSkills" :key="item.name">
                {{ item.name }}
                <span class="close">x</span>
            </div>
            <div class="input-containers">
                <label>Add Technical Skills: </label>
                <input type="text" v-model="newFields.technicalSkills" class="add-item" />
                <button type="button" @click="onSkillSubmit('technicalSkills')">Save</button>
            </div>
        </div>

        <!-- Education -->

        <!-- Volunteer -->

        <!-- Publications -->

        <!-- References -->

        <!-- Languages -->
        <div v-if="showEditDetails === 'languages'">
            <div class="items" v-for="item in data.languages" :key="item.name">
                {{ item.name }}
                <span class="close">x</span>
            </div>
            <div class="input-containers">
                <label>Add Languages: </label>
                <input type="text" v-model="newFields.languages" class="add-item" />
                <button type="button" @click="onSkillSubmit('languages')">Save</button>
            </div>
        </div>

        <!-- Interests -->
        <div v-if="showEditDetails === 'interests'">
            <div class="items" v-for="item in data.interests" :key="item.name">
                {{ item.name }}
                <span class="close">x</span>
            </div>
            <div class="input-containers">
                <label>Add Interests: </label>
                <input type="text" v-model="newFields.interests" class="add-item" />
                <button type="button" @click="onSkillSubmit('interests')">Save</button>
            </div>
        </div>

        <!-- Certificates -->

        <!-- Awards -->

        <!-- Work -->

        <!-- Projects -->
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetails",
    data() {
        return {
            showEditDetails: 'languages',
            newFields: {
                skills: null,
                softSkills: null,
                technicalSkills: null, 
                languages: null,
                interests: null
            },
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
                references: [
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
                languages: [
                    {
                        name: "A"
                    }, {
                        name: "B"
                    }, {
                        name: "C"
                    }, {
                        name: "D"
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
                        name: "Name",
                        link: "somelink.com",
                        date: "01/01/2018",
                        description: "Some certificate"
                    }, {
                        name: "Name",
                        link: "somelink1.com",
                        date: "01/01/2018",
                        description: "Some certificate"
                    }, {
                        name: "Name",
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
    }, 
    methods: {
        onSkillSubmit(field) {
            this.data[field].push({
                name: this.newFields[field]
            });
            this.newFields[field] = null;
        }
    }
}
</script>

<style lang="scss">
.content-editor-details {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: auto;
    width: 400px;
    background: #303d46;
    border: 2px solid #1886d1;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    text-align: left;
    flex-direction: column;

    .go-back {
        color: #1886d1;
        font-weight: bold;
        margin: 0 0 10px;
        text-align: left;
        cursor: pointer;
    }

    > div {
        .input-containers {
            padding: 0;

            label {
                display: block;
                text-align: left;
                margin-bottom: 2px;
                margin-top: 10px;
                color: #1886d1;
            }

            input, textarea {
                width: calc(100% - 20px);
                color: #1886d1;
                background: transparent;
                border: 1px solid;
                padding: 8px 10px;
                font-size: 1rem;
                border-radius: 4px;

                &.add-item {
                    width: calc(100% - 90px);
                    border-radius: 4px 0 0 4px;
                    border-right: 0;
                }
            }

            button {
                background: transparent;
                border: 1px solid;
                color: #1886d1;
                padding: 8px 15px;
                font-size: 1rem;
                border-radius: 0 4px 4px 0;
                cursor: pointer;
                transition: .3s;

                &:hover {
                    background: #1886d1;
                    color: #303d46;
                    border-color: #1886d1;
                }
            }
        }

        .items {
            display: inline-block;
            position: relative;
            color: #1886d1;
            padding: 6px 12px;
            border: 1px solid;
            border-radius: 4px;
            margin: 7px;

            .close {
                position: absolute;
                top: -8px;
                right: -10px;
                line-height: 18px;
                font-size: 1rem;
                border: 1px solid;
                background: #303d46;
                border-radius: 50%;
                height: 20px;
                width: 20px;
                text-align: center;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
}
</style>
