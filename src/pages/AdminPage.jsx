import React from 'react';
import AddProduct from '../Components/product/AddProduct';


const AdminPage = () => {
  return (
    <div>
      <h2 className='admin' >Admin Panel</h2>
      <AddProduct />
    </div>
  );
};

export default AdminPage;