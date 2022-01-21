import { Platform, Alert } from 'react-native';
import { createMemoryHistory, createBrowserHistory } from 'history';

/**
 *
 * @param {*} navName
 * @param {*} params
 * @param {props} props required
 */

export const history = Platform.OS == "android" ? false : (Platform.OS == "ios" ? createMemoryHistory() : createBrowserHistory());
export const NavigateTo = (navName, params = false, props = false) => {
  if (Platform.OS == "web") {
    const history = createBrowserHistory();
    history.push(navName);
  } else {
    if (!props) { Alert.alert("Props is required"); return; }
    setTimeout(() => {
      props.navigation.navigate(navName, params)
    }, 500);
  }
}
