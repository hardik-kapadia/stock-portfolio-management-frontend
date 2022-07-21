import React from "react";
import {useState, useEffect} from "react";
import {possibleMainScreens} from "../constants";
import {searchForStock} from "../services/stocks";

const ShortStockComponent = ({stock}) => {
    return (
        <div className='short-stock-component'>
            <div className="short-stock-first-row">
                <div className="short-stock-name">{stock.name} ({stock.ltp})</div>
                <div className="short-stock-price"> {stock.ltp} </div>
            </div>
            <div className="second-row">
                {stock.previousOpen} {stock.previousClose} {stock.low} {stock.high}
            </div>

        </div>
    )
}

const ShortInvestmentComponent = ({investment}) => {
    return (
        <div className='short-investment-component'>
            <div className="short-investment-first-row">
                <div className="short-investment-name">{investment.stock.name} ({investment.stock.ltp})</div>
                <div className="short-investment-price"> {investment.currentValue} </div>
            </div>
            <div className="second-row">
                {investment.averageBuyPrice} {investment.quantity} {investment.netInvested} <span
                className="short-investment-profits"> {investment.netProfit} ({investment.netProfitPercentage}) </span>
            </div>

        </div>
    )
}

const Main = ({user, screen, updateScreen, searchQuery, singleStock}) => {


    const [stocks, setStocks] = useState([]);
    const [investments, setInvestments] = useState(user.investments);
    const [singleStock, setSingleStock] = useState(singleStock);

    useEffect(() => {
        setInvestments(user.investments);
    }, [user])


    if (screen === possibleMainScreens[0]) {

        if (user) {

            if (investments.length > 0) {

                return (
                    <div className="main-screen all-investments">
                        {investments.map(i => < ShortInvestmentComponent investment={i}/>)}
                    </div>
                )
            } else {
                return (
                    <div className="main-screen no-investments">
                        <h1> You don't own any stocks</h1>
                        <h2> Good call! </h2>
                    </div>
                )
            }
        } else {
            return (
                <div className="main-screen no-user-logged-in">
                    <h1> Please log in to view Investments</h1>
                </div>
            )
        }

    } else if (screen === possibleMainScreens[1]) {

        if (searchQuery) {

            searchForStock(searchQuery).then(results => {
                setStocks(results)
            });

            return (
                <div className="main-sreen stock-search-results">
                    {stocks.map(s => <ShortInvestmentComponent stock={s}/>)}
                </div>
            )
        } else {
            return (
                <div className="main-screen no-stock-query">
                    <h1>Please search for something</h1>
                </div>
            )
        }

    } else if (screen === possibleMainScreens[2]) {



    }

}

export default Main;