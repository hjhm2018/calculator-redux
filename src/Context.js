import React from "react";

const Context = React.createContext(); 

export class Provider extends React.Component {
  state = {
    bmiTitle: "Calculate your Body Mass Index (BMI)",
    conversionTitle: "Conversions",
    porosityTitle: "Calculate Porosity of Sedimentary Rocks"
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer; 