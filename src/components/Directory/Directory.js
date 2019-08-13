import React, { Component } from "react";
import MenuItem from "../MenuItem";

import "./directory.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "hats"
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: ""
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: ""
      },
      {
        title: "women",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        id: 4,
        size: "large",
        linkUrl: ""
      },
      {
        title: "men",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        id: 5,
        size: "large",
        linkUrl: ""
      }
    ]
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
