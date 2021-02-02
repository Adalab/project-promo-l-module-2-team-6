'use strict';

const inputsTextConfig = [{
        inputClass: '.js-input-name',
        previewClass: '.js-preview-name',
        defaultValue: 'Greta Thunberg',
        prevewPrefix: '',
        previewElementAttribute: 'innerHTML'
    },
    {
        inputClass: '.js-input-job',
        previewClass: '.js-preview-job',
        defaultValue: 'Activista',
        prevewPrefix: '',
        previewElementAttribute: 'innerHTML'
    },
    {
        inputClass: '.js-input-email',
        previewClass: '.js-preview-email',
        defaultValue: '',
        previewPrefix: '',
        previewElementAttribute: 'href'
    },
    {
        inputClass: '.js-input-phone',
        previewClass: '.js-preview-phone',
        defaultValue: '',
        previewPrefix: '',
        previewElementAttribute: 'href'
    },
    {
        inputClass: '.js-input-linkedin',
        previewClass: '.js-preview-linkedin',
        defaultValue: '',
        previewPrefix: 'https://www.linkedin.com/in/',
        previewElementAttribute: 'href'
    },
    {
        inputClass: '.js-input-github',
        previewClass: '.js-preview-github',
        defaultValue: '',
        previewPrefix: 'https://www.github.com/',
        previewElementAttribute: 'href'
    }
];

function updateAllInputs() {
    for (const inputTextConfig of inputsTextConfig) {

        const inputElement = document.querySelector(inputTextConfig.inputClass);
        const previewElement = document.querySelector(inputTextConfig.previewClass);
        const defaultElement = document.querySelector(inputTextConfig.defaultValue);
        const previewPrefixElement = document.querySelector(inputTextConfig.previewPrefix);
        const attributeElement = document.querySelector(inputTextConfig.previewElementAttribute);

        let newValue = inputElement.value;

        if (inputTextConfig.previewElementAttribute === 'innerHTML') {
            if (inputElement.value === '') {
                newValue = inputTextConfig.defaultValue;
            } else {
                newValue = inputElement.value;
            }
            previewElement.innerHTML = newValue;
        } else if (inputTextConfig.previewElementAttribute === 'href') {
            if (inputElement.value === '') {
                newValue = '#';
            } else {
                newValue = newValue.replace(inputTextConfig.cardPrefix, '');
                newValue = inputTextConfig.cardPrefix + newValue;
            }
            previewElement.href = newValue;
        }

    }
}

const inputTextElements = document.querySelectorAll('.js-input-text');
    for (const inputTextElement of inputTextElements) {
        inputTextElement.addEventListener('keyup', updateAllInputs);
    }

    updateAllInputs();