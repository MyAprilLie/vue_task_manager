import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push({ text: task.text });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    EDIT_TASK(state, { taskIndex, updatedTask }) {
      state.tasks[taskIndex] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task);
    },
    deleteTask({ commit }, index) {
      commit('DELETE_TASK', index);
    },
    editTask({ commit }, payload) {
      commit('EDIT_TASK', payload);
    }
  },
  getters: {
    tasks: state => state.tasks
  }
});

