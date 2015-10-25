var React = require("react");
var spans=[];
var CollapsedHeader = React.createClass({

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
  _getSpans:function(props){
    var self= this;
    spans = [];

    if (props.headerData && props.headerData.length>0){
       var width = 100/props.headerData.length;
       var style={width:width + "%",display:"inline",float:"left"};

      props.headerData.map(function(d){
         if (d.isSortable){
          var item=(<div  key={"a." + d.header}
                          style={style}>
                          <a id={"Header-" + d.column}
                             href="#"
                             className="sortable"
                             onClick={self.sort.bind(self,d.column)}>{d.header}
                           </a>
                    </div>);
          spans.push(item);
         }
         else{
          spans.push(<div key={"a." + d.header} style={style}>{d.header}</div>);
         }
      });
    }
   },
  render:function(){
    this._getSpans(this.props);
    return(<div className="collapsedHeader">
              {spans.map(function(s){
                                    return s;
                                    }
                        )
              }
          </div>);
  }

});

module.exports = CollapsedHeader;
