import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
    let image1 = getAsset(entry.getIn(["data", "image1"]));
    // let boopdate = format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY")

    return <div id="main" className="mw7 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <p>hi{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") } { format(entry.getIn(["data", "newdate"]), "ddd, MMM D, YYYY") }</p>
        <p>Read in x minutes</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "description"]) }</p>
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
        { image1 && <img src={ image1 } alt={ entry.getIn(["data", "title"])} /> }
        { widgetFor("body") }
      </div>
    </div>;
  }
}
