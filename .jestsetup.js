import {
	shallow,
	render,
	mount,
	configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

// Fail tests on any warning
console.error = message => { // eslint-disable-line no-console
	throw new Error(message);
};
