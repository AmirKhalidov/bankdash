import { createSlice } from "@reduxjs/toolkit";

export interface Investment {
  name: string;
  sector: string;
  amount: string;
  returnValue: string;
  image: string;
}

export interface PerformanceStat {
  id: string;
  imgSrc: string;
  imgAlt: string;
  label: string;
  value: string;
}

interface InvestmentsState {
  investments: Investment[];
  performanceStats: PerformanceStat[];
}

const initialState: InvestmentsState = {
  investments: [
    {
      name: "Apple Store",
      sector: "E-commerce, Marketplace",
      amount: "$54,000",
      returnValue: "+16%",
      image: "src/assets/investments/Group 245.png",
    },
    {
      name: "Samsung Mobile",
      sector: "E-commerce, Marketplace",
      amount: "$25,300",
      returnValue: "-4%",
      image: "src/assets/investments/Group 875.png",
    },
    {
      name: "Tesla Motors",
      sector: "Electric Vehicles",
      amount: "$8,200",
      returnValue: "+25%",
      image: "src/assets/investments/Group 876.png",
    },
  ],
  performanceStats: [
    {
      id: "totalInvested",
      imgSrc: "src/assets/investments/Group 303.png",
      imgAlt: "Total",
      label: "Total Invested Amount",
      value: "$150,000",
    },
    {
      id: "numInvestments",
      imgSrc: "src/assets/investments/Group 305.png",
      imgAlt: "Count",
      label: "Number of Investments",
      value: "1,250",
    },
    {
      id: "rateReturn",
      imgSrc: "src/assets/investments/Group 307.png",
      imgAlt: "Return",
      label: "Rate of Return",
      value: "+5.80%",
    },
  ],
};

const investmentsSlice = createSlice({
  name: "investments",
  initialState,
  reducers: {},
});

export default investmentsSlice.reducer;
