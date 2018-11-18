var NanoTimer = require('nanotimer');
var timer = new NanoTimer();

// We should set a timeout, every 10 milliseconds we want to update with a new time on the web page
// Need to keep track of minutes, seconds, and hundredths globally such that a user can pause and start counting from where they left off, or reset to 0
// I'm thinking we set up a net socket? Or are using bluetooth? Unclear for now\
// On receiving a cmd from the app, do stuff
// Develop protocol for start/stop.
