import Footer from './Components/footer/Footer';
import Navbar from './Components/Header/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import ProductContexProvider from './contexts/ProductContextProvider';
import MainRoutes from './routes/MainRoutes';


function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContexProvider>
          <CartContextProvider>
            <Navbar />
            <MainRoutes />
          <Footer/>
          </CartContextProvider>
        </ProductContexProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
