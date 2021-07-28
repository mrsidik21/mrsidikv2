import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import idLocale from './id'

Vue.use(VueI18n)

const messages = {en: { ...enLocale }, id: { ...idLocale }}

const i18n = new VueI18n({ locale: 'en', messages })

export default i18n
