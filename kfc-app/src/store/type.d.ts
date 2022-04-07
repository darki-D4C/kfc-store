interface IItem {
    name: string
    cost: number
}

type IItems = {
    name:string
    cost:number
    amount:number
}

type BasketState = {
    items: IItems[],
    cost: number
}

type ItemAction = {
    type: string
    item?: IItem
}

type BaskeytAction = {
    type: string
}

type DispatchType = (args: ItemAction) => ItemAction