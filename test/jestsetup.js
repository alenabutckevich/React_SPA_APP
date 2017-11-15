const sass = require('node-sass');

const { shallow, render, mount, configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.shallow = shallow;
global.render = render;
global.mount = mount;

configure({ adapter: new Adapter() });

console.error = message => {
   throw new Error(message);
};