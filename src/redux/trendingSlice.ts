import { createSlice } from "@reduxjs/toolkit";

interface TrendingStock {
  name: string;
  price: string;
  returnValue: string;
}

interface MonthlyData {
  month: string;
  revenue: number;
}

interface YearlyData {
  year: string;
  invested: number;
}

interface TrendingState {
  trendingStocks: TrendingStock[];
  monthlyData: MonthlyData[];
  yearlyData: YearlyData[];
}

const initialState: TrendingState = {
  trendingStocks: [
    { name: "Trivago", price: "$520", returnValue: "+5%" },
    { name: "Canon", price: "$480", returnValue: "+10%" },
    { name: "Uber Food", price: "$350", returnValue: "-3%" },
    { name: "Nokia", price: "$940", returnValue: "+2%" },
    { name: "Tiktok", price: "$670", returnValue: "-12%" },
  ],
  yearlyData: [
    { year: "2017", invested: 40000 },
    { year: "2018", invested: 45000 },
    { year: "2019", invested: 50000 },
    { year: "2020", invested: 70000 },
    { year: "2021", invested: 90000 },
    { year: "2022", invested: 110000 },
  ],
  monthlyData: [
    { month: "Jan", revenue: 8000 },
    { month: "Feb", revenue: 9000 },
    { month: "Mar", revenue: 10000 },
    { month: "Apr", revenue: 12000 },
    { month: "May", revenue: 14000 },
    { month: "Jun", revenue: 16000 },
    { month: "Jul", revenue: 15000 },
    { month: "Aug", revenue: 17000 },
    { month: "Sep", revenue: 18000 },
    { month: "Oct", revenue: 19000 },
    { month: "Nov", revenue: 20000 },
    { month: "Dec", revenue: 22000 },
  ],
};

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
});

export default trendingSlice.reducer;
