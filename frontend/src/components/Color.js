import React from "react";

const createRandomColor = () => {
    let colArr = [];
    for (let i = 0; i < 3; i++) {
        let single = Math.floor(Math.random() * 256).toString();
        colArr.push(single);
    }
    let r = colArr[0];
    let g = colArr[1];
    let b = colArr[2];
    let color = `rgb(${r},${g},${b})`;
    return color;
};

const Color = ({ count }) => {
    return (
        <>
            <ul>
                {(() => {
                    let ele = [];
                    for (let i = 0; i < parseInt(count); i++) {
                        let color = createRandomColor();
                        let li = (
                            <li
                                key={i}
                                style={{
                                    backgroundColor: color,
                                }}
                            ></li>
                        );
                        ele.push(li);
                    }
                    return ele;
                })()}
            </ul>
        </>
    );
};
export default Color;
