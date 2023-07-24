import React, { useState } from 'react'
import List from '../partials/List';

export default function Subjects() {
    const [subjects, setSubjects] = useState([
        "english", "math"
    ]);

    return (
        <>
            <List list={subjects} setList={setSubjects} title="Subject" />
        </>
    );
}
