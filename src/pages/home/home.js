import axios from "axios";

export default{
    data(){
        return{
            articles:[],
            tags:[],
            page:0,
            pages:1,
        }
    },

    mounted(){
        this.get_articles()
        this.get_tags()
    },

    methods:{
        async get_articles(tag){

            await axios({
                method: "GET",
                url: "https://api.realworld.io/api/articles",
                params:{
                    limit:20,
                    offset:this.page,
                    tag:tag
                }
            })
                .then(async (res) => {
                    this.articles= res.data
                    this.pages=Math.round(res.data.articlesCount/20)+1
                    window.scrollTo({top: 0, behavior: 'smooth'});
                })
                .catch((err) => {
                    console.log("err", err);
                });
        },

        async get_tags(){

            await axios({
                method: "GET",
                url: "https://api.realworld.io/api/tags",
            })
                .then(async (res) => {
                    this.tags= res.data.tags
                })
                .catch((err) => {
                    console.log("err", err);
                });
        },

        filter(tag){
            this.get_articles(tag)
        }

    }
}