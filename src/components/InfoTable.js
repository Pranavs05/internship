import React from 'react';
import data from '../assets/shorter_address.json'
export default function Table() {
  return (
    <table>
        <thead>
            {console.log(data.features[0].keys[0])}
        </thead>
        <tbody></tbody>
    </table>
  );
}
