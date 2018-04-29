
import UserService from './UserService';

const users= [{firstName: 'barath', lastName : 'arivazhagan'},
    {firstName: 'senthil', lastName : 'anaswamy'},
    {firstName: 'pari', lastName : 'devi'},
    {firstName: 'hema', lastName : 'arivazhagan'},
    {firstName: 'arivazhagan', lastName : 'subramanium'},
    {firstName: 'kavitha', lastName : 'stephen'},
    {firstName: 'stephen', lastName : 'balraj'},
    {firstName: 'meghna', lastName : 'stephen'},
    {firstName: 'arun', lastName : 'rocks'},
    {firstName: 'jan', lastName : 'raghu'}];

const userService = new UserService(users);

const promise1= new Promise( (resolve,reject) => {

   if(userService!= null){
       resolve(userService.getUsers());
   }else{
       reject(new Error("error in resolving the users"));
   }users


});

promise1.then(users => {
    console.log(users);
    let names=users.map( usr => {
        console.log("called "+usr);
        return usr.firstName+' '+usr.lastName});
   console.log("names "+names);
});

