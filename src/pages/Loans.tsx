import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLoans,
  filterLoansByAmount,
  removeLoan,
} from "../redux/loanSlice";
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
      dispatch(filterLoansByAmount(amount));
    }
  };

  const handleApplyCustom = () => {
    if (customAmount !== null) {
      dispatch(filterLoansByAmount(customAmount));
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
          <div className={styles.cardContent}>
            <div className={styles.iconContainer}>
              <img
                src="./src/assets/services/bankservice-4.png"
                alt="icon1"
                className={styles.icon}
              />
            </div>
            <div className={styles.textContent}>
              <div className={styles.filterSubtitle}>Personal Loans</div>
              <div className={styles.filterTitle}>$50,000</div>
            </div>
          </div>
        </div>
        <div
          className={styles.filterCard}
          onClick={() => handleFilter("100000")}
        >
          <div className={styles.cardContent}>
            <div className={styles.iconContainer}>
              <img
                src="./src/assets/services/bankservice-2.png"
                alt="icon2"
                className={styles.icon}
              />
            </div>
            <div className={styles.textContent}>
              <div className={styles.filterSubtitle}>Corporate Loans</div>
              <div className={styles.filterTitle}>$100,000</div>
            </div>
          </div>
        </div>

        <div
          className={styles.filterCard}
          onClick={() => handleFilter("200000")}
        >
          <div className={styles.cardContent}>
            <div className={styles.iconContainer}>
              <img
                src="./src/assets/services/bankservice-3.png"
                alt="icon3"
                className={styles.icon}
              />
            </div>
            <div className={styles.textContent}>
              <div className={styles.filterSubtitle}>Business Loans</div>
              <div className={styles.filterTitle}>$500,000</div>
            </div>
          </div>
        </div>

        <div
          className={styles.filterCard}
          onClick={() => handleFilter("custom")}
        >
          <div className={styles.cardContent}>
            <div className={styles.iconContainer}>
              <img
                src="./src/assets/services/custom-loans.png"
                alt="icon4"
                className={styles.icon}
              />
            </div>
            <div className={styles.textContent}>
              <div className={styles.filterSubtitle}>Custom Loans</div>
              <div className={styles.filterTitle}>Choose Money</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.heading}>Active Loans Overview</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Loan Money</th>
            <th>Left to repay</th>
            <th>Duration</th>
            <th>Interest rate</th>
            <th>Installment</th>
            <th>Repay</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <tr key={loan.id}>
              <td>{index + 1}</td>
              <td>${loan.loanMoney?.toLocaleString() || "0"}</td>
              <td>${loan.leftToRepay?.toLocaleString() || "0"}</td>
              <td>{loan.duration}</td>
              <td>{loan.interestRate}</td>
              <td>${loan.installment}</td>
              <td>
                <button
                  className={styles.buttonrepay}
                  onClick={() => handleRepaid(loan.id)}
                >
                  Repay
                </button>
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
        <button className={styles.buttons} onClick={handleApplyCustom}>
          Apply
        </button>
      </AppModal>

      <AppModal
        isOpen={isRepaidModalOpen}
        onClose={() => setRepaidModalOpen(false)}
        title="Confirm Payment"
      >
        <p>Are you sure you want to pay this loan?</p>
        <button className={styles.buttons} onClick={handleConfirmRepaid}>
          Yes
        </button>
        <button
          className={styles.buttons}
          onClick={() => setRepaidModalOpen(false)}
        >
          No
        </button>
      </AppModal>
    </div>
  );
};

export default Loans;
