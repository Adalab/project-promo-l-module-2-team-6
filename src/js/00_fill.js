/* eslint-disable quotes */
'use strict';

let inputsTextConfig = [
  {
    inputClass: ".js-input-name",
    previewClass: ".js-preview-name",
    defaultValue: "Tree Huggers",
    prevewPrefix: "",
    previewElementAttribute: "innerHTML",
  },
  {
    inputClass: ".js-input-job",
    previewClass: ".js-preview-job",
    defaultValue: "Front-end developers",
    prevewPrefix: "",
    previewElementAttribute: "innerHTML",
  },
  {
    inputClass: ".js-input-email",
    previewClass: ".js-preview-email",
    defaultValue: "",
    previewPrefix: "mailto:",
    previewElementAttribute: "href",
  },
  {
    inputClass: ".js-input-phone",
    previewClass: ".js-preview-phone",
    defaultValue: "",
    previewPrefix: "tel:",
    previewElementAttribute: "href",
  },
  {
    inputClass: ".js-input-linkedin",
    previewClass: ".js-preview-linkedin",
    defaultValue: "",
    previewPrefix: "https://www.linkedin.com/in/",
    previewElementAttribute: "href",
  },
  {
    inputClass: ".js-input-github",
    previewClass: ".js-preview-github",
    defaultValue: "",
    previewPrefix: "https://www.github.com/",
    previewElementAttribute: "href",
  },
];

function updateAllInputs() {
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    const previewElement = document.querySelector(inputTextConfig.previewClass);
    const defaultElement = "";
    const previewPrefixElement = "";
    const attributeElement = document.querySelector(inputTextConfig.previewElementAttribute);

    let newValue = inputElement.value;

    if (inputTextConfig.previewElementAttribute === "innerHTML") {
      if (inputElement.value === "") {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }
      previewElement.innerHTML = newValue;
    } else if (inputTextConfig.previewElementAttribute === "href") {
      if (inputElement.value === "") {
        newValue = "#";

      } else {
        newValue = newValue.replace(inputTextConfig.previewPrefix, "");
        newValue = inputTextConfig.previewPrefix + newValue;
      }
      previewElement.href = newValue;
    }
  }
saveInLocalStorage();
showGithub();
showLinkedin();
showPhone();
showEmail();
}

const inputTextElements = document.querySelectorAll(".js-input-text");
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener("keyup", updateAllInputs);
}


const phoneIcon = document.querySelector('.js-phone');
const emailIcon = document.querySelector('.js-email');
const linkedinIcon = document.querySelector('.js-linkedin');
const githubIcon = document.querySelector('.js-github');

const phoneInput = document.querySelector('.js-input-phone');
const emailInput = document.querySelector('.js-input-email');
const linkedinInput = document.querySelector('.js-input-linkedin');
const githubInput = document.querySelector('.js-input-github');

const showPhone = () => phoneInput.value.length !== 0 ? phoneIcon.classList.remove('pale_icon') : phoneIcon.classList.add('pale_icon');
phoneInput.addEventListener('keyup', showPhone);

const showEmail = () => emailInput.value.length !== 0 ? emailIcon.classList.remove('pale_icon') : emailIcon.classList.add('pale_icon');
emailInput.addEventListener('keyup', showEmail);

const showLinkedin =  () => linkedinInput.value.length !== 0 ? linkedinIcon.classList.remove('pale_icon') : linkedinIcon.classList.add('pale_icon');
linkedinInput.addEventListener('keyup', showLinkedin);

const showGithub =  () => githubInput.value.length !== 0 ? githubIcon.classList.remove('pale_icon') : githubIcon.classList.add('pale_icon');
githubInput.addEventListener('keyup', showGithub);

showGithub();
showLinkedin();
showPhone();
showEmail();
