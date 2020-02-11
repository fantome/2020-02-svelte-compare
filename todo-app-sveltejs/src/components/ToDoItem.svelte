<script>
    export let id;
    export let text;
    export let deleteItem;
</script>

<div class="todo-item">
    <p>{text} <small>[id:{id}]</small></p>
    
    <button class="todo-item-delete" on:click={() => deleteItem(id)}>-</button>
</div>

<style>  
    .todo-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        width: 90%;
        background-color: white;
        border: 1px solid lightgrey;
        box-shadow: 1px 1px 1px lightgrey;
        padding: 12px;
        margin: 10px;
    }
    p small {
        color: #666;
        font-size: small;
    }
    .todo-item-delete {
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
    .todo-item-delete:hover {
        box-shadow: none;
    }
</style>