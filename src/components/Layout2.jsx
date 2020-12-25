import {Layout, Input} from "antd";
import React from 'react';

export default class Layout2 extends React.Component{
    render() {
        return(
            <div style={{ marginBottom: 16 }}>
                <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
            </div>
        );
    }
}