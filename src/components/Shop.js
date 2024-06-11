// import React from "react";
// import { useDispatch } from "react-redux";
// //import { bindActionCreators } from "redux";
// import { actionCreaters } from "../State";

// const Shop = () => {
//     const dispatch = useDispatch();
//   return (
//     <div>
//       <h2>Deposit/Withdraw Money</h2>
//       <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreaters.withdrawMoney(50))}}>-</button>
//       Update Balance
//       <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreaters.depositMoney(50))}}>+</button>
//     </div>
//   );
// };

// export default Shop;

import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../State";

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreaters, dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(50)}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(50)}}>+</button>
    </div>
  );
};

export default Shop;

