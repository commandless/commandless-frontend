<script>
    export let flag;
    let { description, short, long, type, isRequired, defaultValue} = flag;
    export let value;
</script>
<div class="current-recipe-flag">
    {#if short || long}
        <div class="current-recipe-flag-use">
            <strong>
                <span>{short ? `-${short}${long? ', ' : ''}`: ''}</span>
                <span>--{long}</span>
            </strong>
        </div>
    {/if}
    <div class="current-recipe-flag-details">
        <span>{description}</span>
        <div><strong>type:</strong> {type}</div>
        <div><strong>isRequired:</strong> {isRequired}</div>
        {#if defaultValue}
            <div><strong>defaultValue:</strong> {defaultValue}</div>
        {/if}
        {#if value !== undefined}
            {#if type === 'boolean'}
                <select bind:value={value}>
                    <option value=""></option>
                    <option value="false">false</option>
                    <option value="true">true</option>
                </select>
<!--            {:else if type === 'number'}-->
<!--                <div><strong>value:</strong><input  type=number bind:value={value}></div>-->
            {:else}
                <div><strong>value:</strong><input bind:value={value}></div>
            {/if}
        {/if}
    </div>
</div>
<style>

    .current-recipe-flag {
        display: flex;
        flex-row: column;
        margin: 10px;
        padding: 10px;
        border: 1px solid gray;
    }
    .current-recipe-flag-details {
        flex: 1;
        line-height: 2rem;
    }
    .current-recipe-flag-use {
        min-width: 200px;
        padding-right: 50px;
        line-height: 2rem;
    }
</style>
