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
                if (albums.filter(album => album.id === song.album.id).length > 0 == false) {
                    albums.push(song.album);
                }
            });
            return albums;
        }
    },
    methods: {
        artistNames(artists) {
            var artist = "";
            artists.forEach((artist, index) => {
                if (index == Object.keys(artists).length - 1) {
                    artist = artist.name;
                } else {
                    artist = artist.name + ", ";
                }
            });
            return artist;
        },
        albumYear(date) {
            return date.split('-')[0];
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
            <img id="img-album" :src="album.images[1].url"/>
            <div class="album-info">
                <h4 id="txt-album-name">{{album.name}}</h4>
                <p id="txt-album-artists">{{ artistNames(album.artists) }}</p>
                <div class="album-year">
                    <p id="txt-album-year">{{ albumYear(album.release_date) }}</p>
                    <p id="txt-album-tracks">2</p>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>