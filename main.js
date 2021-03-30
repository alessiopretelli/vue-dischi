var app = new Vue({
    el: '#app',
    data: {
        songs: [],
        genres: [],
        genreinput: 'All',
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) => {
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
                    
                // if (!this.genres.includes(this.songs[0][i].genre)) {
                //     this.genres.push(this.songs[0][i].genre);
                // }

                //variante senza metodo .includes()
                var v = 0;
                var tmp2 = this.songs[0][i].genre;

                for (ii = 0; ii < this.genres.length; ii++) {

                    if (tmp2 == this.genres[ii]) {
                        v = 1;
                    }

                }

                if (v == 0) {
                    this.genres.push(tmp2);
                }

            }
        }
    }
});
