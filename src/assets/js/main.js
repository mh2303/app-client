let backendHost = 'http://localhost:4500'

;( async  () => {
	let response = await fetch(backendHost + '/api/data')
	let users  = await response.json()
	for (let user of users) {
		let li = document.createElement('li')
		li.textContent = user.username

		list.append(li)
	}
})()