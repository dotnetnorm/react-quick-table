var React = require("react");
var Table = require("../react-easy-table/Table");
var ReactDOM = require("react-dom");
var TextColumn = require("../react-easy-table/TextColumn");
var LinkColumn = require("../react-easy-table/LinkColumn");
var CustomColumn = require("../react-easy-table/CustomColumn");
var ValueReplacer = require("../react-easy-table/ValueReplacer");
var PageContent= React.createClass({

  getInitialState:function(){
    var data = [{Name:"Norm",Dob:"1971-12-29",Location:"USA"},{Name:"Dan",Dob:"1971-12-29",Location:"Germant"}];

    return {
        headerData:[{header:"Name",column:"Name",isSortable:true},{header:"Dob",column:"Dob"},{header:"Location",isSortable:"true",column:"Location"}],
        columnData:data,
        sortedData:data
    };
  },

  render:function(){
    return (<Table style={{width:"50%"}} headerData={this.state.headerData} columnData={this.state.sortedData} >
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

React.render(<PageContent />, document.getElementById("test"));
