/**
=========================================================
* Trade Capital React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Trading Developer (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */

function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
