import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import trackerImage from "./images/tracker.png";
import logoImage from "./images/logo.png";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <img className={styles.logoImage} src={logoImage} />
          <img
            className={styles.trackerImage}
            src={trackerImage}
            alt="COVID-19"
          />
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
