import React from "react";

const Summary = (props) => {

    if (props.user) {

        return (
            <div className="summary-component">

            </div>
        )
    } else {
        return (
            <div className="summary-component-error">
                <h2> please log-in to view summary </h2>
            </div>
        )
    }
} 