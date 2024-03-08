import React from 'react';
import "./App.css";
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from "react-redux";

// ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo)
    // Can log the error to a logging service here
  }

  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div>
          <Head />
          <Body />
        </div>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
