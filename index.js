// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"]

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//     console.log(`I wrapped ${gifts[i]} and added a bow!`)
//     }
//     return gifts;
// };

// wrapGifts(gifts);


function writeCards(friends, occasion) {
    const  writingCards = [];   
    for (let i = 0; i < friends.length; i++) {
            writingCards.push(`Thank you, ${friends[i]}, for the wonderful ${occasion} gift!`);
        };
    return writingCards;
}

writeCards([`Lisa`, `Kaitlin`, `Jan`], `surprise`);



function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number--;
    };

}

countDown(10);