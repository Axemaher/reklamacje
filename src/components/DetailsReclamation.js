import React from 'react';
const DetailsReclamation = (props) => {
    const id = props.match.params.id;
    const data = props.content.filter(el => el.id === id)[0];
    console.log(data)
    return (
        <div>
            <p>{data.name}--{data.sex}</p>
        </div>
    )
}
export default DetailsReclamation;