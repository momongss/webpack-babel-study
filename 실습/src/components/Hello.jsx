import React, { Component } from "react";

export default class Hello extends Component {
  constructor(props) {
    super(props);
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("success!!");
      }, 2000);
    });
    promise.then((mes) => {
      console.log(mes);
    });
  }

  componentDidMount() {
    console.log("good");
  }

  render() {
    return <div>μΊμμν¬</div>;
  }
}
