import { Redirect } from "react-router";

const LoginPage = ({isLogginIn, onLogin}) => {
    if(isLogginIn){
        return (
            <div style={{width: "100%"}} className="jumbotron card-body bg-dark">
                <h2 className="text-center">You are login in</h2>
            </div>
        );
    }

    return (
        <div style={{width: "100%"}} className="jumbotron card-body bg-dark">
            <h3 className="text-center">Login to see secrets</h3>
            <button style={{margin: "8px auto", display: 'block'}}
            className='btn btn-primary'
            onClick={onLogin}>
                    Login
            </button>
        </div>
    );
};

export {LoginPage};