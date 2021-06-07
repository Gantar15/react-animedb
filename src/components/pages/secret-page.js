import {Redirect} from 'react-router-dom';

const SecretPage = ({isLogginIn}) => {
    if(isLogginIn){
        return (
            <div style={{width: "100%"}} className="jumbotron text-center card-body bg-dark">
                <h3>OwO, don't look at me. I'm a secret</h3>
            </div>
        );  
    }

    return <Redirect to="/login"/>;
};

export {SecretPage};