import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;









// import React from 'react';
// import ResultsContainer from '../ResultsContainer/ResultsContainer';
// import SearchBox from '../SearchBox/SearchBox';
// import Header from './../Header/Header';
// import './App.css';

// // const name = require('@rstacruz/startup-name-generator');
// const name = require('@rstacruz/startup-name-generator');

// class App extends React.Component{
//   constructor() {
//    super();
//    this.state = {
//         headerText: 'Name It!',
//         headerExpanded: true,
//         suggestNames: [], 
//    };
// }

//    handleInputChange = (inputText) => {
   
//       this.setState({
//          headerExpanded: !inputText,
//          suggestNames: inputText ? name(inputText) : [],
//       });
//    };
    
//     render(){
//      return (
//      <div>
//          <Header 
//          headerExpanded={this.state.headerExpanded}
//          headTitle={this.state.headerText}
//          />
//          <SearchBox onInputChange={this.handleInputChange} />
//          <ResultsContainer suggestNames={this.state.suggestNames}/>
//      </div>
//      );
//    }  
// }



// export default App; 