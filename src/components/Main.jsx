import React from "react";
import {useState, useEffect} from "react";
import {possibleMainScreens} from "../constants";
import {getInvestmentObject} from "../models";
import {searchForStock} from "../services/stocks";
import {buy, sell} from "../services/user";

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

const FullStockInvestmentComponent = ({investment}) => {

    if (!investment)
        investment = getInvestmentObject(-1, null, 0, 0, 0, 0, 0, 0, null);

    return (

        <div className="full-stock-investment">

            <div className="full-stock-investment-buying-details">
                {investment.quantity} {investment.averageBuyPrice} {investment.netInvested}
            </div>
            <div className="full-stock-investment-profit-details">
                {investment.currentValue} {investment.netProfit} {investment.netProfitPercentage}
            </div>

        </div>

    )

}

const FullStockComponent = ({stock, investment, updateUser}) => {

    const [investmentDetails, setInvestmentDetails] = useState(investment)
    const [tradeCount, setTradeCount] = useState(0);

    return (
        <div className='main-screen full-stock-component'>
            <div className="full-stock-details">

                <div className="full-stock-title-symbol-ltp">
                    <span className="full-stock-title-symbol"> </span>
                    <span className="full-stock-ltp"> </span>
                </div>

                <div className="full-stock-adv-details">
                    <div className="full-stock-adv-details-row-1"> {stock.previousOpen} {stock.previousClose}</div>
                    <div className="full-stock-adv-details-row-2"> {stock.high} {stock.low} </div>
                </div>
            </div>

            <FullStockInvestmentComponent investment={investment}/>

            <div className="full-stock-trade">
                <div className="full-stock-trade-price">
                    <input type="text" placeholder={stock.ltp} value={stock.ltp} id="full-stock-trade-price-value"/>
                </div>
                <input type="button" value="BUY" className="full-stock-trade-button stock-buy-button" onClick={() => {
                    buy(stock.symbol, tradeCount, document.getElementById("full-stock-trade-price-value").value).then(
                        (response) => {

                            if (response[0] % 100 === 2) {
                                updateUser();
                                alert("Stock purchased successfully");

                            } else {
                                alert("Error occured by purchasing stock!");
                            }
                        }
                    )
                }}/>
                <span className="full-stock-trade-counter">
                    <input type="button" value="-"/> <span className="full-stock-trade-count">{tradeCount}</span> <input
                    type="button" value="-"/>
                </span>
                <input type="button" className="full-stock-trade-button stock-sell-button" value="SELL"
                       disabled={!investmentDetails} onClick={() => {
                    sell(stock.symbol, tradeCount, document.getElementById("full-stock-trade-price-value").value).then(
                        (response) => {

                            if (response[0] % 100 === 2) {
                                updateUser();
                                alert("Stock sold successfully");
                            } else
                                alert("Error occurred while selling stock!");
                        }
                    )
                }}/>
            </div>

        </div>
    )
}

const Main = ({user, screen, updateScreen, searchQuery, singleStock, updateUser}) => {

    const [stocks, setStocks] = useState([]);
    const [investments, setInvestments] = useState(user ? user.investments : null);

    function getUserInvestmentFromStock(stock) {

        if (!user || !stock)
            return null;

        if (!user.investments || user.investments.length === 0)
            return null;

        for (let i = 0; i < user.investments.length; i++)
            if (user.investments[i].stock.symbol === stock.symbol)
                return user.investments[i];
        return null;

    }

    useEffect(() => {
        setInvestments(user ? user.investments : null);
        console.log("user is now: ",user);
        console.log("invs now: ",investments);
    }, [user])


    if (screen === possibleMainScreens[0]) {

        if (user) {

            console.log("user, ---> ",user);
            if(!investments)
                setInvestments(user.investments);
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

        if (searchQuery) {

            searchForStock(searchQuery).then(result => setStocks(result));

            return (
                <div className="main-sreen stock-search-results">
                    {stocks.map(s => <ShortStockComponent stock={s}/>)}
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
            return (
                <FullStockComponent stock={singleStock} investment={getUserInvestmentFromStock(singleStock)}
                                    updateUser={updateUser}/>
            )
        }

    }

}

export default Main;