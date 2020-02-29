import { NavigationActions, NavigationContainerComponent, NavigationParams } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params?: NavigationParams) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator
};
