var app = new Vue({
    el:"#app",

    data:{
        emailCasuale: null
    },

    methods: {
        generateMail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then( response => {
                this.emailCasuale = response.data.response;
            })
        }   
    }

    // mounted() {
    //     axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    //     .then( mailGenerata => {
    //         this.emailCasuale = mailGenerata.data.response;
    //     })
    // }
})