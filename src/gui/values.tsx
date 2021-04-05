import React from "react";

function Values(props: { name: string }) {
    return(
        <div>
            <h2>{props.name}</h2>
            <progress></progress>
        </div>
    );
}

export { Values };

