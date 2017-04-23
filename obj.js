//var user = {
  //name : 'Alex',
  //age : 40
//}


  //user.city : 'Kiev';
  //user['adress'] : 'contractove';
  //user.index : '01033';

  //console.log('name' in user);



//  console.log('hellow I am' + user.name + 'Мне' user.age +', я живу' + user.city + '....');

  //'40' == 40
//  'asd' >= 'AZ' // + preobrazouet k stroke, == preobrozoyet k 4esly
//  var users = {
  //  'Vasya' : {
  //    profession: 'developer', // properti
//      language: 'JS'
  //  };
  //  'Petya': {
  //    profession: 'designer',
  //    language: 'null'
  //  },
  //  'Natali': {
  //    profession: 'developer',
  //    language: {
    //    CSS: true,
  //      js: true,
    //    python: false
  //    }
//  }
//  console.log(users.Natali.language ); // kiriliseu tak nelz9 pisat'

//var user1 = {
//  name: 'User1',
//  age: 20,
  //isOnline: true
//}
//var user2 = {
//  name: 'User2',
//  age: 40,
//  isOnline: false
//}
//var user3 = {
  //name: 'User3',
//  age: user2.age,
//  isOnline: user1.isOnline
//}
  // name - user3
  // age === user2
  // isOnline == user1.isOnline



// Циклы

//1
//var inc = 1;
//while( inc <= 10) {
//  console.log(inc);
//  inc++;
//}
//2
//var inc = 1;
//do {
//  console.log(inc);
  //inc++;
//} while(inc<=100);


//3

//for (var i = 100; i<10; i++) {
  //console.log(i);
//}

//4

//for (var i in obj) {} // tolko dl9 object




// vurazitel'nui JS (Book)


// gorod projevanie
// adress
//index


var summ = 0, result = 1 ;
for (var i = 0; i <= 100; i++) {
  summ += i;
  if (i%2 == 0 && !== 0) result*=i;
}
console.log(summ, result);




var summ = 0, result = 1 ;
for (var i = 0; i <= 100; i++) {
  summ x = i;
  summ += i;
  if (i%2 == 0 && !== 0) result*=i;
  if (x === 0) continue;
  if (i%3 === 0 && x%5== 0){ Document.write('fizzbuzz') }
  else if (x%3 === 0) {Document.write('fizz') }
  else if (x%5 === 0) {Document.write('buzz') }
  else { Document.write(' ' + x + ' ') }
}
console.log(summ, result);
