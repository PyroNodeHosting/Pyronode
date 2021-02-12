import React from "react";
import Wave from "react-wavify";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/Layout.css";
import "../styles/Animations.css";
const Layout = (props) => {
  const children = props.children;
  const styles = props.optionalStyles;

  return (
    <div className="Layout">
      <Header dark={props.headerDark} />
      {children}

      <Wave
        className="Layout__wave wave-2"
        style={styles}
        fill="#D25A1E"
        paused={false}
        options={{
          height: 50,
          amplitude: 70,
          speed: 0.185,
          points: 5,
        }}
      />

      <Wave
        className="Layout__wave"
        style={styles}
        fill="#F46923"
        paused={false}
        options={{
          height: 55,
          amplitude: 75,
          speed: 0.185,
          points: 3,
        }}
      />

      <Footer />
    </div>
  );
};

export default Layout;
