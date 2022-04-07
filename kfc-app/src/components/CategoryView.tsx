import React from "react";
import { Item } from "./Item";

type CategoryViewProps = {
  name:string;
  items:TItem[]
};

type MyState = {
};

type TItem = {
  name: string
  cost: number
  tag: string
  image:string
}

class CategoryView extends React.Component<CategoryViewProps, MyState> {
  
  render() {
    return (
      <div className="category" id={this.props.name}>
        <h1>{this.props.name}</h1>
        <div className="items-menu">
            {this.props.items.map(item => 
                <Item key={item.name} cost={item.cost} name={item.name} tag={item.tag} image={item.image}/>
            )}
        </div>
      </div>
    );
  }
}

export{CategoryView}