const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataAchievements = require('./dataAchievementsModel');
const dataAwards = require('./dataAwardsModel');
const dataBasics = require('./dataBasicsModel');
const dataCertificates = require('./dataCertificatesModel');
const dataConferences = require('./dataConferencesModel');
const dataCourses = require('./dataCoursesModel');
const dataEducation = require('./dataEducationModel');
const dataHeader = require('./dataHeaderModel');
const dataInterests = require('./dataInterestsModel');
const dataLanguages = require('./dataLanguagesModel');
const dataProjects = require('./dataProjectsModel');
const dataPublications = require('./dataPublicationsModel');
const dataReferences = require('./dataReferencesModel');
const dataSkills = require('./dataSkillsModel');
const dataSocial = require('./dataSocialModel');
const dataSoftSkills = require('./dataSoftSkillsModel');
const dataTechnicalSkills = require('./dataTechnicalSkillsModel');
const dataVolunteer = require('./dataVolunteerModel');
const dataWork = require('./dataWorkModel');

const dataSchema = {
    basics: dataBasics.dataBasics,
    achievements: [dataAchievements.dataAchievements],
    awards: [dataAwards.dataAwards],
    certificates: [dataCertificates.dataCertificates],
    conferences: [dataConferences.dataConferences],
    courses: [dataCourses.dataCourses],
    education: [dataEducation.dataEducation],
    header: dataHeader.dataHeader,
    interests: [dataInterests.dataInterests],
    languages: [dataLanguages.dataLanguages],
    projects: [dataProjects.dataProjects],
    publications: [dataPublications.dataPublications],
    references: [dataReferences.dataReferences],
    skills: [dataSkills.dataSkills],
    socials: dataSocial.dataSocial,
    softSkills: [dataSoftSkills.dataSoftSkills],
    technicalSkills: [dataTechnicalSkills.dataTechnicalSkills],
    volunteer: [dataVolunteer.dataVolunteer],
    work: [dataWork.dataWork]
};

exports.data = dataSchema;