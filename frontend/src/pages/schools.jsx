import React, { useState } from 'react'
import List from '../partials/List';

export default function Schools() {
    const [schools, setSchools] = useState([
        "ashish shrimati kashibai navale college of engineering, skncoe,", "vishu"
    ]);

    return (
        <>
            <List list={schools} setList={setSchools} title="School" />
        </>
    );
}
