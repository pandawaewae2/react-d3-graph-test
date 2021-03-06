module.exports = {
    automaticRearrangeAfterDropNode: false,
    collapsible: false,
    height: 400,
    highlightDegree: 1,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 8,
    minZoom: 0.1,
    nodeHighlightBehavior: true,
    panAndZoom: true,
    staticGraph: false,
    width: 800,
    node: {
        color: "#d3d3d3",
        fontColor: "black",
        fontSize: 10,
        fontWeight: "bold",
        highlightColor: "red",
        highlightFontSize: 12,
        highlightFontWeight: "bold",
        highlightStrokeColor: "SAME",
        highlightStrokeWidth: 1.5,
        labelProperty: "name",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: true,
        size: 200,
        strokeColor: "none",
        strokeWidth: 1.5,
        svg: "",
        symbolType: "circle",
        labelPosition: "top",
    },
    link: {
        color: "#d3d3d3",
        fontColor: "red",
        fontSize: 10,
        highlightColor: "blue",
        highlightFontWeight: "bold",
        labelProperty: link => `from ${link.source} to ${link.target}`,
        opacity: 1,
        renderLabel: false,
        semanticStrokeWidth: false,
        strokeWidth: 2,
    },
    d3: {
        gravity: -400,
        linkLength: 300,
    },
};
