import { Menus } from '@/utils/menus'
import { Profiles } from '@/utils/profiles'
const app = {
  state: {
    language: localStorage.language ? localStorage.language : 'en',
    menus: localStorage.menus ? JSON.parse(localStorage.menus) : Menus,
    profiles: localStorage.profiles ? JSON.parse(localStorage.profiles) : Profiles,
    loadedSection: {
      hero: false,
      about: false,
      resume: false,
      page: false,
      contact: false
    }
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      localStorage.language = language
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
      localStorage.menus = JSON.stringify(state.menus)
    },
    SET_PROFILES: (state, menus) => {
      state.profiles = menus
      localStorage.profiles = JSON.stringify(state.profiles)
    },
    SET_LOADED_SECTION: (state, loadedSection) => {
      state.loadedSection = loadedSection
    }
  },
  actions: {
    setMenus ({ commit }, menus) {
      commit('SET_MENUS', menus)
    },
    setLanguage ({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setProfiles ({ commit }, profiles) {
      commit('SET_PROFILES', profiles)
    },
    setLoadedSection ({ commit }, loadedSection) {
      commit('SET_LOADED_SECTION', loadedSection)
    }
  }
}

export default app
