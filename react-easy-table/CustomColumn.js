var React = require("react");
var ReactDOM = require("react-dom");
var ValueReplacer = require("./ValueReplacer");
var currentChildren = [];
var CustomColumn = React.createClass({
render:function(){
    var self = this;
    return (<td data-label={this.props.header}>{React.Children.map(this.props.children,function(c){
      return React.cloneElement(c,{value:self.props.value});
    })}</td>);
}

});

module.exports = CustomColumn;
