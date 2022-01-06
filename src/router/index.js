import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Routes = () => useRoutes([
  {
    path: '/',
    element: <HomePage />
  }
]);

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
