<template>
    <div>
        <form @submit.prevent="addItemAndClear(todo)">
            <input v-model="todo" type="text" /><button>Add</button>
            <div class="alert-div">
                <div v-show="store.showAlert" class="alert">
                    Please type something...
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref} from "vue";
import { useTodoStore } from "../stores/useTodoStore";

const todo = ref("");
const store = useTodoStore();

function addItemAndClear(item) {
    if (item.length === 0) {
        store.inputAlert();
        return;
    }
    store.addTodo(item);
    todo.value = "";
}
</script>

<style scoped>
form {
  margin: auto;
  width: 50%;
}

input {
  margin-top: 25px;
  margin-bottom: 15px;
  height: 45px;
  width: 50%;
  border: 2px solid #62892f;
  border-radius: 5px;
}
button {
  margin-left: 30px;
  background-color: #62892f;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  width: 15%;
}

.alert-div {
  min-height: 25px;
}

.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>
