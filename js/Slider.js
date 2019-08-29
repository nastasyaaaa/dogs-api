class SliderManager {

	constructor() {
		this.slideIndex = 1;
	};

	makeSlider(images) {

		const slider = document.createElement('div');
		slider.classList.add('slider');

		for(let i = 0; i < images.length; i++){
			
			let item = document.createElement('div');
			let img = document.createElement('img');

			item.classList.add('item');
			img.src = images[i];

			if(i !== 0){
				item.style.display = 'none';
			}

			item.appendChild(img);
			slider.appendChild(item);	
		}


		const nextBtn = document.createElement('a');
		const lastBtn = document.createElement('a'); 
		
		lastBtn.innerText = '<';
		nextBtn.innerText = '>';

		lastBtn.classList.add('prev');
		nextBtn.classList.add('next');


		lastBtn.addEventListener('click', this.lastBtnClick.bind(this));
		nextBtn.addEventListener('click', this.nextBtnClick.bind(this));


		slider.appendChild(lastBtn);
		slider.appendChild(nextBtn);


		return slider;

	};

	lastBtnClick(event) {
		this.showSlides(this.slideIndex -= 1);  
	};

	nextBtnClick(event) {
		this.showSlides(this.slideIndex += 1);  
	};

	showSlides(n)  {
		let slides = document.getElementsByClassName("item");
		
		if (n > slides.length) {
			this.slideIndex = 1
		}
		if (n < 1) {
			this.slideIndex = slides.length
		}
		
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		slides[this.slideIndex - 1].style.display = "block";
	};


}