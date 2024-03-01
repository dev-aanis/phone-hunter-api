// how to get sokina instagram from dreamGirl?



const dreamGirl = [
 {
 sokina: {
  name: "bbu",
  height: "5.4",
  family: [{ father: "rock", mother: "shila", sister: "chinki" }],
  age: undefined,
  contactInfo: [
  {
   facebook: {
   link: "https://www.facebook.com/",
   followers: "12545",
   status: "single",
   friendsList: [{ name: "rofik" }, undefined],
   },
  },
  { instagram: "https://www.instagram.com/" },
  ],
 },
 },
];

const sonikaInsta = dreamGirl[0].sokina.contactInfo[1].instagram;
console.log(sonikaInsta);



// Can you get the phones that doesn't cost 500 ? Which one is correct?

const phones = [
 { name: "sony", price: 500 },
 { name: "apple", price: 700 },
 { name: "sony", price: 700 },
];
const myphones =phones.filter((phone) => phone.price != 500)
console.log(myphones);
const yespr = phones.filter((phone) => phone.price == 500)
console.log(yespr);