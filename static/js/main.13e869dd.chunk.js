(this.webpackJsonptooltip_react=this.webpackJsonptooltip_react||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){"use strict";o.r(t);var a=o(0),i=o.n(a),n=o(2),l=o.n(n),r=(o(12),o(3)),c=o(4),p=o(6),d=o(5);var m=function(e){var t=e.props;return i.a.createElement("div",null,"top"===t&&i.a.createElement("div",{id:"tipboxtop"},i.a.createElement("div",{id:"tooltiptop"},"I am a ToolTip at ",t,"!"),i.a.createElement("div",{id:"triangletop"})),"down"===t&&i.a.createElement("div",{id:"tipboxdown"},i.a.createElement("div",{id:"tooltipdown"},"I am a ToolTip at ",t,"!"),i.a.createElement("div",{id:"triangledown"})),"left"===t&&i.a.createElement("div",{id:"tipboxleft"},i.a.createElement("div",{id:"tooltipleft"},"I am a ToolTip at ",t,"!"),i.a.createElement("div",{id:"triangleleft"})),"right"===t&&i.a.createElement("div",{id:"tipboxright"},i.a.createElement("div",{id:"tooltipright"},"I am a ToolTip at ",t,"!"),i.a.createElement("div",{id:"triangleright"})))},s=function(e){Object(p.a)(o,e);var t=Object(d.a)(o);function o(){var e;return Object(r.a)(this,o),(e=t.call(this)).onHover=function(){e.setState({box:"image",showTooltip:!0})},e.onLeave=function(){e.setState({box:"text",showTooltip:!1})},e.handleChange=function(t){e.setState({tooltipPosition:t.target.value})},e.state={box:"text",showTooltip:!1,tooltipPosition:"top"},e}return Object(c.a)(o,[{key:"render",value:function(){var e=this.state,t=e.box,o=e.showTooltip,a=e.tooltipPosition;return i.a.createElement("div",null,i.a.createElement("label",null,"Set tooltip position:",i.a.createElement("select",{value:a,onChange:this.handleChange},i.a.createElement("option",{value:"top"},"Top"),i.a.createElement("option",{value:"right"},"Right"),i.a.createElement("option",{value:"down"},"Down"),i.a.createElement("option",{value:"left"},"Left"))),i.a.createElement("div",{id:"main",onMouseEnter:this.onHover,onMouseLeave:this.onLeave},o&&i.a.createElement(m,{props:a}),"text"===t&&i.a.createElement("span",{id:"downtext"},"DOWNLOAD"),"image"===t&&i.a.createElement("img",{src:"https://img.techpowerup.org/200810/pinclipart-com-clipart-downloader-536411.png",id:"downimage"})))}}]),o}(a.Component);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s,null)),document.getElementById("root"))},7:function(e,t,o){e.exports=o(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.13e869dd.chunk.js.map