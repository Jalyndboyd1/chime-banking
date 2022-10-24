import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      {/* Login || Dashboard Depending on User Auth */}
      {/* <Login /> */}
      <Dashboard />
    </div>
  );
}

export default App;
