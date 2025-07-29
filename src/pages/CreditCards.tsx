import React, { useState, useEffect } from "react";
import styles from "../styles/CreditCards.module.css";

interface Card {
  id: number;
  balance: string;
  holder: string;
  validThru: string;
  number: string;
  color: "blue" | "darkblue" | "white";
}

interface CardListItem {
  id: number;
  imgSrc: string;
  cardType: string;
  bank: string;
  cardNumber: string;
  nameOnCard: string;
}

interface CardSetting {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  action: "changePin" | "blockCard" | "googlePay" | "applePay" | "appleStore";
}

const settings: CardSetting[] = [
  {
    id: 1,
    imgSrc: "/src/assets/creditCards/Group 165.png",
    title: "Change PIN Code",
    description: "Update your card's security PIN",
    action: "changePin",
  },
  {
    id: 2,
    imgSrc: "/src/assets/creditCards/Group 166.png",
    title: "Block Card",
    description: "Temporarily disable your card",
    action: "blockCard",
  },
  {
    id: 3,
    imgSrc: "/src/assets/creditCards/Group 167.png",
    title: "Add to Google Pay",
    description: "Add this card to your Google Pay wallet",
    action: "googlePay",
  },
  {
    id: 4,
    imgSrc: "/src/assets/creditCards/Group 168.png",
    title: "Add to Apple Pay",
    description: "Add this card to your Apple Pay wallet",
    action: "applePay",
  },
  {
    id: 5,
    imgSrc: "/src/assets/creditCards/Group 168.png",
    title: "Add to Apple Store Wallet",
    description: "Add this card to your Apple Store Wallet",
    action: "appleStore",
  },
];

