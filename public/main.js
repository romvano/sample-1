'use strict';

function langChange() {
  switch ($('.js-lang')[0].value) {
    case 'ru':
      $('.js-email_input')[0].setAttribute('placeholder', 'Пожалуйста, введите e-mail');
      $('.js-name_input')[0].setAttribute('placeholder', 'Пожалуйста, введите имя');
      $('.js-select_lang').html('Выберите язык:');
      break;
    case 'de':
      $('.js-email_input')[0].setAttribute('placeholder', 'Bitte geben Sie eine E-Mail-Adresse ein!');
      $('.js-name_input')[0].setAttribute('placeholder', 'Bitte geben Sie Ihren Namen ein');
      $('.js-select_lang').html('Bitte wähle eine Sprache:');
      break;
    default:
      $('.js-email_input')[0].setAttribute('placeholder', 'Please enter your e-mail');
      $('.js-name_input')[0].setAttribute('placeholder', 'Please enter your name');
      $('.js-select_lang').html('Please select your language');
      break;
  }
}

function plural(n, lang) {
  const pluralRules = {
    en: 1,
    ru: 7,
    de: 1,
  };
  const pluralWords = {
    en: ['time', 'times'],
    ru: ['раз', 'раза', 'раз'],
    de: ['mal', 'mal'],
  };
  const getPluralForm = function (rule) {
    switch (rule) {
      case 1:
        return (n === 1) ? 0 : 1;
      case 7:
        if ([1, 11].indexOf(n) > -1) {
          return 0;
        }
        if ([2, 3, 4].indexOf(n % 10) > -1 && (n < 12 || n > 14)) {
          return 1;
        }
        return 2;
      default:
        return 0;
    }
  };
  return pluralWords[lang][getPluralForm(pluralRules[lang])];
}

function helloText(user, email, lang) {
  const n = request('/users', { email: email });
  const message = {
    en: `Hi ${user}! You have been here ${n} ${plural(n, lang)} already!`,
    ru: `Привет, ${user}! Ты был здесь уже ${n} ${plural(n, lang)}!`,
    de: `Hallo ${user}! Du warst hier schon ${n} ${plural(n,lang)}!`,
  };
  return message[lang];
}

function onSubmit(form) {
  const user = form.elements.user.value;
  const email = form.elements.email.value;
  const lang = form.elements.lang.value ? form.elements.lang.value : 'en';
  form.style.visibility = 'hidden';
  $('.js-hello_message').html(helloText(user, email, lang));
}

exports.plural = plural;
