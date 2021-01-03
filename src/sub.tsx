import * as React from "react";

// Propsの型定義
interface Props {
  name: string;
}

interface ComponentState {
  count: number;
}

export class Sub extends React.Component<Props, ComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    console.log("クリックされました");

    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>Add +1</button>
      </div>
    );
  }
}
