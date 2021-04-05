import React from "react";

function Button(props: { display: string }) {
    return(
        <button>{props.display}</button>
    );
}

export { Button };