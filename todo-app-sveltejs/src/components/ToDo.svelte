<script>
    import ToDoItem from "./ToDoItem.svelte";

    export let list;

    const logo = "../asset/logo.png"

    let todo = "";
    function createToDoItem() {
        if ( !todo ) {
            alert("Please enter a todo.");
            return;
        }

        const newId = list.length
            ? Math.max.apply(null, list.map(t => t.id)) + 1
            : 1;
        list.push({ id: newId, text: todo });
        todo = "";
        list.append()
    }

    const removeItem = id => {
        list = list.filter(item => item.id != id)
    };
</script>

<div class="todo">
    <img class="logo" src={logo} alt="Svelte logo" />
    <h1>To Do</h1>
    <div class="todo-container">
        <div>
        {#each list as item (item.id)}
            <ToDoItem {...item} deleteItem={removeItem} />
        {/each}
        </div>
        <div class="todo-item">
            <input class="todo-add-input" type="text" bind:value={todo} />
            <button class="todo-add" on:click={createToDoItem}>+</button>
        </div>
    </div>
</div>

<style>
    .logo {
        width: 50px;
        position: relative;
        top: 50px;
    }
    .todo {
        text-align: center;
        border: 1px solid white;
        width: 80vw;
        height: auto;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
        background: #fdfdfd;
        padding-bottom: 60px;
        margin: 40px auto;
    }
    h1 {
        color: black;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        margin: 70px auto 30px;
    }
    .todo-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .todo-add-input {
        width: 90%;
        background-color: white;
        border: 1px solid lightgrey;
        box-shadow: 1px 1px 1px lightgrey;
        padding: 12px;
        margin: 10px;
    }
    .todo-add {
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
    .todo-add:hover {
        box-shadow: none;
    }
    .todo-container {
        width: 80%;
        margin: 0 auto;
    }
</style>

