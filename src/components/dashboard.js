import React from "react";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import Cat from './Cat';

export default function Dashboard() {
  return (
    <AwesomeSlider>
        <div data-src="https://tse2-mm.cn.bing.net/th/id/OIP.beme4RCj0MOwiYCuiRbc3gHaD4?pid=Api&rs=1" />
        <div data-src="https://i.chzbgr.com/full/9013921024/h0004633F/cat-difference-between-cats-and-dogsis-dogs-hide-whenthey-have-done-something-wrong-cats-are-proud" />
        <div data-src="https://i.chzbgr.com/full/9013904640/hFAFD41A9/cat-someone-tells-sit-like-lady" />
    </AwesomeSlider>
  );
}
