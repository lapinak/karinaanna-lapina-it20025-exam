import { reactive } from 'vue'

export const player = reactive({
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
        //this.playlist.push(songs);
        this.playlist = songs;
    },
    setNowPlaying(song) {
        //this.now_playing.push(song);
        this.playling = song;
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing;
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){
        var index = this.playlist.findIndex(item => item.id === this.now_playing.id);
        if (this.playlist[index + 1] === undefined) {
            return false;
        } else {
            return this.playlist[index + 1];
        }
        //return this.playlist[index + 1];
    },
    getPreviousSong() {
        var index = this.playlist.findIndex(item => item.id === this.now_playing.id);
        if (this.playlist[index + 1] === undefined) {
            return false;
        } else if (this.playlist[index - 1] === undefined) {
            return false;
        } else {
            return this.playlist[index - 1];
        }
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})