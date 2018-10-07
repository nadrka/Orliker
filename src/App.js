import React, { Component } from "react";
import RegisterBox from "./containers/Register/RegisterBox/RegisterBox";
import PlayerPanel from "./containers/PlayerPanel/PlayerPanel";
import NavigationBar from "./containers/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
          />
          <NavigationBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
