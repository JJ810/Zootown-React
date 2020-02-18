import React from "react";
class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      numStepDone: props.numStepDone || 1
    };
  }

  componentWillReceiveProps(props){
    this.setState({numStepDone: props.numStepDone, active: props.active})
  }

  onClickStep = active => {
    if(active >= this.state.numStepDone) return;
    this.setState({
      active
    });
    this.props.onClickStep(active);
  };

  render() {
    return (
      <div className="Step">
        {this.props.steps.map((item, index) => {
          return (
            <div
              key={index}
              className={`Step__Item 
                ${index <= this.state.active ? "Step__Item__Active" : ""}
                ${index < this.state.numStepDone ? "" : "Step__Item__Disabled"}
              `}
              onClick={() => this.onClickStep(index)}
            >
              <span className="Step__Item__Title">{item}</span>
              <p className="Step__Item__Line">
                <span />
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Step;
