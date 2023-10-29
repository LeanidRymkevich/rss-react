import React from 'react';
import 'src/styles.scss';
import { getArticles } from './utils/APIWorking/APIWorking';

export default class App extends React.Component {
  render() {
    return <div className="hello">Hello, World!</div>;
  }
}

console.log(getArticles('red flower', 3));
