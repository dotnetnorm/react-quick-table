var React = require("react");

var LinkColumn = React.createClass({
    render: function(){
      return (<td data-label={this.props.header}><a href={this.props.format}>{this.props.value}</a></td>);
    }
});

module.exports = LinkColumn;
