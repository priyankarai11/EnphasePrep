import React, { Component } from 'react';
import Hero from './Hero';
import ErrorBoundary from "./ErrorBoundary"

class InsertHero extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero name="Prii" />
        </ErrorBoundary>
        <ErrorBoundary>
          {" "}
          <Hero name="sac" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default InsertHero;