export default function CreditCards() {
  const [modal, setModal] = useState<null | "pin">(null);
  const [newPin, setNewPin] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const handleSettingClick = (setting: CardSetting) => {
    switch (setting.action) {
      case "changePin":
        setModal("pin");
        break;
      case "blockCard":
        setNotification("✅ Card successfully blocked!");
        setTimeout(() => setNotification(null), 3000);
        break;
      case "googlePay":
        setNotification("✅ Added to Google Pay!");
        setTimeout(() => setNotification(null), 3000);
        break;
      case "applePay":
        setNotification("✅ Added to Apple Pay!");
        setTimeout(() => setNotification(null), 3000);
        break;
      case "appleStore":
        setNotification("✅ Added to Apple Store Wallet!");
        setTimeout(() => setNotification(null), 3000);
        break;
      default:
        break;
    }
  };

  const handleSavePin = () => {
    if (newPin.length === 4 && !isNaN(Number(newPin))) {
      setNotification(`✅ PIN changed successfully to ${newPin}`);
      setModal(null);
      setNewPin("");
    } else {
      setNotification("❌ PIN must be exactly 4 digits.");
    }
  };

  function maskCardNumber(number: string): string {
    const clean = number.replace(/\s/g, "");
    if (clean.length < 16) return number;
    const start = clean.slice(0, 4);
    const stars = "********";
    const end = clean.slice(12, 16);
    return `${start} ${stars} ${end}`;
  }

  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      balance: "$5,756",
      holder: "Eddy Cusuma",
      validThru: "12/22",
      number: "3778 1234 5678 1234",
      color: "blue",
    },
    {
      id: 2,
      balance: "$5,756",
      holder: "Eddy Cusuma",
      validThru: "12/22",
      number: "3778 9876 5432 1234",
      color: "darkblue",
    },
    {
      id: 3,
      balance: "$5,756",
      holder: "Eddy Cusuma",
      validThru: "12/22",
      number: "3778 1111 2222 3333",
      color: "white",
    },
  ]);

  const [cardList] = useState<CardListItem[]>([
    {
      id: 1,
      imgSrc: "src/assets/creditCards/credit-card 1.png",
      cardType: "Secondary",
      bank: "DBL Bank",
      cardNumber: "**** **** 5600",
      nameOnCard: "William",
    },
    {
      id: 2,
      imgSrc: "src/assets/creditCards/Group.png",
      cardType: "Secondary",
      bank: "BRC Bank",
      cardNumber: "**** **** 4300",
      nameOnCard: "Michel",
    },
    {
      id: 3,
      imgSrc: "src/assets/creditCards/credit-card 1-2.png",
      cardType: "Secondary",
      bank: "ABM Bank",
      cardNumber: "**** **** 7560",
      nameOnCard: "Edward",
    },
  ]);

  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [selectedCardListItem, setSelectedCardListItem] =
    useState<CardListItem | null>(null);

  const [formData, setFormData] = useState<Card>({
    id: 0,
    balance: "",
    holder: "",
    validThru: "",
    number: "",
    color: "blue",
  });

  const [cardType, setCardType] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("25 January 2025");

  useEffect(() => {
    if (selectedCard) {
      setFormData(selectedCard);
    }
  }, [selectedCard]);

  const getCardColorClass = (color: Card["color"]) => {
    switch (color) {
      case "blue":
        return styles.cardBlue;
      case "darkblue":
        return styles.cardDarkBlue;
      case "white":
        return styles.cardWhite;
      default:
        return "";
    }
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddCard = () => {
    if (!cardType || !nameOnCard || !cardNumber) {
      alert("Please fill all required fields");
      return;
    }

    const newCard: Card = {
      id: Date.now(),
      balance: "$0",
      holder: nameOnCard,
      validThru: expirationDate.split(" ")[2].slice(2),
      number: cardNumber,
      color: cardType.toLowerCase() as Card["color"],
    };

    setCards((prev) => [...prev, newCard]);
    showNotification("Card added successfully");

    setCardType("");
    setNameOnCard("");
    setCardNumber("");
    setExpirationDate("25 January 2025");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setCards((prev) =>
      prev.map((card) => (card.id === formData.id ? formData : card))
    );
    showNotification("Card updated successfully");
    closeModal();
  };

  const handleDeleteCard = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    showNotification("Card deleted");
    closeModal();
  };

  const closeModal = () => {
    setSelectedCard(null);
    setSelectedCardListItem(null);
  };

  return (
    <main className={styles.mainContent}>
      {notification && (
        <div className={styles.notificationBar}>
          <div className={styles.notificationText}>{notification}</div>
          <div className={styles.progressBar}></div>
        </div>
      )}

      <section className={styles.cardsSection}>
        <div className={styles.sectionTitle}>My Cards</div>
        <div className={styles.cardsContainer}>
          {cards.map((card) => (
            <div
              key={card.id}
              className={styles.cardWrapper}
              onClick={() => setSelectedCard(card)}
              style={{ cursor: "pointer" }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedCard(card);
              }}
              role="button"
              aria-label={`Open details for card ${maskCardNumber(
                card.number
              )}`}
            >
              <div
                className={`${styles.card} ${getCardColorClass(card.color)}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.balanceInfo}>
                    <p className={styles.balanceLabel}>Balance</p>
                    <p className={styles.balanceValue}>{card.balance}</p>
                  </div>
                  <img
                    className={styles.chipIcon}
                    src="src/assets/dashboard/Chip_Card.png"
                    alt="chip icon"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardHolder}>
                    <p className={styles.holderLabel}>CARD HOLDER</p>
                    <p className={styles.holderName}>{card.holder}</p>
                  </div>
                  <div className={styles.cardValid}>
                    <p className={styles.validLabel}>VALID THRU</p>
                    <p className={styles.validDate}>{card.validThru}</p>
                  </div>
                </div>
                <div className={styles.cardFooterOverlay}>
                  <div className={styles.cardFooterInner}>
                    <p className={styles.cardNumber}>
                      {maskCardNumber(card.number)}
                    </p>
                    <img
                      className={styles.bankLogo}
                      src="src/assets/dashboard/Group 17.png"
                      alt="bank logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCard && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
          >
            <h2 id="modalTitle">Edit Card</h2>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div
                className={`${styles.card} ${getCardColorClass(
                  formData.color
                )}`}
                style={{ flexShrink: 0, width: 320, height: 230 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.balanceInfo}>
                    <p className={styles.balanceLabel}>Balance</p>
                    <p className={styles.balanceValue}>{formData.balance}</p>
                  </div>
                  <img
                    className={styles.chipIcon}
                    src="src/assets/dashboard/Chip_Card.png"
                    alt="chip"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardHolder}>
                    <p className={styles.holderLabel}>CARD HOLDER</p>
                    <p className={styles.holderName}>{formData.holder}</p>
                  </div>
                  <div className={styles.cardValid}>
                    <p className={styles.validLabel}>VALID THRU</p>
                    <p className={styles.validDate}>{formData.validThru}</p>
                  </div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <label>
                  Holder Name
                  <input
                    type="text"
                    name="holder"
                    value={formData.holder}
                    onChange={handleInputChange}
                    required
                    className={styles.inputField}
                  />
                </label>

                <label>
                  Balance
                  <input
                    type="text"
                    name="balance"
                    value={formData.balance}
                    onChange={handleInputChange}
                    required
                    className={styles.inputField}
                  />
                </label>

                <label>
                  Valid Thru (MM/YY)
                  <input
                    type="text"
                    name="validThru"
                    value={formData.validThru}
                    onChange={handleInputChange}
                    required
                    pattern="\d{2}/\d{2}"
                    placeholder="12/22"
                    className={styles.inputField}
                  />
                </label>

                <label>
                  Number
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                    pattern="[\d\s]{16,19}"
                    placeholder="3778 1234 5678 1234"
                    className={styles.inputField}
                  />
                </label>

                <label>
                  Color
                  <select
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    className={styles.inputField}
                  >
                    <option value="blue">Blue</option>
                    <option value="darkblue">Dark Blue</option>
                    <option value="white">White</option>
                  </select>
                </label>

                <div style={{ marginTop: 16 }}>
                  <button
                    type="submit"
                    // className={styles.addCardButton}
                    style={{
                      marginRight: 10,
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "9px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteCard(formData.id)}
                    className={styles.deleteButton}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "9px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    style={{
                      marginLeft: 10,
                      padding: "12px 20px",
                      borderRadius: "9px",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                      backgroundColor: "white",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {selectedCardListItem && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h2>Card Details</h2>
            <img
              src={selectedCardListItem.imgSrc}
              alt="card"
              style={{ maxWidth: "100%", marginBottom: "1rem" }}
            />
            <p>
              <strong>Card Type:</strong> {selectedCardListItem.cardType}
            </p>
            <p>
              <strong>Bank:</strong> {selectedCardListItem.bank}
            </p>
            <p>
              <strong>Card Number:</strong> {selectedCardListItem.cardNumber}
            </p>
            <p>
              <strong>Name on Card:</strong> {selectedCardListItem.nameOnCard}
            </p>

            <button
              onClick={closeModal}
              style={{
                marginTop: "1rem",
                padding: "10px 16px",
                backgroundColor: "#1f2937",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section className={styles.statisticsSection}>
        <div className={styles.sectionStats}>
          <h3 className={styles.sectionSubtitle}>Card Expense Statistics</h3>
          <div className={styles.statsChart}>
            <img src="src/assets/creditCards/Group 351.png" alt="pic" />
          </div>
        </div>

        <div className={styles.cardListSection}>
          <h3 className={styles.sectionSubtitle}>Card List</h3>

          {cardList.map((item) => (
            <div key={item.id} className={styles.cardItem}>
              <img src={item.imgSrc} alt="pic" />
              <div>
                <h4 className={styles.cardItemLabel}>Card Type</h4>
                <p className={styles.cardItemValue}>{item.cardType}</p>
              </div>
              <div>
                <h4 className={styles.cardItemLabel}>Bank</h4>
                <p className={styles.cardItemValue}>{item.bank}</p>
              </div>
              <div>
                <h4 className={styles.cardItemLabel}>Card Number</h4>
                <p className={styles.cardItemValue}>{item.cardNumber}</p>
              </div>
              <div>
                <h4 className={styles.cardItemLabel}>Name on Card</h4>
                <p className={styles.cardItemValue}>{item.nameOnCard}</p>
              </div>
              <button
                className={styles.cardItemButton}
                onClick={() => setSelectedCardListItem(item)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cardManagementSection}>
        <div className={styles.addCardSection}>
          <h3 className={styles.sectionSubtitle}>Add New Card</h3>
          <div>
            <p className={styles.description}>
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
            </p>

            <div className={styles.formContainer}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="card-type">
                    Card Type (blue, darkblue, white)
                  </label>
                  <input
                    type="text"
                    id="card-type"
                    className={styles.inputField}
                    placeholder="Classic"
                    value={cardType}
                    onChange={(e) => setCardType(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="name-on-card">Name On Card</label>
                  <input
                    type="text"
                    id="name-on-card"
                    className={styles.inputField}
                    placeholder="My Cards"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="card-number">Card Number</label>
                  <input
                    type="text"
                    id="card-number"
                    className={styles.inputField}
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="expiration-date">Expiration Date</label>
                  <select
                    id="expiration-date"
                    className={`${styles.inputField} ${styles.selectField}`}
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                  >
                    <option>25 January 2025</option>
                    <option>25 January 2026</option>
                    <option>25 January 2027</option>
                  </select>
                </div>
              </div>
            </div>

            <button className={styles.addCardButton} onClick={handleAddCard}>
              Add Card
            </button>
          </div>
        </div>
        <div className={styles.cardSettings}>
          <h3 className={styles.sectionSubtitle}>Card Setting</h3>

          {notification && (
            <div className={styles.notification}>{notification}</div>
          )}

          <div className={styles.settingOptions}>
            {settings.map((setting) => (
              <div
                key={setting.id}
                className={styles.settingItem}
                onClick={() => handleSettingClick(setting)}
                style={{ cursor: "pointer" }}
              >
                <img src={setting.imgSrc} alt="pic" />
                <div>
                  <h4 className={styles.settingTitle}>{setting.title}</h4>
                  <p className={styles.settingDescription}>
                    {setting.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {notification && (
          <div className={styles.notification}>{notification}</div>
        )}

        {modal === "pin" && (
          <div
            className={styles.modalOverlay}
            onClick={() => setModal(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Change PIN Code</h2>
              <input
                type="password"
                maxLength={4}
                value={newPin}
                placeholder="Enter 4-digit PIN"
                onChange={(e) => setNewPin(e.target.value)}
                className={styles.inputField}
              />
              <div className={styles.modalActions}>
                <button onClick={handleSavePin} className={styles.saveBtn}>
                  Save
                </button>
                <button
                  onClick={() => setModal(null)}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
