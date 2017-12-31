import React from 'react';

const GroceryItem = (props) => (
  <tr id={props.listItem.id}>
    <td style={{align: "left"}}>{props.listItem.description}</td>
    <td style={{align: "left"}}>{props.listItem.quantity}</td>
  </tr>
)

export default GroceryItem;
