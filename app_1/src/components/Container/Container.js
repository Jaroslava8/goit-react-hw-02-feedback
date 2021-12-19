import React from "react";
import PropTypes from "prop-types";

const Container = ({ title, note }) => {
  return (
    <>
      <h2>{title}</h2>
      {note}
    </>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.object.isRequired,
};
export default Container;
