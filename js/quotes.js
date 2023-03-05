const quotes = [
	{
		quote: "The yaga mat is a good place to turn when walk therapy and antidepressants aren't enough.",
		author: 'Amy weintraub',
	},
	{
		quote: 'Concentrating on poses clears the mind, while focusing on the breath helps the body shift out of fight-or-flignh mode.',
		author: 'Melanie Haiken',
	},
	{
		quote: 'Yoga is 99% practice and 1% theory.',
		author: 'K.Pattabhi Jois',
	},
	{
		quote: "You don't have to be flexible to do yoga, you just have to be willing to shake the dust off and see what happens.",
		author: 'David Good',
	},
	{
		quote: "Yoga is the foutain of youth. You're only as young as your spine is flexible.",
		author: 'Bob Haper',
	},
	{
		quote: 'Yoga takes us to the present moment, the only place where life exists.',
		author: 'Ellen Brenneman',
	},
	{
		quote: 'Why should you renounce everything? You are all right as you are, following the middle...',
		author: 'Ramakrishna',
	},
	{
		quote: "In truth, yoga doesn't 'take time' - it gives time.",
		author: 'Ganga White',
	},
	{
		quote: "The yaga mat is a good place to turn when walk therapy and antidepressants aren't enough.",
		author: 'Amy weintraub',
	},
];

const quote = document.querySelector('#quote .quote');
const author = document.querySelector('#quote .author');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
