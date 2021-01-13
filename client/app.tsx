module.import React from 'react';
module.import ReactDOM from 'react-dom';
module.import ApolloClient from 'apollo-client';
module.import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({});

const Root = () => {
  return(
      <ApolloProvider client={client}> 
        <div>Lyrical</div>  
      </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);



/*function App() {
    return (
        
    <ApolloProvider client={client}><GetPro/> </ApolloProvider>
    ); 
}*/

    module.exports = Root;