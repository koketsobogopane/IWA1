 import { firstname as firstnameA } from "./nwabisa.js";
 import { surname as surnameA } from "./nwabisa.js";
 import { role as roleA } from "./nwabisa.js";

import { firstname as firstnameB  } from "./johannes.js";
import {surname as surnameB } from "./johannes.js";
import { role as roleB } from "./johannes.js";

import {firstname as firstnameC  } from "./alex.js";
import {surname as surnameC } from "./alex.js";
import {role as roleC } from "./alex.js";



const display1 = firstnameA + " " + surnameA + " " + "("+roleA+")";

document.querySelector('#nwabisa').innerText = display1

const display2 = firstnameB + " " + surnameB + " " + "("+roleB+")";

  document.querySelector('#johannes').innerText = display2

  const display3 = firstnameC + " " + surnameC + " " + "("+roleC+")";

  document.querySelector('#alex').innerText = display3

 console.log('Roles:',[roleA, roleB, roleC])
 
