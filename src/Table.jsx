import React from "react";
const heading= {
  slug:"ID",
  symbol: "Symbol",
    name: "Name",
}
const Table = ({ data, colToShow }) => {
  if (!data || data.length === 0) {
    return <p>No data to display</p>;
  }

  return (
    <table className="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          {colToShow.map((column, index) => (
            <th key={index}>{heading[column]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {colToShow.map((column, columnIndex) => (
              <td key={columnIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
