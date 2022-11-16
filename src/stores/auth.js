import { reactive } from 'vue';
import router from '../router';

export const auth = reactive({
    user: {
        name: localStorage.getItem("name") ?? "Karina",
        surname: localStorage.getItem("surname") ?? "Lapina",
        code: localStorage.getItem("code") ?? "IT20025",
        favorite_songs: localStorage.getItem("faveSongs") ?? []
    },

    // TE DEFINĒT USER OBJEKTU

    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) { 
        localStorage.setItem("name", name);
        this.user.name = name;
        localStorage.setItem("surname", surname);
        this.user.surname = surname;
        localStorage.setItem("code", code);
        this.user.code = code;
    },

    authenticate(email, password) {
        if (email === "karinaanna.lapina@va.lv" && password === "123456") {
            localStorage.is_authenticated = true;
            this.is_authenticated = true;
            router.replace('/')
        }
    },

    logout() {
        localStorage.clear();
        this.is_authenticated = false;
        router.replace('/login')
    },

    toggleFavorite(songID) {
        if (this.user.favorite_songs.includes(songID) != true) {
            this.user.favorite_songs.push(songID);
        } else {
            this.user.favorite_songs.pop(songID);
        }

        localStorage.setItem("faveSongs", this.user.favorite_songs);
    },

    getFavoriteSongs() {
        return this.user.favorite_songs;
    }
});