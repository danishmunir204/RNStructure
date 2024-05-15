import {ParamListBase, RouteProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

//Mention all the screens stack here.
export type TAuthStack = {
  FirstComponent: undefined;
  SecondComponent: undefined;
};

//Make each stack here. with sharing the props if any from one one screen to other.
export type TAuthScreen<T extends keyof TAuthStack> = React.FC<
  StackScreenProps<TAuthStack, T>
>;

declare type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: StackNavigationProp<ParamList>;
    }>
  | React.ComponentType<{}>;


 // Define your TScreen type
  export type TScreen<Stack extends ParamListBase> = {
  //* commonly used.
  key: React.Key;
  name: keyof Stack;
  component: ScreenComponentType<Stack, keyof Stack> | React.FC<any>;
  options?: StackNavigationOptions;
};
