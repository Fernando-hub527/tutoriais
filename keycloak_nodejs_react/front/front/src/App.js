import PrivateRoute from './infra/PrivateRouts';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <PrivateRoute><HomePage /></PrivateRoute>
    </div>
  );
}

export default App;
