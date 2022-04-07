import React from "react";
import  AmountButton  from "./AmountButton";
import { FaRubleSign } from "react-icons/fa";

type ItemProps = {
	cost: number;
	name: string;
	tag: string;
	image: string;
}

class Item extends React.Component<ItemProps, any> {
	render() {
		return (
			<div className="item">
				<div className="image-box">
					<div className="image">
						<img src={this.props.image} alt=""/>
						<AmountButton name={this.props.name} cost={this.props.cost}/>
					</div>
				</div>
				<div className="properties-box">
					<div className="name-box">{this.props.name}</div>
					<div className="cost-box">{this.props.cost} <FaRubleSign/></div>
				</div>
			</div>
		);
	}
}

export { Item }