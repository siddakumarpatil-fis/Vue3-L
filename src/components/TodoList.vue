<template>
    <!-- <p>  completed {{ store.completed }} </p> -->
    <div v-for="todo in todoList" :key="todo.id" class="list">
      <div class="item">
        <span :class="{ completed: todo.completed }"> {{ todo.item }} </span>
        <div>
          <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
          <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
        </div>
      </div>
    </div>
</template>
<script setup>
import { useTodoStore } from "../stores/useTodoStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useTodoStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
onMounted(()=> {
  store.syncTodos();
})
</script>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}

.list {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
</style>
