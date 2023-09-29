<template>
    <div
        class="container mx-auto max-w-prose p-2 min-h-screen flex items-center justify-center flex-col"
    >
        <h1 class="text-5xl tracking-widest mb-12">TODOS</h1>
        <div class="flex gap-1 m">
            <input
                v-model="todo"
                class="text-black rounded-md text-xl tracking-wider"
                placeholder="Add a todo"
                type="text"
                @keyup.enter="addTodo"
            />
            <button
                class="bg-white text-black text-xl tracking-wider w-24 rounded-md p-2 flex justify-center items-center gap-1 shadow shadow-blue hover:shadow-md transition-all"
                @click="addTodo"
            >
                <i class="i-mdi:plus h-6 w-6"></i>
                <div>Add</div>
            </button>
        </div>
        <ul class="flex flex-col mt-8 w-full">
            <li
                v-for="task in todos"
                :key="task.id"
                class="bg-gray-300 text-gray-900 text-4xl tracking-widest p-2 rounded-md mb-2 flex justify-between items-center shadow shadow-blue hover:shadow-md transition-all"
            >
                <div>{{ task.task }}</div>
                <button
                    class="bg-blueGray text-red rounded-full flex items-ceter p2 hover:bg-red-100"
                    @click="removeTodo(task.id)"
                >
                    <i class="i-mdi:delete"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
    id: string
    task: string
}

const todos = ref([] as Todo[])
const todo = ref('')

// const todos = ref([] as string[])

// const addTodo = () => {
//     todos.value.push(todo.value)
//     todo.value = ''
//     const input = document.getElementById('todo') as HTMLInputElement
//     input.focus()
// }

// const altremoveTodo = (index: number) => {
//     todos.value.splice(index, 1)
// }

const addTodo = () => {
    todos.value.push({ id: Math.random().toString(), task: todo.value })
    todo.value = ''
    const input = document.getElementById('todo') as HTMLInputElement
    input.focus()
}

const removeTodo = (todo: string) => {
    todos.value = todos.value.filter((t) => t.id !== todo)
}
</script>
