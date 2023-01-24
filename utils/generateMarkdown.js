const MIT =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ";
const APACHE =
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const GPL =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const BSD =
  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

// function that returns a license badge based on which license is passed in

function generateBadge(licence) {
  if (licence === "MIT") {
    return MIT;
  } else if (licence === "APACHE 2.0") {
    return APACHE;
  } else if (licence === "GPL 3.0") {
    return GPL;
  } else if (licence === "BSD 3") {
    return BSD;
  } else {
    return "";
  }
}

module.exports = generateBadge;
