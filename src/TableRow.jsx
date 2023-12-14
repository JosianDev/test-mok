import React from "react";

function TableRow({ data, onDelete, index }) {
  return (
    <tr style={{ backgroundColor: data.color }}>
      <td>{index + 1}</td>
      <td>
        <img
          src={data.picture.thumbnail}
          alt={`${data.name.first} ${data.name.last}`}
        />
      </td>
      <td>{data.name.first}</td>
      <td>{data.name.last}</td>
      <td>{data.location.country}</td>
      <td>
        <button
          onClick={onDelete}
          style={{ background: "red", color: "white" }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
