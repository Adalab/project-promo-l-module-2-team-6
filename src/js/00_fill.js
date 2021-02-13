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
    previewPrefix: "",
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
}

const inputTextElements = document.querySelectorAll(".js-input-text");
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener("keyup", updateAllInputs);
}
