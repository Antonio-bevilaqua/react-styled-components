import styled from "styled-components";
import Item from "../Item";
import React from "react";
import ImageFilter from "../ImageFilter";

const Items = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 12px;
`;

export default (props) => (
    <Items>
        {ImageFilter(props.type)}
        <Item {...props} ></Item>
        <span>{props.date}</span>
    </Items>
);
