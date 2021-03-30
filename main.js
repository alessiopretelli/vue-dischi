var app = new Vue({
    el: '#app',
    data: {
        songs: ['temp'],
        genres: [],
        genreinput: '',
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) => {
                this.songs.splice(0, 1);
                this.songs.push(result.data.response);
                this.addgenre();

                for (i = 0; i < this.songs[0].length; i++) {

                    for (ii = i; ii < this.songs[0].length; ii++) {

                        if (this.songs[0][i].year > this.songs[0][ii].year) {
                            var tmp = this.songs[0][ii];
                            this.songs[0][ii] = this.songs[0][i];
                            this.songs[0][i] = tmp;
                        }    

                    }

                }

                console.log(this.songs[0]);
                console.log(this.genres);
            });
    },
    methods: {
        addgenre() {
            for (let i = 0; i < this.songs[0].length; i++) {
                    
                if (!this.genres.includes(this.songs[0][i].genre)) {
                    this.genres.push(this.songs[0][i].genre);
                }

            }
        }
    }
});
