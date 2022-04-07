import * as actionTypes from "./actionTypes"

export function addItem(item: IItem) {
  return {
    type: actionTypes.ADD_ITEM,
    item,
  }
}

export function emptyBasket() {
  return {
    type: actionTypes.EMPTY_BASKET,
  }
}

export function setBasketValidity() {
  return {
    type: actionTypes.EMPTY_BASKET,
    
  }
}

export function removeItem(item: IItem) {
  return {
    type: actionTypes.REMOVE_ITEM,
    item,
  }
}