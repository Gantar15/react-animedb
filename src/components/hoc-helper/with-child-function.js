
const withChildFunction = (Wrapped, fn) => {
    return props => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        ); 
    };
};

export {withChildFunction};