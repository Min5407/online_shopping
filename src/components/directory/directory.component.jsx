import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selelctors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu_item/menu-item.component";
import "./directory.style.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionsProbs }) => (
      <MenuItem key={id} {...sectionsProbs} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
