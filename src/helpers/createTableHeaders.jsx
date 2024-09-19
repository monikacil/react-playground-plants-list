function createTableHeaders (array, forbiddenKeys) {
	let initArray = []
	array.forEach((obj) => {
		Object.keys(obj).forEach((el) => {
			forbiddenKeys.includes(el)
			if(forbiddenKeys.includes(el)) return
			initArray.push(el)
		})
	})
	return [...new Set(initArray)]
}

function isTableWithoutColumn(element, list) {
	return !list.includes(element)
}

export {createTableHeaders, isTableWithoutColumn}
