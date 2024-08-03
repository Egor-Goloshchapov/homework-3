const result = 5 + 5 + "5";
console.log(result);



let email = "egorans.070710@gmail.com";
if (email.includes('@')) {
    console.log('Email contains the @ symbol');
} else {
    console.log('Email does NOT contain the @ symbol');
}
let totalCharacters = email.length;
console.log(`The total number of characters in the email: ${totalCharacters}`);



const me = "My";
const name = "name";
const is = "is";
const information = `${me} ${name} ${is} Viktor`;
console.log(information);



const userName = "Egor";
const payment = "300 гривень";
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);