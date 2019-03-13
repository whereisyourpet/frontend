
export default {
    name: "user-info",
    find_data:[],
    predict_adoption_star:0,
    predict_popularity_star:0,
    set_adoption(star){
        this.predict_adoption_star=star
    },
    set_popularity(star){
        this.predict_popularity_star=star
    },
    set_find_data(list){
        this.find_data=list;
    },
}