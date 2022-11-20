import axios from "axios";

export default{
    data(){
        return{
            name:"",
            email:"",
            password:"",
        }
    },

    mounted(){

    },

    methods:{
        async register(){

            await axios({
                method: "POST",
                url: "https://api.realworld.io/api/users",
                data:{
                  user: {
                    "username": this.name,
                    "email": this.email,
                    "password": this.password,
  }
                }
            })
                .then(async (res) => {
                    localStorage.setItem("token",res.data.user.token )
                    localStorage.setItem("username",res.data.user.username )
                    this.$router.push("/home")
                    this.$toasted.show("wellcome :)" , {
                        type : 'success',
                  });
                })
                .catch((err) => {
                    console.log("err", err);
                    this.$toasted.show( err.response.data.errors.email || err.response.data.errors.username , {
                        type : 'error',
                  });
                });
        }
    }
}