<template>
  <div class="ToDoItem">
    <p class="ToDoItem-Text">{{item.text}} <small>[id:{{item.id}}]</small></p>
    <button class="ToDoItem-Delete" @click="deleteItem(item.id)">-</button>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ["item"],
  methods: {
    deleteItem(id) {
      this.$emit("delete", id);
    }
  }
};
</script>

<style>
    .ToDoItem {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ToDoItem-Text {
        width: 90%;
        background-color: white;
        border: 1px solid lightgrey;
        box-shadow: 1px 1px 1px lightgrey;
        padding: 12px;
        margin: 10px;
    }
    .ToDoItem-Text small {
        color: #666;
        font-size: small;
    }
    .ToDoItem-Delete {
        padding: 4px 12px;
        margin: 10px;
        margin-left: 0;
        cursor: pointer;
        background: #ff7373;
        border-radius: 10px;
        box-shadow: 1px 1px 1px #c70202;
        color: white;
        font-size: 28px;
        width: 1.7em;
    }
    .ToDoItem-Delete:hover {
        box-shadow: none;
    }
</style>