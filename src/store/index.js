import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'CART'

export default new Vuex.Store({
  state: {
    items: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },

  getters: {
    items: state => {
      return state.items
    },

    totalPrice: state => {
      return state.items.reduce((sum, current) => sum + (current.total_count * current.offer.price), 0)
    },

    totalCount: state => {
      return state.items.reduce((sum, current) => sum + current.total_count, 0)
    }
  },

  mutations: {
    ADD_ITEM(state, payload) {
      if (state.items.findIndex(item => item.id === payload.id) !== -1) return
      state.items.push({...payload, total_count: 1})
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    },

    DELETE_ITEM(state, id) {
      let idx = state.items.findIndex(item => item.id === id)
      if (idx === -1) return
      state.items.splice(idx, 1)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    },

    INCREASE_ITEM(state, id) {  
      let idx = state.items.findIndex(item => item.id === id)
      let total = state.items[idx].total_count + 1
      Vue.set(state.items[idx], 'total_count', total)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    },

    DECREASE_ITEM(state, id) {
      let idx = state.items.findIndex(item => item.id === id)
      let total = state.items[idx].total_count - 1
      Vue.set(state.items[idx], 'total_count', total)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    }
  },

  actions: {
    addItem({commit}, payload) {
      commit('ADD_ITEM', payload)
    },

    deleteItem({commit}, id) {
      commit('DELETE_ITEM', id)
    },

    increaseItem({commit}, id) {
      commit('INCREASE_ITEM', id)
    },
  
    decreaseItem({commit}, id) {
      commit('DECREASE_ITEM', id)
    }
  }
})