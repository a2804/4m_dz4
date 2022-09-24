import React from 'react';

function Works({workslist}) {
    return (
        <ul>
            {workslist.map((work, key) => <li key={key}>{work}</li>)}
        </ul>
    );
}

export default Works;