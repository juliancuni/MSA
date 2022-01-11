<script>
    import { SkeletonAvatar, Button, Row } from "framework7-svelte";

    let avatar, input;
    export let value = {};

    const reset = () => {
        input.value = "";
        avatar = null;
    };

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = async (e) => {
            avatar = e.target.result;
            value = { name: image.name, type: image.type, avatar };
        };
    };

    console.log(value);
</script>

<div id="app">
    <h1>Foto</h1>
    {#if avatar}
        <div class="img-container">
            <img class="avatar" src={avatar} alt="" />
        </div>
        <Row>
            <!-- <Button
                iconF7="cloud_upload"
                onClick={upload}
                preloader
                large
                small
            /> -->
            <Button iconF7="clear" large small onClick={reset} />
        </Row>
    {:else if value.url}
        <img class="avatar" src={value.url} alt="" />
        <Button
            iconF7="camera_on_rectangle"
            large
            small
            onClick={() => {
                input.click();
            }}
        />
    {:else}
        <SkeletonAvatar class="avatar" />
        <Button
            iconF7="camera_on_rectangle"
            large
            small
            onClick={() => {
                input.click();
            }}
        />
    {/if}

    <input
        style="display:none"
        type="file"
        accept=".jpg, .jpeg, .png"
        on:change={(e) => onFileSelected(e)}
        bind:this={input}
        bind:value
    />
</div>

<style>
    #app {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }
    .chan {
        cursor: pointer;
    }

    .upload {
        display: flex;
        height: 50px;
        width: 50px;
        cursor: pointer;
    }

    .avatar {
        display: flex;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        position: relative;
    }

    .close-button {
        position: absolute;
        z-index: 1;
        right: 20px;
    }
</style>
