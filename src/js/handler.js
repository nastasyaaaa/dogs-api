import {utils} from "./utils";


export function onBreedClick(event) {

	event.preventDefault();
	const target = event.target;

	if(target.classList.contains('js-show-images')){

		const breed = event.target.innerText;

		if(target.dataset.parentBreed){
			const parentBreed = target.dataset.parentBreed;

			utils.makeRequest(`https://dog.ceo/api/breed/${parentBreed}/${breed}/images/random/10`)
				.then( (images) => utils.showDogCard(`${parentBreed}  ${breed}`, images) );
		}else{

			utils.makeRequest(`https://dog.ceo/api/breed/${breed}/images/random/10`)
				.then( (images) => utils.showDogCard(breed, images) );
		}
	}

}

export function onSearchKeyUp(event) {

	const target = event.target;
	const search = target.value;

	let breeds = document.getElementById('list').firstChild.children;

	for(let i = 0; i < breeds.length; i++){

		if(breeds[i].innerText.search(search) === -1 && search){
			breeds[i].style.display = 'none';
		}else{
			breeds[i].style.display = 'block';
		}

	}
}