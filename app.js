const $ = document;
const _id = (id) => $.querySelector(`#${id}`);
let quotes = [
  {
    text: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
    author: 'Albert Einstein',
  },
  {
    text: 'Learn as if you will live forever, live like you will die tomorrow.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.',
    author: 'Mark Twain',
  },
  {
    text: 'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'When you change your thoughts, remember to also change your world.',
    author: 'Norman Vincent Peale',
  },
];

let textIndex = 0;

setInterval(() => {
  _id('textId').textContent = textIndex + 1;
  _id('cardText').textContent = quotes[textIndex].text;
  _id('author').textContent = quotes[textIndex].author;
  textIndex++;
  if (textIndex > quotes.length - 1) {
    textIndex = 0;
  }
}, 5000);
