//import { useEffect, useState } from "react";
import axios from "axios";
import DATA from '../data/artisans.json';

async function fetchData() {
    var options= {
        method: 'GET',
        url: DATA,
        };
      axios
        .request(options)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error("fetchData error");
        });
}

export default fetchData;