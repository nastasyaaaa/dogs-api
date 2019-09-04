import "../css/styles.css"
import {onBreedClick, onSearchKeyUp} from "./handler"
import {utils} from "./utils"

// add event listeners
document.getElementById('list').addEventListener('click', onBreedClick);


utils.makeRequest('https://dog.ceo/api/breeds/list/all')
.then(
	utils.makeList.bind(utils),
	error => alert(`Rejected: ${error}`)
);


const search = document.querySelector('input[name=search]');
search.addEventListener('keyup', onSearchKeyUp);

