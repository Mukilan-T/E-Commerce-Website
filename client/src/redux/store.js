import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";


export default configureStore({
    reducer:{
        cart: cartReducer,
    },
});

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);