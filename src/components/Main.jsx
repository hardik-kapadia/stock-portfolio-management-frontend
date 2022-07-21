import React from "react";
import { useState, useEffect } from "react";
import { possibleMainScreens } from "../constants";
import { getInvestmentObject } from "../models";
import { searchForStock } from "../services/stocks";

const ShortStockComponent = ({ stock }) => {
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

const ShortInvestmentComponent = ({ investment }) => {
    return (
        <div className='short-investment-component'>

            <div className="short-investment-first-row">
                <div className="short-investment-name">{investment.stock.name} ({investment.stock.ltp})</div>
                <div className="short-investment-price"> {investment.currentValue} </div>
            </div>
            <div className="second-row">
                {investment.averageBuyPrice} {investment.quantity} {investment.netInvested} <span className="short-investment-profits"> {investment.netProfit} ({investment.netProfitPercentage}) </span>
            </div>

        </div>
    )
}

const FullStockIvestmentComponent = ({ investment }) => {

    if (!investment)
        investment = getInvestmentObject(-1, null, 0, 0, 0, 0, 0, 0, null);

    return (

        <div className="full-stock-investment">

        </div>

    )


}

const FullStockComponent = ({ stock, investment }) => {

    const [investmentDetails, setInvestmentDetails] = useState(investment)
    const [tradeCount, setTradeCount] = useState(0);

    return (
        <div className='main-screen full-stock-component'>
            <div className="full-stock-details">

                <div className="full-stock-title-symbol-ltp">
                    <span className="full-stock-title-symbol"> </span>
                    <span className="full-stock-ltp"></span>
                </div>

                <div className="full-stock-adv-details">
                    <div className="full-stock-adv-details-row-1"> {stock.previousOpen} {stock.previousClose}</div>
                    <div className="full-stock-adv-details-row-2"> {stock.high} {stock.low} </div>
                </div>

            </div>



            <div className="full-stock-trade">
                <input type="button" value="BUY" className="full-stock-trade-button stock-buy-button" />
                <span className="full-stock-trade-counter">
                    <input type="button" value="-" /> <span className="full-stock-trade-count">{tradeCount}</span> <input type="button" value="-" />
                </span>
                <input type="button" className="full-stock-trade-button stock-sell-button" value="SELL" disabled={investmentDetails ? false : true} />
            </div>

        </div>
    )
}

const Main = ({ user, screen, updateScreen, searchQuery, singleStock }) => {


    const [stocks, setStocks] = useState([]);
    const [investments, setInvestments] = useState(user.investments);
    const [searchTerm, setSearchTerm] = useState(searchQuery);

    function searchForStocks(searchWord) {
        setStocks(searchForStock(searchWord));
    }

    useEffect(() => {
        setInvestments(user.investments);
    }, [user])


    if (screen === possibleMainScreens[0]) {

        if (user) {

            if (investments.length > 0) {

                return (
                    <div className="main-screen all-investments">
                        {investments.map(i => < ShortInvestmentComponent investment={i} />)}
                    </div>
                )
            } else {
                return (
                    <div className="main-screen no-investments">
                        <h1> You don't own any stocks</h1>
                        <h2> Good call!</h2>
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

        if (searchTerm) {

            searchForStocks();

            return (
                <div className="main-sreen stock-search-results">
                    {stocks.map(s => <ShortStockComponent stock={s} />)}
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

        if (singleStock) {

            <FullStockComponent />

        }

    }

}

export default Main;