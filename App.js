import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ListRouteComponent from './screens/list.js'
import BooksRouteComponent from './screens/books.js'

const AppNavigator = createStackNavigator({
  "ListRoute": ListRouteComponent,
  "BooksRoute": BooksRouteComponent,
})

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}
