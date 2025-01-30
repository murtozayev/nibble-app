import { MouseEventHandler } from "react"

export interface IntialState {
    authHeader: "login" | "register"
    isAuth: boolean
    loading: boolean,
    data: FoodData | undefined,
    isShowAbout: boolean
    isShowCart: boolean
    isShowDelivery: boolean
    checkout: boolean
    search: boolean
    searchTerm: FoodData[] | null
    category: FoodData[] | null
    showCategory: boolean
    restaurant: FoodData[]
    showRestaurant: boolean
    orders: CartType[],
    order: CartType
    showMap: boolean
    tabletSearch: boolean
}

export interface ControllerType {
    mapData(data: Data, callback: Function): Data
}

export interface CarouselType {
    src: string
}

export interface Data {
    _id: string
    count: number
    onclick: MouseEventHandler<HTMLDivElement>
}

export interface FoodData {
    _id: string
    image: string
    name: string
    price: number
    category: string
    favourite: boolean
    delivery: string | number
    time: string
    rate: number
    restaurant: string
}

export interface CartType {
    author: string
    productImage: string
    productName: string
    productPrice: number
    productCategory: string
    productQuantity: number
    _id: string
}