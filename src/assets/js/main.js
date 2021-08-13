let backendHost = 'https://super-muper-back-app.herokuapp.com'

;( async  () => {
	let response = await fetch(backendHost + '/api/data')
	let users  = await response.json()
	for (let user of users) {
		let li = document.createElement('li')
		li.textContent = user.username

		list.append(li)
	}
})()