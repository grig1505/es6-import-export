import  getRandomColor  from '../src/utils';

export default function initApp() {
    const button = document.querySelector('.button');
    button.addEventListener('click', getRandomColor);  

    console.log('Hello world');
}