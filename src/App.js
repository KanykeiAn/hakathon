import AuthContextProvider from './contexts/AuthContextProvider';
import Navbar from './Components/Header/Navbar';
import MainRoutes from './routes/MainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
    </AuthContextProvider>
    </>
  );
}

export default App;
