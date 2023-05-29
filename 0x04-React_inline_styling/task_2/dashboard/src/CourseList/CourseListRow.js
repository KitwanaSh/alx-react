import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const styleHeader = { backgroundColor : "#deb5b545" };
  const styleRow = { backgroundColor : "#f5f5f5ab" };

  const theStyle = isHeader ? styleHeader : styleRow;
  return (
    <tr styles={theStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} styles={{backgroundColor=}}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td styles={{backgroundColor="#f5f5f5ab"}}>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
