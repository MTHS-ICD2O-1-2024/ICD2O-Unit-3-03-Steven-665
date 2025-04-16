// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Mar 2025
// This file contains the JS functions for index.html


"use strict"


/**
* This function calculates volume of a sphere.
*/
function calculateVolumeOfSphere () {
 // input
 const RadiusOfSphere  = parseFloat(document.getElementById('Radius-of-sphere').value)

 // process
 const volumeOfSphere = 4/3*Math.PI*RadiusOfSphere*RadiusOfSphere*RadiusOfSphere


 // output
 document.getElementById('volume').innerHTML = 'volume is: ' + volumeOfSphere.toFixed(2) + ' mm³'
}