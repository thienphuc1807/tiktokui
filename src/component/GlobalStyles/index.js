// import React from "react";
import "./GlobalStyles.scss";
import PropTypes from "prop-types";

const GlobalStyle = ({ children }) => {
    // Chỉ nhận 1 children
    // return React.Children.only(children);
    return children;
};

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyle;
