import React, { Component } from "react";
import RegisterBox from "./containers/Register/RegisterBox/RegisterBox";
import PlayerPanel from "./containers/PlayerPanel/PlayerPanel";
import NavigationBar from "./containers/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footerek from "./components/Footer/Footer";
class App extends Component {
  render() {
    const Site = {
      display: "flex",
      minHeight: "90vh",
      flexDirection: "column"
    };
    return (
      <BrowserRouter>
        <div>
          <div style={Site}>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
              crossOrigin="anonymous"
            />
            <NavigationBar />
          </div>
          <Footerek />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
