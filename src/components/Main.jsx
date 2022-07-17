import React from "react";
import { useState } from "react";

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

const SearchBar = () => {
    
}

const Main = ({ user }) => {


    const [stocks, setStocks] = useState([]);
    const [investments, setInvestments] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);

    if (searchTerm) {
        //TODO: show results or if no results then error message


    } else {

        if (user) {
            // TODO: show Investments
        } else {
            return (
                <h1 className="investments-no-login">Please log-in to view Portfolio</h1>
            )
        }

    }

}

export default Main;