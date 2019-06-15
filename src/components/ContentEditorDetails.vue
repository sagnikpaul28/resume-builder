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
                <button type="button" @click="onFieldSubmit('skills')">Save</button>
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
                <button type="button" @click="onFieldSubmit('softSkills')">Save</button>
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
                <button type="button" @click="onFieldSubmit('technicalSkills')">Save</button>
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
                <button type="button" @click="onFieldSubmit('languages')">Save</button>
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
                <button type="button" @click="onFieldSubmit('interests')">Save</button>
            </div>
        </div>

        <!-- Certificates -->

        <!-- Awards -->

        <!-- Work -->
        <div v-if="showEditDetails === 'work'">
            <div class="items accordion" v-for="item in data.work" :key="item._id">
                <div class="item-accordion-title" @click="expandAccordion('work', item._id)">{{item.title}}, {{item.companyName}}</div>
                <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
                <div class="expanded-content" :class="{expanded: item.isExpanded}">
                    <div class="input-containers">
                        <label>Title:</label>
                        <input type="text" v-model="editFields.work.title" />
                    </div>
                    <div class="input-containers">
                        <label>Company:</label>
                        <input type="text" v-model="editFields.work.companyName" />
                    </div>
                    <div class="input-containers">
                        <label>Location:</label>
                        <input type="text" v-model="editFields.work.location" />
                    </div>
                    <div class="input-containers">
                        <label>Description: </label>
                        <textarea rows="4" v-model="editFields.work.description" />
                    </div>
                    <div class="input-containers">
                        <label>Date From:</label>
                        <input type="text" v-model="editFields.work.dateFrom" />
                    </div>
                    <div class="input-containers">
                        <label>Date To:</label>
                        <input type="text" v-model="editFields.work.dateTo" />
                    </div>
                    <div class="input-containers">
                        <label>Accomplishments:</label>
                        <input type="text" v-model="editFields.work.accomplishments" />
                    </div>
                </div>
            </div>
            <div class="items accordion add-project">
                Add Work Experience
                <div class="input-containers">
                    <label>Title:</label>
                    <input type="text" v-model="newFields.work.title" />
                </div>
                <div class="input-containers">
                    <label>Company:</label>
                    <input type="text" v-model="newFields.work.companyName" />
                </div>
                <div class="input-containers">
                    <label>Location:</label>
                    <input type="text" v-model="newFields.work.location" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="newFields.work.description" />
                </div>
                <div class="input-containers">
                    <label>Date From:</label>
                    <input type="text" v-model="newFields.work.dateFrom" />
                </div>
                <div class="input-containers">
                    <label>Date To:</label>
                    <input type="text" v-model="newFields.work.dateTo" />
                </div>
                <div class="input-containers">
                    <label>Accomplishments:</label>
                    <input type="text" v-model="newFields.work.accomplishments" />
                </div>
                <button class="save" @click="onFieldSubmit('work')">Save</button>
            </div>
        </div>

        <!-- Projects -->
        <div v-if="showEditDetails === 'projects'">
            <div class="items accordion" v-for="item in data.projects" :key="item._id">
                <div class="item-accordion-title" @click="expandAccordion('projects', item._id)">{{item.name}}</div>
                <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
                <div class="expanded-content" :class="{expanded: item.isExpanded}">
                    <div class="input-containers">
                        <label>Name:</label>
                        <input type="text" v-model="editFields.projects.name" />
                    </div>
                    <div class="input-containers">
                        <label>Link:</label>
                        <input type="text" v-model="editFields.projects.link" />
                    </div>
                    <div class="input-containers">
                        <label>Description: </label>
                        <textarea rows="4" v-model="editFields.projects.description" />
                    </div>
                    <div class="input-containers">
                        <label>Date From:</label>
                        <input type="text" v-model="editFields.projects.dateFrom" />
                    </div>
                    <div class="input-containers">
                        <label>Date To:</label>
                        <input type="text" v-model="editFields.projects.dateTo" />
                    </div>
                </div>
            </div>
            <div class="items accordion add-project">
                Add Project
                <div class="input-containers">
                    <label>Name:</label>
                    <input type="text" v-model="newFields.projects.name" />
                </div>
                <div class="input-containers">
                    <label>Link:</label>
                    <input type="text" v-model="newFields.projects.link" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="newFields.projects.description" />
                </div>
                <div class="input-containers">
                    <label>Date From:</label>
                    <input type="text" v-model="newFields.projects.dateFrom" />
                </div>
                <div class="input-containers">
                    <label>Date To:</label>
                    <input type="text" v-model="newFields.projects.dateTo" />
                </div>
                <button class="save" @click="onFieldSubmit('projects')">Save</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ContentEditorDetails",
    data() {
        return {
            showEditDetails: 'work',
            newFields: {
                skills: '',
                softSkills: '',
                technicalSkills: '', 
                languages: '',
                interests: '',
                projects: {
                    name: '',
                    link: '',
                    dateFrom: '',
                    dateTo: '',
                    description: ''
                },
                work: {
                    title: '',
                    companyName: '',
                    dateTo: '',
                    dateTo: '',
                    location: '',
                    description: '',
                    accomplishments: ''
                }
            },
            editFields: {
                projects: {
                    name: '',
                    link: '',
                    dateFrom: '',
                    dateTo: '',
                    description: ''
                }, 
                work: {
                    title: '',
                    companyName: '',
                    dateTo: '',
                    dateTo: '',
                    location: '',
                    description: '',
                    accomplishments: ''
                }
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
                        _id: 1,
                        name: "project1",
                        link: "somelink.com",
                        dateFrom: "01/01/2018",
                        dateTo: "01/01/2018",
                        description: "some random description"
                    }, {
                        _id: 2,
                        name: "project2",
                        link: "somelink.com",
                        dateFrom: "01/01/2018",
                        dateTo: "01/01/2018",
                        description: "some random description"
                    }, {
                        _id: 3,
                        name: "project3",
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
        onFieldSubmit(field) {
            /*
            ==========================
            check if fields empty
            write common code for insertion
            ==========================
            */
            if (field === 'projects') {
                this.data[field].push({
                    name: this.newFields[field].name,
                    dateFrom: this.newFields[field].dateFrom,
                    dateTo: this.newFields[field].dateTo,
                    link: this.newFields[field].link,
                    description: this.newFields[field].description
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'work') {
                this.data[field].push({
                    title: this.newFields[field].title,
                    companyName: this.newFields[field].companyName,
                    dateFrom: this.newFields[field].dateFrom,
                    dateTo: this.newFields[field].dateTo,
                    location: this.newFields[field].location,
                    description: this.newFields[field].description,
                    accomplishments: this.newFields[field].accomplishments
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else {
                this.data[field].push({
                    name: this.newFields[field]
                });
                this.newFields[field] = null;
            }
        },
        expandAccordion(field, id) {
            this.data[field] = this.data[field].map(item => {
                if (item.isExpanded) {
                    delete item.isExpanded;
                }else if (item._id === id) {
                    item.isExpanded = true;
                    this.editFields[field] = {
                        name: item.name,
                        description: item.description,
                        link: item.link,
                        dateFrom: item.dateFrom,
                        dateTo: item.dateTo
                    }
                }
                return item;
            })
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
    max-height: 90%;
    overflow: scroll;
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

            &.accordion {
                display: block;
                margin: 10px 0;
                cursor: pointer;

                .save {
                    background: transparent;
                    color: #1886d1;
                    border: 1px solid #1886d1;
                    margin: 15px 0px 10px;
                    border-radius: 4px;
                    width: 100%;
                    padding: 8px 15px;
                    font-size: 1rem;
                    transition: .3s;

                    &:hover {
                        color: #303d46;
                        background: #1886d1;
                    }
                }

                .item-accordion-title {
                    position: relative;
                    z-index: 1;
                }

                .expand {
                    transform: none;
                    transition: .3s;
                    position: absolute;
                    right: 10px;
                    top: 7px;
                    z-index: 0;

                    &.expanded {
                        transform: rotate(90deg);
                    }
                }

                .expanded-content {
                    display: none;

                    &.expanded {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
