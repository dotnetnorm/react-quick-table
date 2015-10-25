var React = require("react");

var TextColumn=require("./TextColumn");
var LinkColumn = require("./LinkColumn");
var CustomColumn = require("./CustomColumn");
var rows= [];
var TBody = React.createClass({

  _createRows: function(children,data){

    var self=this;
        for(var i = 0; i < data.length; i++){
          var columns = [];
        React.Children.forEach(children,function(child){

            var value = data[i][child.props.column];

            switch(child.type){
              case TextColumn:

                columns.push(React.cloneElement(child,{key:i + child.props.header + value,value:value, header:child.props.header || child.props.column}));
                break;
              case LinkColumn:
                columns.push(React.cloneElement(child, {key:i + child.props.header + value, value:value}));
                break;
              case CustomColumn:
                 columns.push(React.cloneElement(child,{key:i + child.props.header + value,format:child.props.format,
                        value:value, columnData:self.props.columnData},
                        React.Children.map(child.props.children,function(c){
                            return React.cloneElement(c,{value:value});
                 })));
                 break;
              default:
                break;
            }
        });
        rows.push(columns);

      }
  },
  render: function(){
     var count = 0;
     rows=[];
      this._createRows(this.props.children,this.props.columnData);
        return (<tbody>{rows.map(function(r){
            count++;
            return (<tr key={count}>{
            r.map(function(c){
              return c;
            })}</tr>)
        })}</tbody>)
      }

});

module.exports = TBody;
