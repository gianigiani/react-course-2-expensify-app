import React from 'react';
import ReactDOM from 'react-dom';


// higer order componant hoc -a component that renders another component
//reuse code
// render hijacking
//prop manipulation
//abstract  state

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
)
const widthAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            
            <WrappedComponent {...props}/>
        </div>
    )
}
const requireAutentification = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please log in to view the info</p>)}
        </div>
    )
}


const AdminInfo = widthAdminWarning(Info)
const AuthInfo = requireAutentification(Info)


// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'))