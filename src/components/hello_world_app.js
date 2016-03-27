import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}

class OneTimeClickLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(event) {
    this.setState({ clicked: true });
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <a href="#" onClick={this.linkClicked}>Click me</a>
      );
    } else {
      return (
        <span>You clicked the link</span>
      );
    }
  }
}

class HelloWorldApp extends React.Component {
  render() {
    return (
      <div id="two-tags">
        <HelloWorld name="Vicent" />
        <OneTimeClickLink />
      </div>
    )
  }
}

export default HelloWorldApp;
