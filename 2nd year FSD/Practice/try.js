 // exp 1 
const EventEmitter = require('events'); 
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

myEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}! See you soon.`);
});

myEmitter.emit('greet', 'Aman');
myEmitter.emit('farewell', 'Aman');

/*// exp 2
const EventEmitter = require('events');
class button extends EventEmitter {}
const myButton = new button();
myButton.on('click', () => console.log('Button clicked!'));
myButton.on('mouseover', () => console.log('Mouse over the button!'));
myButton.emit('click');
myButton.emit('mouseover');*/
