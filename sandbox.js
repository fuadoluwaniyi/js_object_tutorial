// // object literals

// let user = {
//     name: 'fuad',
//     age: 22,
//     email: 'fuadoluwaniyi@gmail.com',
//     location: 'lagos',
//     blogs: ['Learning front_end', 'The best time to code is at Night']
// };

// console.log(user);
// // to get just one of the properties. using name property
// console.log(user.name);
// // to overwrite one of the property value. Let say age for example
// user.age = 30;
// console.log(user.age);
// // we can also access an update properties using square bracket notation instead of dot notation
// console.log(user['email']);
// user['name'] = 'oluwaniyi';
// console.log(user['name']);
// // one advantage of using aquare bracket is that i can say
// const key = 'location';
// console.log(user[key]);
// // i prefer using dot notation, it pretty easy

// console.log(typeof user);

// now i will like to add methods

let user = {
    name: 'fuad',
    age: 22,
    email: 'fuadoluwaniyi@gmail.com',
    location: 'lagos',
    blogs: ['Learning front_end', 'The best time to code is at Night'],
    // adding method
    login: function(){
        console.log('the user is logged in');
    },
    logout: function(){
        console.log('the user is logged out');
    }
};

user.login();
user.logout();