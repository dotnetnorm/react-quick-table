var React = require('react');
var Header = require("./THead");
var CollapsedHeader= require("./CollapsedHeader");
var TBody = require("./TBody");
var Table = React.createClass({

  _sort:function(column){

     var sortedData= this.props.columnData.sort(this._dynamicSort(column));

     this.setState({sortedData:sortedData});

  },
  _dynamicSort:function(property) {
   var sortOrder = 1;
   if(property[0] === "-") {
       sortOrder = -1;
       property = property.substr(1);
   }
   return function (a,b) {
       var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
       return result * sortOrder;
   }
  },
  _buildHeaderProperites:function(children){
    var headerobj = [];

      React.Children.forEach(children,function(c){
            var headerText = c.props.header || c.props.column;
            var sortable = c.props.sortable || false
            var column = c.props.column;
            headerobj.push({header:headerText,column:column,isSortable:sortable});

      })
      return headerobj;
  },
  render: function(){
    var headerData =   this._buildHeaderProperites(this.props.children);
    return (<div>
              <CollapsedHeader headerData={headerData} sort={this._sort}/>
              <table>
                <Header headerData={headerData} sort={this._sort}/>
                <TBody {...this.props} />
              </table>
            </div>);
  }



});

module.exports=Table;
