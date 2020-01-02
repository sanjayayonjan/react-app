import React from 'react';

// function Greet() {
//     return <h4>Hi, Good Morning John Doe.</h4>
// }

export const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hi, Good Morning { props.name }.</h1>
            {props.children}
        </div>
    )
}

//export default Greet;
