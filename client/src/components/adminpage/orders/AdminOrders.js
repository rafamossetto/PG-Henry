import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPayments } from "../../../actions/orders";
import { isAdmin } from "../../../actions/users";
import StyledDiv from "./OrderStyles";
import { getTokenLocalStorage } from "../../../reducer/reducer";
function AdminOrders() {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);
  let [admin, setAdmin] = useState(null);
  let [statusFilter, setStatusFilter] = useState(null);

  useEffect(() => {
    let verifyAdmin = async () => {
      const authorized = await isAdmin();
      setAdmin(authorized);
    };
    verifyAdmin();
    dispatch(getPayments());
  }, []);

  function handleFilterStatus(e) {
    setStatusFilter(e.target.value === "All" ? null : e.target.value);
  }

  useEffect(() => {
    console.log(statusFilter);
  }, [statusFilter]);

  let odd = "odd";

  return (
    <StyledDiv>
      <h1>Orders List</h1>
      {admin ? (
        <div className="listContainer">
          <div className="listItem">
            <h3 className="userId orderTitle">Id</h3>
            <h3 className="userEmail orderTitle">Client e-mail</h3>
            <div className="paymentStatus">
              <h3 className="orderTitle">Status</h3>
              <select onChange={(e) => handleFilterStatus(e)}>
                <option>All</option>
                <option>approved</option>
                <option>in_process</option>
                <option>rejected</option>
              </select>
            </div>
          </div>
          {payments &&
            payments
              .filter((el) => (statusFilter ? el.status === statusFilter : el))
              .map((el) => {
                return (
                  <>
                    {payments
                      .filter((el) =>
                        statusFilter ? el.status === statusFilter : el
                      )
                      .indexOf(el) %
                      2 ===
                    0 ? (
                      <div className="listItem">
                        <h4 className="userId">{el.id}</h4>
                        <h4 className="userEmail">{el.email || "--"}</h4>
                        <h4 className="paymentStatus">{el.status}</h4>
                      </div>
                    ) : (
                      <div className={`listItem ${odd}`}>
                        <h4 className="userId">{el.id}</h4>
                        <h4 className="userEmail">{el.email || "--"}</h4>
                        <h4 className="paymentStatus">{el.status}</h4>
                      </div>
                    )}
                  </>
                );
              })}
        </div>
      ) : (
        <h1>You are not and admin</h1>
      )}
    </StyledDiv>
  );
}

export default AdminOrders;
