import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

const routes = [
  { key: 'home', label: 'Home', path: '/', element: <div>home</div> },
  { key: 'map', label: 'Map', path: '/map', element: <div>map</div> },
  { key: 'dex', label: 'DEX', path: '/dex', element: <div>dex</div> },
  { key: 'cms', label: 'CMS', path: '/cms', element: <div>cms</div> },
];

function App() {
  const navigate = useNavigate();

  return (
    <div>
      {routes.map((route) => (
        <button
          key={`${route.key}-button`}
          onClick={() => navigate(route.path)}
        >
          {route.label}
        </button>
      ))}
      <Routes>
        {routes.map((route) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
