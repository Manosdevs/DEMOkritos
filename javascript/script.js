/// Scroll to elements
const scrollButtons = Array.from(document.querySelector('#nav-list').children)
scrollButtons.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		let id = document.querySelector(
			`#${e.target.innerHTML.split(' ').join('').toLowerCase()}`
		)

		id.scrollIntoView({
			behavior: 'smooth',
			inline: 'start',
		})
	})
})

/// Teams Carousel
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const teamCar = document.querySelector('.carousel-list')

const index = Array.from(teamCar.children)

let current = 0

next.addEventListener('click', () => {
	current += 1
	if (current > index.length - 1) {
		current = 0
	}
	index[current].scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
		block: 'nearest',
	})
})

prev.addEventListener('click', () => {
	current -= 1
	if (current < 0) {
		current = 0
	}
	index[current].scrollIntoView({
		behavior: 'smooth',
		inline: 'start',
		block: 'nearest',
	})
})
