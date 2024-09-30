import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import DexPage from './pages/Dex';
import MapPage from './pages/Map';
import NavigationBar from './components/NavigationBar';
import NavigationButton from './components/NavigationButton';

const routes = [
  { key: 'home', label: 'Home', path: '/', element: <HomePage /> },
  { key: 'map', label: 'Map', path: '/map', element: <MapPage /> },
  { key: 'dex', label: 'DEX', path: '/dex', element: <DexPage /> },
];

function App() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '24px',
        backgroundColor: '#4c4c4c',
      }}
    >
      <NavigationBar>
        {routes.map((route) => (
          <NavigationButton
            key={`${route.key}-button`}
            onClick={() => navigate(route.path)}
            label={route.label}
          />
        ))}
      </NavigationBar>
      <Routes>
        {routes.map((route) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
