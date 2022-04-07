import { Store, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

const store: Store<BasketState, ItemAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk))

export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch