<script>
import songList from '../data/songs';
import { auth } from '../stores/auth';

export default {
    data() {
        return {
            auth,
            groupOne: false,
            groupTwo: true,

            newName: auth.user.name,
            newSurname: auth.user.surname,
            newCode: auth.user.code,

            isActive: false,

            songs: songList,

            faveListEmpty: true
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
        editButton() {
            this.groupOne = true;
            this.groupTwo = false;
        },
        // cancelButton() {
        //     this.groupOne = false;
        //     this.groupTwo = true;
        // },
        saveButton() {
            this.groupOne = false;
            this.groupTwo = true;
            this.auth.setUserData(this.newName, this.newSurname, this.newCode);
        },
        toggle() {
            this.isActive = !this.enable;
            this.groupOne = true;
        }
    },
    computed: {
        faveSongs() {
            var faveSongs = [];
            var currentSongs = auth.getFavoriteSongs();

            currentSongs.forEach((songID) => {
                this.songs.forEach((song) => {
                    if (song.id == songID) {
                        faveSongs.push(song);
                    }
                });
            }); 
            return faveSongs;
        }
    }
}
</script>

<template>
    <div id="about-view">
    <div class="wrapper-header">
        <h1>ABOUT ME</h1>
        <div class="settings">
            <button id="btn-edit" :class="{active:isActive}" v-if="groupTwo" @click="toggle">{{isActive ? 'Cancel Form' : 'Edit Form'}}</button>
            <!-- <button id="btn-edit" v-if="groupTwo" @click="editButton()">Edit Form</button>
            <button id="btn-edit" v-if="groupOne" @click="cancelButton()" :class="{active: groupOne}">Cancel Form</button> -->
            <button id="btn-save" v-if="groupOne" @click="saveButton()">Save Form</button>
        </div>
    </div>
    <form>
        <div class="wrapper-input">
            <label>NAME</label>
            <input v-model="newName" id="input-name" v-if="groupOne"/>
            <p id="txt-name" v-if="groupTwo">{{ auth.user.name }}</p>
        </div>
        <div class="wrapper-input">
            <label>SURNAME</label>
            <input v-model="newSurname" id="input-surname" v-if="groupOne"/>
            <p id="txt-surname" v-if="groupTwo">{{ auth.user.surname }}</p>
        </div>
        <div class="wrapper-input">
            <label>STUDENT CODE</label>
            <input v-model="newCode" id="input-code" v-if="groupOne"/>
            <p id="txt-code" v-if="groupTwo">{{ auth.user.code }}</p>
        </div>
        <div class="wrapper-songs">
            <label>FAVORITE SONGS</label>
            <ul v-if="auth.getFavoriteSongs().length">
                <li v-for="song in faveSongs">
                    <img id="img-album" :src="album.images[1].url"/>
                    <div class="song-info">
                        <p id="txt-song" class="song-name">{{song.name}}</p>
                        <p id="txt-artist" class="song-artists">{{ artistNames(song.artists) }}</p>
                    </div>
                </li>
            </ul>
            <div id="txt-empty" class="empty" v-if="!auth.getFavoriteSongs().length">NO SONGS FOUND</div>
        </div>
    </form>
</div>
</template>