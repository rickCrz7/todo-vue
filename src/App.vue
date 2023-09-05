<template>
    <div
        class="container mx-auto max-w-prose p-2 min-h-screen flex items-center justify-center"
    >
        <h1 class="text-5xl tracking-widest">TODOS</h1>
        <div>
            <input v-model="todo" type="text" />
            <button @click="addTodo">Add</button>
        </div>
        <ul>
            <li v-for="task in todos" :key="task">{{ task }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const todos = ref([] as string[])
const todo = ref('')

const addTodo = () => {
    todos.value.push(todo.value)
}
</script>
