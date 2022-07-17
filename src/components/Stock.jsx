import React from "react";

const StockComponent = ({ stock }) => {
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

export default StockComponent;