<template>
    <div class="ToDo">
      <img class="Logo" :src="logo" alt="Vue logo" />
      <h1 class="ToDo-Header">To Do</h1>
      <div class="ToDo-Container">
        <div class="ToDo-Content">
          <ToDoItem v-for="item in list" :item="item" @delete="onDeleteItem" :key="item.id" />
        </div>
        <div class="ToDoItem">
            <input class="ToDo-Add-Input" type="text" v-model="todo" v-on:keyup.enter="createNewToDoItem" />
            <button class="ToDo-Add" @click="createNewToDoItem">+</button>
        </div>
      </div>
    </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import Logo from "../assets/logo.png";
export default {
  name: "ToDo",
  components: {
    ToDoItem
  },
  data() {
    return {
        list: [
            { id: 1, text: "Create Vue.js apps"},
            { id: 2, text: "Create React apps"},
            { id: 3, text: "Create Svelte apps"}
        ],
        todo: "",
        logo: Logo
        };
  },
  methods: {
    createNewToDoItem() {
      //validate todo
      if (!this.todo) {
        alert("Please enter a todo!");
        return;
      }
      const newId = this.list.length
        ? Math.max.apply(null, this.list.map(t => t.id)) + 1
        : 1;
      this.list.push({ id: newId, text: this.todo });
      this.todo = "";
    },
    onDeleteItem(id) {
      this.list = this.list.filter(item => item.id !== id);
    }
  }
};
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        background: linear-gradient(#dcaeff, #ff6a3d);
        height: auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Logo {
        width: 50px;
        position: relative;
        top: 50px;
    }
    .ToDo {
        text-align: center;
        border: 1px solid white;
        width: 80vw;
        height: auto;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
        background: #fdfdfd;
        padding-bottom: 60px;
        margin: 40px auto;
    }
    .ToDo-Header {
        color: black;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        margin: 70px auto 30px;
    }
    .ToDo-Add-Input {
        width: 90%;
        background-color: white;
        border: 1px solid lightgrey;
        box-shadow: 1px 1px 1px lightgrey;
        padding: 12px;
        margin: 10px;
    }
    .ToDo-Add {
        padding: 4px 12px;
        margin: 10px;
        margin-left: 0;
        cursor: pointer;
        background: #73ff73;
        border-radius: 10px;
        box-shadow: 1px 1px 1px #47a947;
        color: white;
        font-size: 28px;
        width: 1.7em;
    }
    .ToDo-Add:hover {
        box-shadow: none;
    }
    .ToDo-Container {
        width: 80%;
        margin: 0 auto;
    }
</style>