<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-show="show">
      <h1>This is an about page {{ TodoStore.count }}</h1>
    </div>
    <button v-on:click="TodoStore.randomizeCount()">{{ hideButton }}</button>

    <div class="static" :class="{ active: isActive, 'text-danger': hasError }" v-bind:style="{ color:'red' }"> {{ isActive + " " + hasError + evennum }}</div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import { useTodoStore } from '../stores/useTodoStore'

const TodoStore= useTodoStore();
const counter= useCounterStore();

const show = ref(true)
const isActive = ref(true)
const hasError = ref(false)

const num=  ref([1,2,3,4,5,6,7,8,9]);

const evennum= computed(()=>{
  return num.value.filter((n)=> n % 2 == 0);
})

function changeShow() {
  show.value = !show.value;
}
// function hideButton() {
//   return show.value ? "Hide" : "Show" 
// }

const hideButton = computed(() => {
  return show.value ? "Hide" : "Show"
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    padding: 5vh;
  min-height: 100vh;
  width: 100vw;
  background-color: #f7f9fc;
}
}
</style>
