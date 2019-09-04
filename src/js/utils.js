import {SliderManager} from "./Slider"

export const utils = {

	rawBreeds :  [],
	breeds :  [],

	makeRequest : function(url){

		return new Promise((resolve, reject) => {

			const xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.responseType = 'json';

			xhr.send();

			xhr.onload = function(){
				resolve(xhr.response.message);
			};
		});
	},

	makeList : function(breeds) {

		this.rawBreeds = breeds;
		this.breeds = Object.keys(breeds);

		document.getElementById('list').appendChild(this.createBreedList(this.breeds));
	},

	createBreedList : function(breeds, parent = null) {

		let ul = document.createElement('ul');


		for(let i = 0; i < breeds.length; i++){

			let li = document.createElement('li');

			if(parent){
				li.dataset.parentBreed = parent;
			}

			if( Array.isArray(this.rawBreeds[breeds[i]]) && this.rawBreeds[breeds[i]].length > 0 ){
				
				const title = document.createElement('h5');
				title.innerText = breeds[i];
				li.appendChild(title);

				li.appendChild(this.createBreedList( this.rawBreeds[breeds[i]], breeds[i] ));
			}else{
				li.innerText = breeds[i];
				li.classList.add("js-show-images");
			}


			ul.appendChild(li);
		}


		return ul;
	},

	showDogCard : function(breed, images) {

		const sliderContainer = document.getElementsByClassName('slider-container')[0];
		const imageContainer = document.getElementById('image-container');
		const title = document.getElementById('title');

		if(imageContainer.style.display === 'none'){
			imageContainer.style.display = 'block';
		}

		while(sliderContainer.firstChild){
			sliderContainer.removeChild(sliderContainer.firstChild);
		}

		const sliderManager = new SliderManager();
		sliderContainer.appendChild(sliderManager.makeSlider(images));

		title.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);
	}
};