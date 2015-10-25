var React = require("react");
var ReactDOM = require("react-dom");
var CollapsedHeader= require("./CollapsedHeader");
var columns =[];
var Header = React.createClass({
    sort:function(column){

      var elementToFind="Header-" + column;

      var element = document.getElementById(elementToFind);

      if (element && element.className.indexOf("asc")>-1){
        element.classList.remove("asc");
        element.classList.add("desc");
        this.props.sort("-" + column);
      }
      else{
        if (element){
        element.classList.remove("desc");
        element.classList.add("asc");
        this.props.sort(column);
      }
      }
    },


    _buildHeader:function(props){

      var self= this;

      if (props.headerData && props.headerData.length>0){

        props.headerData.map(function(d){
           if (d.isSortable){
             var item = (<th key={"h." + d.header} id={"Header-" + d.column} className="sortable" onClick={self.sort.bind(self,d.column)}>{d.header}</th>);
            columns.push(item);
          }
          else{
            columns.push(<th key={"h." + d.header}>{d.header}</th>);
          }
        });
      }
    },

    _getStyle:function(){
      var percentage = 100/columns.length;
      return {width:percentage + "%"};
    },
    render:function(){

      columns=[];
      this._buildHeader(this.props);

      var tdStyle = this._getStyle();


      return (<thead><tr>
            {columns.map(function(c){
            return (c)
            })}
      </tr></thead>);
    }

})

module.exports = Header;
