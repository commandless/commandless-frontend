<script>
    export let link='';
    export let stars='';
    export let description='';
</script>

<div class="recipe" >
    <div class="recipe-header">
        <a href={link} >{link}</a>
        <span>⭑{stars}</span>
    </div>
    <div>{description}</div>
    <button>Use</button>
</div>

<style>
    .recipe {
        border: 3px solid gray;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .recipe-header {
        display: flex;
    }
    .recipe-header a {
        flex: 1 0 auto;
    }

    button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        align-self: flex-end;
    }

    button:active {
        background-color: green; /* Green */
    }
</style>
