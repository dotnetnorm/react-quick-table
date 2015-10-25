var React = require("react");

var TextColumn = React.createClass({
    render: function(){
      return (<td data-label={this.props.header}>{this.props.value}</td>);
    }
});

module.exports = TextColumn;
