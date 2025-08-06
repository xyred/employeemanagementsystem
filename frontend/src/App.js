import './App.css';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management System</h1>
      </header>
      <main>
        <EmployeeTable />
      </main>
    </div>
  );
}

export default App;