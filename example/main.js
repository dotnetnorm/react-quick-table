var React = require("react");
var Table = require("../react-easy-table/Table");
var ReactDOM = require("react-dom");
var TextColumn = require("../react-easy-table/TextColumn");
var LinkColumn = require("../react-easy-table/LinkColumn");
var CustomColumn = require("../react-easy-table/CustomColumn");
var ValueReplacer = require("../react-easy-table/ValueReplacer");
var PageContent= React.createClass({

  getInitialState:function(){
    var data = [{Name:"John Doe",Dob:"1900-01-01",Location:"USA"},{Name:"Jane Doe",Dob:"1900-02-01",Location:"Germany"}];

    return {
        columnData:data,
        sortedData:data
    };
  },

  render:function(){
    return (<Table style={{width:"50%"}} columnData={this.state.sortedData} >
                <TextColumn column="Name"  sortable={true} />
                <LinkColumn format="http://test/" column="Dob" header="Dob"/>
                <CustomColumn column="Location" header="Location" sortable={true}>
                  <div>Test Custom Column</div>
                  <ValueReplacer elementType="link" url="http://testmysite/" />
                </CustomColumn>
            </Table>);
  }
});

module.exports = PageContent;

React.render(<PageContent />, document.getElementById("pageContent"));
