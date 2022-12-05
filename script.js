const users = [ {name: 'Moore', secondName: 'Hensley'}, {name: 'Sharlene', secondName: 'Bush'}, {name:'Ross', secondName: 'Vazquez'}, {name: 'Elma', secondName: 'Head'}, {name: 'Carey', secondName: 'Barr'}, {name: 'Blackburn', secondName: 'Dotson'}, {name: 'Sheree', secondName: 'Anthony'} ]

const getUserNames = users => {
    users.forEach(user => {
        console.log(user.name);
    });
  };
  
getUserNames(users);



const users2 = [ {name: 'Moore Hensley', eyeColor: 'blue'}, {name: 'Sharlene Bush', eyeColor: 'green'}, {name:'Ross Vazquez', eyeColor: 'blue'}]

const getUsersWithEyeColor = (users, color) => {
    users.forEach(user => {
        if(user.eyeColor === color){
            console.log(user);
        }else{
            
        }
    });
  };
  
getUsersWithEyeColor(users2, 'blue');




const users3 = [ {name: 'Moore Hensley', gender: 'male'}, {name: 'Sharlene Bush', gender: 'male'}, {name:'Ross Vazquez', gender: 'female'}]

const getUsersWithGender = (users, gender) => {
    users.forEach(user => {
        if(user.gender === gender){
            console.log(user.name);
        }else{
            
        }
    });
  };
  
getUsersWithGender(users3, 'male');





const users4 = [ {name: 'Moore Hensley', isActive: 'offline'}, {name: 'Sharlene Bush', isActive: 'active'}, {name:'Ross Vazquez', isActive: 'active'}]

const getInactiveUsers = users => {
    users.forEach(user => {
        if(user.isActive === 'offline'){
            console.log(user.name);
        }else{
            
        }
    });
};
  
getInactiveUsers(users4);




const users5 = [{name: 'Sheree Antony', email: 'shereeanthony@kog.com'}, {name: 'Elma Head', email: 'elmahead@omatom.com'}]

const getUserWithEmail = (users, email) => {
    users.forEach(user => {
        if(user.email === email){
            console.log(user);
        }else{
            
        }
    });
  };
  
getUserWithEmail(users5, 'shereeanthony@kog.com');
getUserWithEmail(users5, 'elmahead@omatom.com');





const users6_1 = [ {name: 'Elma Head', age: '17'}, {name: 'Carey Barr', age: '25'}, {name:'Ross Vazquez', age: '28'}];
const users6_2 = [ {name: 'Moore Hensley', age: '33'}, {name: 'Sharlene Bush', age: '37'}, {name:'Blackburn Dotson', age: '24'}, {name:'Sheree Anthony', age: '32'}]

const getUsersWithAge = (users, min, max) => {
    let arr = [];
    users.forEach(user => {
        if(user.age < max && user.age > min){
            arr.push(user);
        }else{
            
        }
    });
    console.log(arr);
  };
  
getUsersWithAge(users6_1, 20, 30);
getUsersWithAge(users6_2, 30, 40);




const users7 = [ {name: 'Moore Hensley', balance: 156}, {name: 'Sharlene Bush', balance: 385}, {name:'Ross Vazquez', balance: 274}]
let total = 0;

const calculateTotalBalance = users => {
    users.forEach(user => {
        total += user.balance
    });
    return total
};
  
console.log(calculateTotalBalance(users7));




const users8_1 = [ {name: 'Moore Hensley', friends: ''}, {name: 'Sharlene Bush', friends: 'Briana Decker'}, {name:'Blackburn Dotson', friends: ''}, {name:'Sheree Anthony', friends: 'Briana Decker'}];
const users8_2 = [ {name: 'Elma Head', friends: 'Goldie Gentry'}, {name: 'Sharlene Bush', friends: ''}, {name:'Blackburn Dotson', friends: ''}, {name:'Sheree Anthony', friends: 'Goldie Gentry'}]

const getUsersWithFriend = (users, friendName) => {
    let arr = [];
    users.forEach(user => {
        if(user.friends === friendName){
            arr.push(user.name)
        }else{
            
        }
    });
    return arr;
  };
  
console.log(getUsersWithFriend(users8_1, 'Briana Decker'));
console.log(getUsersWithFriend(users8_2, 'Goldie Gentry'));






const users9 = [ {name: 'Elma Head', friends: 'Goldie Gentry'}, {name: 'Sharlene Bush', friends: 'Gelie Bush'}, {name:'Blackburn Dotson', friends: 'Seeree Gentry'}, {name:'Sheree Anthony', friends: 'Goldie Gentry'}]

const getNamesSortedByFriendsCount = users => {
    let arr = [];
    users.forEach(user => {
        if(user.friends !== ''){
            arr.push(user.name)
        }else{
            
        }
    });
    return arr
};
  
console.log(getNamesSortedByFriendsCount(users9));





const users10 = [ {name: 'Elma Head', skills: 'adipisicing amet anim commodo culpa'}, {name: 'Sharlene Bush', skills: 'elit ex ipsum irure laborum'}, {name:'Blackburn Dotson', skills: 'lorem mollit non nostrud nulla'}, {name:'Sheree Anthony', skills: 'proident tempor velit veniam'}]

const getSortedUniqueSkills = users => {
    let arr = []
    users.forEach(user => {
        arr.push(user.skills)
    });
    return arr
};
  
console.log(getSortedUniqueSkills(users10));
