
import './App.css';
import Header from './view/compenents/Header'
import Fotter from './view/compenents/Fotter'
import ContentNavs from './view/compenents/ContentNav.js'
import RouterIndex from './view/router/index'
// const helloWorld = 'Hellp WOrld'
function App () {
  return (
    <div className="App">
      {/* <Header />
      <ContentNavs />
      <Fotter /> */}

      <RouterIndex />
    </div>
  );
}
// TodoItem.defaultProps = {
//   test: 'hello word'
// }
export default App;
