<script>
import { auth } from '../stores/auth';
import songList from '../data/songs';
import {player} from '../stores/player';
import IconHeart from '../components/icons/IconHeart.vue';
import IconPlay from '../components/icons/IconPlay.vue';

export default {
    data() {
        return {
            auth,
            search: '',
            show_favorites: false,
            songs: songList,
            player
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
        handleScroll(event) {
            this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
        },
        getTime(time_ms) {
            var minutes = Math.floor(time_ms / 60000);
            var seconds = ((time_ms % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        },
        selectSong(song) {
            player.setNowPlaying(song);
        }
    },
    components: {IconHeart, IconPlay},
    computed: {
        filtered_songs() {
        let songs = this.songs;
        let currentSongs = [];
        
        currentSongs = songs.filter((song) => {
            return song.name.toLowerCase().includes(this.search.toLowerCase())
        });
        return currentSongs;
        }
    }
}

</script>

<template>
    <div id="songs-view" @scroll="handleScroll">
    <div class="wrapper-header">
        <h1>SONGS</h1>
        <div class="wrapper-search">
            <input id="input-search" v-model="search" placeholder="Search by title..." />
        </div>
        <div class="wrapper-settings">
            <button id="btn-show-favorites" @click="show_favorites ? show_favorites = true : show_favorites = false" 
            v-bind:class="{active: show_favorites}">Show Favorites</button>
        </div>
    </div>
    <div class="wrapper-songs">
        <table cellspacing="0" cellpadding="0">
            <tr ref="header">
                <th id="th-id" >#</th>
                <th id="th-title">
                    Title
                    <IconCaretUp />
                </th>
                <th id="th-artist">Artist</th>
                <th id="th-album">Album</th>
                <th id="th-duration">
                    Duration
                    <IconCaretUp />
                </th>
            </tr>
            <!-- Loop goes on this <tr> element -->
            <tr class="song" v-for="(song, index) in filtered_songs" @dblclick="selectSong(song)" v-bind:class="{active: song.id == player.getNowPlayingSongId()}">
                <td id="td-index">
                    <IconPlay v-if="song.id == player.getNowPlayingSongId()"/>
                    <span id="txt-index" v-if="song.id != player.getNowPlayingSongId()">{{ index + 1 }}</span>
                </td>
                <td id="td-title">
                    <img :src="song.album.images[1].url"/>
                    {{ song.name }}
                </td>
                <td id="td-artist">{{ artistNames(song.artists) }}</td>
                <td id="td-album">{{ song.album.name }}</td>
                <td id="td-duration">
                    {{ getTime(song.duration_ms) }}
                    <IconHeart @click="auth.toggleFavorite(song.id)" v-bind:class="{active: auth.getFavoriteSongs().includes(song.id)}" />
                </td>
            </tr>
        </table>
    </div>
</div>
</template>