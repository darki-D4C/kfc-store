import React from "react";
import { CategoryView } from "./CategoryView";

type MyProps = {
    categories: Category[]
};

type MyState = {
}

type Category = {
    name: string;
    items: []
}


// For some reason TS misinterprets MyProps categories property and thinks that this is App[] - very weird
class Menu extends React.Component<MyProps, MyState> {

    categoriesItems = this.props.categories
    categories = this.categoriesItems.map(cat => cat.name)

    render() {
        return (
            <div>
                <div className="anchor-menu">
                    {this.categories.map(name =>
                        <div className="anchor-item" key={name}>
                            <a className="category-anchor" href={"#" + name}> {name} </a>
                        </div>)
                    }
                </div>
                <div className="categories">
                    {this.categoriesItems.map(category =>
                        <CategoryView key={category.name} name={category.name} items={category.items}/>)
                    }
                </div>
            </div>
        );
    }
}

export { Menu }