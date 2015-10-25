var React = require("react")

var ValueReplacer = React.createClass({
    getElement: function(props){
      switch(props.elementType){
        case "div":
          return (<div>{props.value}</div>);
          break;
        case "link":
          var url = props.url;
          return (<a href={url + props.value}>{props.linkText || props.value}</a>)
          break;
        default:
          return (<span>{props.value}</span>);

      }
    },
    render:function(){

      return (this.getElement(this.props));
    }
  });


module.exports = ValueReplacer;
