import './App.css';
import AppRouter from './Routes/AppRouter';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
