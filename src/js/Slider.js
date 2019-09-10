export class SliderManager {

	constructor() {
		this.slideIndex = 1;
	}

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

		slider.appendChild(this.makeLastBtn());
		slider.appendChild(this.makeNextBtn());


		return slider;
	}

	makeLastBtn()
	{
		const lastBtn = document.createElement('a');

		lastBtn.innerText = '<';
		lastBtn.classList.add('prev');
		lastBtn.addEventListener('click', this.lastBtnClick.bind(this));

		return lastBtn;
	}

	makeNextBtn()
	{
		const nextBtn = document.createElement('a');

		nextBtn.innerText = '>';
		nextBtn.classList.add('next');
		nextBtn.addEventListener('click', this.nextBtnClick.bind(this));

		return nextBtn;
	}

	lastBtnClick(event) {
		this.showSlides(this.slideIndex -= 1);  
	}

	nextBtnClick(event) {
		this.showSlides(this.slideIndex += 1);  
	}

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
	}


}