import React, { MouseEvent } from "react";

type Struc = {
    name: string,
    // onClick: MouseEvent<HTMLButtonElement, MouseEvent>
}

function Structure({ name }: Struc) {   
    const onClickHandle = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Todo make a element drag
        console.log("gamebar structurepanel click "+name);
    }

    return (
        <button onClick={onClickHandle}>
            <h5>{name}</h5>
            <img src="" alt={name} />
        </button>
    );
}

export default Structure;