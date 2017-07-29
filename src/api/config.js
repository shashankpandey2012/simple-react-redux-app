import axios from 'axios';

let id = 'aa32356faf357fde15c4';
let sec = '4738980be768462f2c7cb7b10c50138109e46ea3';
let param = "?client_id=" + id + "&client_secret="+sec;

export default class config{
    static getUserInfo(username){
        return axios.get(`https://api.github.com/users/${username}${param}`)
            .then(response => ({response}))
            .catch(error => ({error}))
    }

    static getAllUsers(users){
        let data = [];
        let errors = [];
        return axios.all([
            config.getUserInfo(users[0]),
            config.getUserInfo(users[1])
        ]).then(


            axios.spread(function(user1,user2){
                if(user1.response.status === 200){
                    data.push(user1.response.data);
                }
                else{
                    errors.push('NOT FOUND');
                }
                if(user2.response.status === 200){
                    data.push(user2.response.data);
                }
                else{
                    errors.push('NOT FOUND');
                }
                console.log(data);
                return ({data , errors});
            }));


    }

    static battle(players){
        let playerOneData = config.getPlayersData(players[0]);
        let playerTwoData = config.getPlayersData(players[1]);

        return axios.all([playerOneData,playerTwoData])
            .then(config.calculateScores)
            .catch( (err)=>{
                console.warn("Hey Some error occurred "+err);
            })
    }

    static getPlayersData(player){
//    get Repos
//    Get Total Stars
//    return object with that data
        return config.getRepos(player.login)
            .then(config.getTotalStars)
            .then( (totalStars)=> {
                return {
                    followers: player.followers,
                    totalStars: totalStars

                }
            });
    }

    static getRepos(username){
        //Fetch Usernames Repos
        return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
    }

    static getTotalStars(stars){
//    Calculate all the stars
        return stars.data.reduce((prev , current)=>{ return prev + current.stargazers_count } , 0)
    }

    static calculateScores(players){
        return [
            players[0].followers * 3 + players[0].totalStars,
            players[1].followers * 3 + players[1].totalStars
        ]
    }
}