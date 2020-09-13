
function optionChanged(newSample) {
  buildMetadata(newSample);
  //buildCharts(newSample);
}
  function buildMetadata(sample) {
    d3.json("samples2.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
      console.log(result);

      PANEL.html("");
      
      Object.entries(result).forEach(([key, value]) => {
        console.log(key.toUpperCase() + ": " + value);
        PANEL.append("h6").text(key.toUpperCase() + ": " + value);
      });
    });
  }