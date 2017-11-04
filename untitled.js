	animals = [
		{name: 'beatrice', species: 'bat'}, 
		{name: 'frank', species: 'hedgehog'}
	]

	
	var newAr = animals.filter(function(pookie) {
		return pookie.name === 'frank'
	})

	console.log(newAr)