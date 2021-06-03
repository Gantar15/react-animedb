import React from 'react';
import {ApiServiceConsumer} from '../api-service-context';

const withApiService = (Wrapper, mapMethodsToProps) => {
    return props => {
        return (
            <ApiServiceConsumer>
                {
                    apiService => {
                        return (
                            <Wrapper {...props} {...mapMethodsToProps(apiService)}/>
                        );
                    }
                }
            </ApiServiceConsumer>
        );
    }
};

export {withApiService};