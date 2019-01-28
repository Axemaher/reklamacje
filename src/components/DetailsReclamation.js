import React from 'react';
const DetailsReclamation = (props) => {
    const id = props.match.params.id;
    const data = props.content.filter(el => el.id === id)[0];
    return (
        <div>
            <p>{data.reclamation.number}--{data.client.name}</p>
        </div>
    )
}
export default DetailsReclamation;