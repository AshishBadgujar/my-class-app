import React, { useState } from 'react'
import List from '../partials/List';

export default function Stds() {
    const [stds, setStds] = useState([
        "1st", "2nd"
    ]);

    return (
        <>
            <List list={stds} setList={setStds} title="Standard" />
        </>
    );
}
