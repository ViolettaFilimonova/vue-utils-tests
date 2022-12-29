<template>
    <h1>ToDoApp</h1>
    <div>
        <p v-for="todo in todos" :key="todo.id" data-test="todo">{{ todo.text }}</p>
    </div>
</template>
<script>
export default{
    name: "ToDoApp",
    props:{
    },
    data(){
        return{
            todos: [
                // {
                //     id: 1,
                //     text: "Hi, let`s go to Learn Vue Unit tests!!",
                //     complited: false
                // },
                {
                    id: 2,
                    text: "Learn Vue Unit tests",
                    complited: false
                }
            ]
        }
    }
}
</script>
