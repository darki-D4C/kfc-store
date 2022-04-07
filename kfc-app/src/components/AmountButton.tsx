import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type {AppDispatch, RootState} from "./../store/store"
import { addItem, removeItem } from "../store/actionCreators";

type MyState = {
    amount: number;
    cost: number;
    name: string;
}

type MyProps = {
    cost: number;
    name: string;
}

const AmountButton = (props: MyProps, state: MyState) => {
    
    const name = props.name
    const cost = props.cost
    const dispatch = useDispatch<AppDispatch>()

    const amount = useSelector((store:RootState) => {
        const item = store.items.find(x => x.name === name);
        return !item ? 0 : item.amount
    })

    const handleIncrease = e => {
        dispatch(addItem({cost:cost,name:name}))
    };
    const handleDecrease = e => {
        dispatch(removeItem({cost:cost,name:name}))
    };

    return (
        <div className="amount-button">
                {amount === 0 ?
                    <div className=" amount-button-zero " onClick={handleIncrease}><FaPlus /></div> :
                    <div className=" amount-button-positive"><FaMinus onClick={handleDecrease} />{amount}<FaPlus onClick={handleIncrease}/></div>}
        </div>
    );
};

export default AmountButton;