import "../css/styles.css"
import {handler} from "./handler"
import {Utils} from "./Utils"

const utils = new Utils();

// add event listeners
document.getElementById('list').addEventListener('click', handler.onBreedClick);


utils.makeRequest('https://dog.ceo/api/breeds/list/all')
.then(
	utils.makeList.bind(utils),
	error => alert(`Rejected: ${error}`)
);


const search = document.querySelector('input[name=search]');
search.addEventListener('keyup', handler.onSearchKeyUp);

