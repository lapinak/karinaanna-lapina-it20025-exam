import { reactive } from 'vue';
//import router from '..router';

export const auth = reactive({
    user: {
        name: "Karīna Anna",
        surname: "Lapiņa",
        code: "IT20025",
        favorite_songs: localStorage.getItem("favorite_songs") ?? []
    },

    // TE DEFINĒT USER OBJEKTU

    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) { 
        this.user.name = name;
        this.user.surname = surname;
        this.user.code = code;
    },

    authenticate(email, password) {
        if (email === "karinaanna.lapina@va.lv" && password === "godbless") {
            localStorage.is_authenticated = true;
            this.is_authenticated = true;
            router.replace({ path: '/' })
        }
    },

    logout() {
        localStorage.clear();
        this.is_authenticated = false;
        router.replace({ path: '/login' })
    },

    toggleFavorite(songID) {
        if (this.user.favorite_songs.includes(songID) != true) {
            this.user.favorite_songs.push(songID);
        } else {
            this.user.favorite_songs.pop(songID);
        }

        localStorage.setItem("favorite_songs", this.user.favorite_songs);
    },

    getFavoriteSongs() {
        return this.user.favorite_songs;
    }
});