export function getUserObject(name, email, mobileNumber, accountNumber, netInvested, netPortfolioValue, investments, unrealizedGains, unrealizedGainsPercentage, realizedGains, realizedGainsPercentage) {
    return {
        "name": name,
        "email": email,
        "mobileNumber": mobileNumber,
        "accountNumber": accountNumber,
        "netInvested": netInvested,
        "netPortfolioValue": netPortfolioValue,
        "investments": investments,
        "unrealizedGains": unrealizedGains,
        "unrealizedGainsPercentage": unrealizedGainsPercentage,
        "realizedGains": realizedGains,
        "realizedGainsPercentage": realizedGainsPercentage
    }
}

export function getStockObject(symbol, ltp, previousOpen, previousClose, high, low) {
    return {
        "symbol": symbol,
        "ltp": ltp,
        "previousOpen": previousOpen,
        "previousClose": previousClose,
        "high": high,
        "low": low
    }
}

export function getInvestmentObject(stock, quantity, netInvested, currentValue, netProfit, netProfitPercentage, averageBuyPrice) {
    return {
        "stock": stock,
        "quantity": quantity,
        "netInvested": netInvested,
        "currentValue": currentValue,
        "netProfit": netProfit,
        "netProfitPercentage": netProfitPercentage,
        "averageBuyPrice": averageBuyPrice
    }
}
