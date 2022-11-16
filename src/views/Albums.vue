<script>
import IconGrid from '../components/icons/IconGrid.vue';
import IconList from '../components/icons/IconList.vue';
import songList from '../data/songs';

export default {
    components: {IconGrid, IconList},
    data () {
        return {
            gridIcon: false,
            listIcon: true,
            songs: songList
        }
    },
    computed: {
        albums() {
            var albums = [];

            this.songs.forEach(song => {
                var songObj = {
                    id: song.album,
                    songs: []
                }
                albums.push(song.album);
            });
            return albums;
        }
    }
}
</script>

<template>
    <div id="album-view">
    <div class="wrapper-header">
        <h1>ALBUMS</h1>
        <div class="settings">
            <button id="btn-grid" @click="gridIcon ? gridIcon = false : gridIcon = true, listIcon = false" v-bind:class="{active: gridIcon}"><IconGrid/>></button>
            <button id="btn-list" @click="listIcon ? listIcon = false : listIcon = true, gridIcon = false" v-bind:class="{active: listIcon}"><IconList/></button>
        </div>
    </div>
    <ul id="list-albums" :class="{grid: gridIcon}">
        <li class="album" v-for="(album) in albums">
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