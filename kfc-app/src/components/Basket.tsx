import React from "react";
import { BsMenuUp, BsFillBasket2Fill } from "react-icons/bs";
import { FaRubleSign } from "react-icons/fa";
import { useSelector, shallowEqual,useDispatch} from "react-redux";
import { RootState } from "../store/store";
import type {AppDispatch} from "./../store/store"
import { emptyBasket } from "../store/actionCreators";



const Basket = (props) => {
	const amount = useSelector((state:RootState) => state.cost, shallowEqual)
	const items = useSelector((state:RootState) => state.items, shallowEqual)
	const dispatch = useDispatch<AppDispatch>()
	
	const finishOrder = () =>{
		if(!props.valid) return
		console.log(items)
		dispatch(emptyBasket())
	}

    return (
		<div className='top-bar'>
			<div className='Menu-icon'>
				<BsMenuUp />
			</div>
			<div className='basket' onClick={finishOrder}>
				{amount} <FaRubleSign/> <BsFillBasket2Fill />
			</div>
		</div>
	);
};


export default Basket