var app = new Vue({
    el:"#app",

    data:{
        emailCasuale: [],
    },

    methods: {

            generateMail() {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then( mail => {
                    this.emailCasuale.push(mail.data.response);
                    // console.log(mail.data.response);
                    // console.log(this.emailCasuale)
                })
            },
    },
})