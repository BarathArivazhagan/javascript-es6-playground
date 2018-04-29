export default class UserService {

    constructor(users = []){
        this.users= users;
    }

    getUsers(){
        console.log("get users is called");
        return this.users;
    }
}