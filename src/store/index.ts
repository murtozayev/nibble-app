import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType, FoodData, IntialState } from "../interfaces/interface";

const intialState: IntialState = {
    authHeader: "login",
    isAuth: false,
    loading: false,
    data: undefined,
    isShowAbout: false,
    isShowCart: false,
    isShowDelivery: false,
    checkout: false,
    search: false,
    searchTerm: null,
    category: null,
    showCategory: false,
    restaurant: [],
    showRestaurant: false,
    orders: JSON.parse(localStorage.getItem("orders") || "[]") || [],
    order: JSON.parse(localStorage.getItem("order") || "[]") || [],
    showMap: false,
    tabletSearch: false
}

const nibbleSlice = createSlice({
    name: "nibble",
    initialState: intialState,
    reducers: {
        setAuthHeader(state, action: PayloadAction<"register" | "login">) {
            state.authHeader = action.payload
        },
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },

        setData(state, action: PayloadAction<FoodData>) {
            state.data = action.payload
        },
        setShowAbout(state, action: PayloadAction<boolean>) {
            state.isShowAbout = action.payload
        },
        setShowCart(state, action: PayloadAction<boolean>) {
            state.isShowCart = action.payload
        },
        setShowDelivery(state, action: PayloadAction<boolean>) {
            state.isShowDelivery = action.payload
        },
        setCheckOut(state, action: PayloadAction<boolean>) {
            state.checkout = action.payload
        },
        setSearch(state, action: PayloadAction<boolean>) {
            state.search = action.payload
        },
        setSearchTerm(state, action: PayloadAction<any>) {
            state.searchTerm = action.payload
        },
        setCategory(state, action: PayloadAction<FoodData[]>) {
            state.category = action.payload
        },
        setShowCategory(state, action: PayloadAction<boolean>) {
            state.showCategory = action.payload
        },
        setAddRes(state, action: PayloadAction<FoodData[]>) {
            state.restaurant = action.payload
        },
        setShowRestaurant(state, action: PayloadAction<boolean>) {
            state.showRestaurant = action.payload
        },
        setOrders(state, action: PayloadAction<CartType[]>) {
            state.orders = action.payload

            return localStorage.setItem("orders", JSON.stringify(state.orders))
        },
        setOrder(state, action: PayloadAction<CartType>) {
            state.order = action.payload

            return localStorage.setItem("order", JSON.stringify(state.order))
        },
        setShowMap(state, action: PayloadAction<boolean>) {
            state.showMap = action.payload
        },
        setTabletSearch(state, action: PayloadAction<boolean>) {
            state.tabletSearch = action.payload
        }
    }
});

export const store = configureStore({
    reducer: {
        nibble: nibbleSlice.reducer
    }
})

export const { setAuthHeader, setAuth, setLoading, setData, setShowAbout, setShowCart, setShowDelivery, setCheckOut, setSearch, setSearchTerm, setCategory, setShowCategory, setAddRes, setShowRestaurant, setOrders, setOrder, setShowMap, setTabletSearch } = nibbleSlice.actions

export type RootType = ReturnType<typeof store.getState>