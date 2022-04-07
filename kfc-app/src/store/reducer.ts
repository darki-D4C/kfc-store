import * as actionTypes from "./actionTypes"

const initialState: BasketState = {
	items: [],
	cost: 0
}

const removeItem = (arr, element : IItem) => {
	const index = arr.findIndex(p => p.name === element.name);
	if (index === -1) return arr;
	if(arr[index].amount === 1){
		return [...arr.slice(0, index), ...arr.slice(index + 1)];
	}

	return Array.from(arr, (x : IItems) => {
		if (x.name === element.name) x.amount--;
		return x
	});
}

const addItem = (arr, element : IItem) => {
	if (arr.some(item => item.name === element.name)) {

		return  Array.from(arr, (x : IItems) => {
			if (x.name === element.name) x.amount++;
			return x
		});
	}

	return arr.concat({name:element.name, cost: element.cost, amount:1});
}

const reducer = (
	state: BasketState = initialState,
	action: ItemAction
): BasketState => {
	switch (action.type) {
		case actionTypes.EMPTY_BASKET:
			return {
				...state,
				items: [],
				cost: 0
			}
		case actionTypes.ADD_ITEM:
			const updatedItemsAdded = addItem(state.items, action.item)
			return {
				...state,
				items: updatedItemsAdded,
				cost: state.cost + action.item.cost
			}
		case actionTypes.REMOVE_ITEM:
			const updatedItemsRemoved = removeItem(state.items, action.item)
			return {
				...state,
				items: updatedItemsRemoved,
				cost: state.cost - action.item.cost
			}
	}

	return state
}

export default reducer