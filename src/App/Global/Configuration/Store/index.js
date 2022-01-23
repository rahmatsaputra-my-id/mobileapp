import { Platform } from "react-native";
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { env } from "../Constants";
import { defaultState, rootReducer } from "../Reducer";

let reducer = false;
if (Platform.OS == "android" || Platform.OS == "ios") {
  const createSensitiveStorage = require("redux-persist-sensitive-storage");
  const storageApp = createSensitiveStorage.default({
    keychainService: "myKeychain",
    sharedPreferencesName: "mySharedPrefs"
  });

  reducer = persistReducer(
    {
      key: env.reactAppReducerKey,
      timeout: 30000,
      storage: storageApp
    },
    rootReducer
  );
}

const store = createStore(
  reducer,
  defaultState
);

const persistor = persistStore(store);
export { persistor, store };