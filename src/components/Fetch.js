// This is not a component

import React, { useState, useEffect } from "react";

const aego = async () => {
    const res = await fetch("https://cat-fact.herokuapp.com/facts");
    const data = await res.json();
    return data.all;
};
export default aego;
