var app = new Vue({
    el:"#app",

    data:{
        emailCasuale: [],
    },

    // methods: {

    //         // generateMail() {
                
    //         // },
    // },
    // mounted(){
    // let that = this;

    
    //     // axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    //     //         .then( mail => {
    //     //             that.emailCasuale.push(mail.data.response);
    //     //             // console.log(mail.data.response);
    //     //             // console.log(this.emailCasuale)
    //     //         })
    // }


    mounted(){
        for (let i=0; i<=9; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                        .then( mail => {
                            this.emailCasuale.push(mail.data.response);
                            // console.log(mail.data.response);
                            // console.log(this.emailCasuale)
                        })
        }
    }
})

