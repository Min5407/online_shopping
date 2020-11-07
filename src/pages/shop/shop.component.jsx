import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";

import { fireStore } from "../../firebase/firebase.utils";
import { convertCollectionSnapshotsToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.action";
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = fireStore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotsToMap(snapshot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    console.log("shop mounted");
    return (
      //the reason why match is passed as a prop in this component is because this component is wraaped in Router in the app js.
      <div className="shop-page ">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
