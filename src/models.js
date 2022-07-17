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

export function getStockObject(symbol, name, ltp, previousOpen, previousClose, high, low) {
    return {
        "symbol": symbol,
        "name": name,
        "ltp": ltp,
        "previousOpen": previousOpen,
        "previousClose": previousClose,
        "high": high,
        "low": low
    }
}

export function getInvestmentObject(id,stock, quantity, netInvested, currentValue, netProfit, netProfitPercentage, averageBuyPrice) {
    return {
        "id":id,
        "stock": stock,
        "quantity": quantity,
        "netInvested": netInvested,
        "currentValue": currentValue,
        "netProfit": netProfit,
        "netProfitPercentage": netProfitPercentage,
        "averageBuyPrice": averageBuyPrice
    }
}
