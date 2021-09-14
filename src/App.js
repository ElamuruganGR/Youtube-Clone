// import './App.css';
import Header from './components/organisms/header';
import Main from './components/organisms/main';
import { SideBar } from './components/organisms/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-page">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
