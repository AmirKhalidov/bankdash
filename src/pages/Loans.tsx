import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoans, filterLoans, removeLoan } from "../redux/loanSlice";
import { type RootState, type AppDispatch } from "../services/store";
import AppModal from "../components/AppModal";
import styles from "../styles/Loans.module.css";

const Loans: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loans = useSelector((state: RootState) => state.loans.filteredLoans);
  const loading = useSelector((state: RootState) => state.loans.loading);
  const error = useSelector((state: RootState) => state.loans.error);

  const [isCustomModalOpen, setCustomModalOpen] = useState(false);
  const [isRepaidModalOpen, setRepaidModalOpen] = useState(false);
  const [selectedLoanId, setSelectedLoanId] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchLoans());
  }, [dispatch]);

  const handleFilter = (
    amountStr: "50000" | "100000" | "200000" | "custom"
  ) => {
    if (amountStr === "custom") {
      setCustomModalOpen(true);
    } else {
      const amount = parseInt(amountStr);
      dispatch(filterLoans((loan) => loan.loanMoney >= amount));
    }
  };

  const handleApplyCustom = () => {
    if (customAmount !== null) {
      dispatch(filterLoans((loan) => loan.loanMoney >= customAmount));
      setCustomModalOpen(false);
    }
  };

  const handleRepaid = (loanId: number) => {
    setSelectedLoanId(loanId);
    setRepaidModalOpen(true);
  };

  const handleConfirmRepaid = () => {
    if (selectedLoanId !== null) {
      dispatch(removeLoan(selectedLoanId));
      setRepaidModalOpen(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className={styles.filtersContainer}>
        <div
          className={styles.filterCard}
          onClick={() => handleFilter("50000")}
        >
          <div className={styles.iconContainer}>
            <img
              src="./src/assets/services/bankservice-4.png"
              alt="icon1"
              className={styles.icon}
            />
          </div>
          <div className={styles.filterSubtitle}>Get loans above $50k</div>
          <div className={styles.filterTitle}>50,000</div>
        </div>
        <div
          className={styles.filterCard}
          onClick={() => handleFilter("100000")}
        >
          <div className={styles.iconContainer}>
            <img
              src="./src/assets/services/bankservice-2.png"
              alt="icon2"
              className={styles.icon}
            />
          </div>
          <div className={styles.filterSubtitle}>Loans above $100k</div>
          <div className={styles.filterTitle}>100,000</div>
        </div>
        <div
          className={styles.filterCard}
          onClick={() => handleFilter("200000")}
        >
          <div className={styles.iconContainer}>
            <img
              src="./src/assets/services/bankservice-3.png"
              alt="icon3"
              className={styles.icon}
            />
          </div>
          <div className={styles.filterSubtitle}>Loans above $200k</div>
          <div className={styles.filterTitle}>200,000</div>
        </div>
        <div
          className={styles.filterCard}
          onClick={() => handleFilter("custom")}
        >
          <div className={styles.iconContainer}>
            <img
              src="./src/assets/services/custom-loans.png"
              alt="icon4"
              className={styles.icon}
            />
          </div>
          <div className={styles.filterSubtitle}>Choose your amount</div>
          <div className={styles.filterTitle}>Custom</div>
        </div>
      </div>

      <h2 className={styles.heading}>Active Loans Overview</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Loan Money</th>
            <th>Left to pay</th>
            <th>Duration</th>
            <th>Interest rate</th>
            <th>Installment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <tr key={loan.id}>
              <td>{index + 1}</td>
              <td>${loan.loanMoney?.toLocaleString() || "0"}</td>
              <td>${loan.leftToPay?.toLocaleString() || "0"}</td>
              <td>{loan.duration}</td>
              <td>{loan.interestRate}</td>
              <td>${loan.installment}</td>
              <td>
                <button onClick={() => handleRepaid(loan.id)}>Repaid</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AppModal
        isOpen={isCustomModalOpen}
        onClose={() => setCustomModalOpen(false)}
        title="Choose Money"
      >
        <input
          type="number"
          placeholder="Enter amount"
          value={customAmount ?? ""}
          onChange={(e) => setCustomAmount(Number(e.target.value))}
        />
        <button onClick={handleApplyCustom}>Apply</button>
      </AppModal>

      <AppModal
        isOpen={isRepaidModalOpen}
        onClose={() => setRepaidModalOpen(false)}
        title="Confirm Payment"
      >
        <p>Are you sure you want to pay this loan?</p>
        <button onClick={handleConfirmRepaid}>Yes</button>
        <button onClick={() => setRepaidModalOpen(false)}>No</button>
      </AppModal>
    </div>
  );
};

export default Loans;
