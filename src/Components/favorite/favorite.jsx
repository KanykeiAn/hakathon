// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Button } from '@mui/material';
// import { useFavorite } from '../../contexts/FavoriteContextProvider';
// // import { Link } from 'react-router-dom';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));


// export default function Favorite() {
//   const { getFavorite, favorite, deleteFavoriteProduct, changeProductCount } = useFavorite();

//   console.log(favorite);

//   React.useEffect(() => {
//     getFavorite();
//   }, []);

//   const favoriteCleaner = () => {
//     localStorage.removeItem('favorite');
//     getFavorite();
//   };

//   return (
//     <TableContainer component={Paper} className="jkl">
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Picture</StyledTableCell>
//             <StyledTableCell align="right">Name</StyledTableCell>
//             <StyledTableCell align="right">Type</StyledTableCell>
//             <StyledTableCell align="right">Description</StyledTableCell>
//             <StyledTableCell align="right">Price</StyledTableCell>
//             <StyledTableCell align="right">Count</StyledTableCell>
//             <StyledTableCell align="right">SubPrice</StyledTableCell>
//             <StyledTableCell align="right">-</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {favorite?.products.map((row) => (
//             <StyledTableRow key={row.item.id}>
//               <StyledTableCell component="th" scope="row">
//                 <img src={row.item.picture} alt="" width="70" height="70" />
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.item.name}</StyledTableCell>
//               <StyledTableCell align="right">{row.item.type}</StyledTableCell>
//               <StyledTableCell align="right">
//                 {row.item.description}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.item.price}</StyledTableCell>

//               <StyledTableCell align="right">
//                 <input
//                   type="number"
//                   min={1}
//                   max={1000}
//                   value={row.count}
//                   onChange={(e) =>
//                     changeProductCount(e.target.value, row.item.id)
//                   }
//                 />
//               </StyledTableCell> 

//               <StyledTableCell align="right">{row.subPrice}</StyledTableCell>

//               <StyledTableCell align="right">
//                 <Button onClick={() => deleteFavoriteProduct(row.item.id)}>
//                   DELETE
//                 </Button>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
      
//        {/* <Link to="/paycard">
//         <Button className='ddd' onClick={cartCleaner}>BUY NOW FOR {cart.totalPrice}c</Button>
//       </Link> */}
//     </TableContainer>
//   );
// } 
