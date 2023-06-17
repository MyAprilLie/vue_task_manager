<template>
    <div>
      <form @submit.prevent="addNewTask">
        <input v-model="newTask" placeholder="Добавить новую задачу" />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input v-model="task.text" @change="updateTask(index, task.text)" />
          <button @click="removeTask(index)">Удалить задачу</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TasksList',
  data() {
    return {
      newTask: ''
    }
  },
  computed: {
    ...mapState(['tasks'])
  },
  methods: {
    ...mapActions(['addTask', 'deleteTask', 'editTask']),
    addNewTask() {
      if (this.newTask) {
        this.addTask({ text: this.newTask })
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.deleteTask(index)
    },
    updateTask(index, task) {
      this.editTask({ taskIndex: index, updatedTask: { text: task } })
    }
  }
}
</script>