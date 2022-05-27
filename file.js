d3.csv("final_file.csv", function(d){
    console.log(d.columns)

    var linegraph = d3.select("#linegraph")

    linegraph.append("svg")
    .attr("width", 500)
    .attr("height", 500)
})