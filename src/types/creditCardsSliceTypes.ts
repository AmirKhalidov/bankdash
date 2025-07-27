export interface CreditCard {
  id: number;
  userId: number;
  cardNumber: string;
  cardType: string;
  cardHolder: string;
  validThru: string;
  balance: number;
  theme: string;
}

export interface CreditCardsState {
  cards: CreditCard[];
  loading: boolean;
  error: string | null;
}
