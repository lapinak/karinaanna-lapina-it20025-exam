<script>
import IconGrid from '../components/icons/IconGrid.vue';
import IconList from '../components/icons/IconList.vue';

export default {
    components: {IconGrid, IconList},
    data () {
        return {
            isIconGrid: false,
            isIconList: true
        }
    }
}
</script>

<template>
    <div id="album-view">
    <div class="wrapper-header">
        <h1>ALBUMS</h1>
        <div class="settings">
            <button id="btn-grid" @click="isIconGrid ? isIconGrid = false : isIconGrid = true, isIconList = false" v-bind:class="{active: isIconGrid}"><IconGrid/>></button>
            <button id="btn-list" @click="isIconList ? isIconList = false : isIconList = true, isIconGrid = false" v-bind:class="{active: isIconList}"><IconList/></button>
        </div>
    </div>
    <ul id="list-albums">
        <li class="album">
            <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
            <div class="album-info">
                <h4 id="txt-album-name">We May Grow Old But We Never Grow Up</h4>
                <p id="txt-album-artists">Example</p>
                <div class="album-year">
                    <p id="txt-album-year">2022</p>
                    <p id="txt-album-tracks">2</p>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>