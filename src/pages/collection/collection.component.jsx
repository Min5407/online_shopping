import React from "react";
import "./collection.style.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  if (collection) {
    const { title, items } = collection;

    return (
      <div className="collection-page">
        <h2 className="title">{title} </h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

//ownProps below is same as this.props which gets all the props for this component which are match,history,etc
const mapStateToProps = (state, ownProps) => ({
  //collectionId parameter comes first because of Currying in the selectCollection function
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
