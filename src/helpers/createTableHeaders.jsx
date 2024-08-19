function createTableHeaders (array, forbiddenKey) {
	let initArray = []
	array.forEach((obj) => {
		Object.keys(obj).forEach((el) => {
			if(el === forbiddenKey) return
			initArray.push(el)
		})
	})
	return [...new Set(initArray)]
}

function isTableWithoutColumn(element, list) {
	return !list.includes(element)
}

export {createTableHeaders, isTableWithoutColumn}
