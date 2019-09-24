import _ from 'lodash';
import './style.css';
import Logo from './Logo.svg';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const myLogo = new Image();
    myLogo.scr = Logo;

    element.appendChild(myLogo);

    return element;
}

document.body.appendChild(component());