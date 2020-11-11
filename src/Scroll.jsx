import React, {Component} from "react";
import {List, ListItem} from "@material-ui/core";
import Image from "material-ui-image";

class Scroll extends Component {
    createItem = item => {
        console.log(item)
        return (
            <img src={item.url}/>      
        );
    };
    render() {
        const images = this.props.items;
        const listItems = images.map(this.createItem);
        return <ul>{listItems}</ul>;
    }
}

export default Scroll;