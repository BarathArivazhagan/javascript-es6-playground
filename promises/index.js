
import UserService from './UserService';

const users= [{firstName: 'barath', lastName : 'arivazhagan'}];

const userService = new UserService(users);

const promise1= new Promise( (resolve,reject) => {

   if(userService!= null){
       resolve(userService.getUsers());
   }else{
       reject(new Error("error in resolving the users"));
   }


});

promise1.then(value => {
    console.log(value);
});

