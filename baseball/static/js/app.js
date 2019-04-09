function buildPlot() {
    /* data route */
  var url = "/api/people";
  d3.json(url).then(function(response) {

    console.log(response);

    var data = response;

    Plotly.newPlot("people", [data]);
  });
}

buildPlot();

function buildHomerunPlot() {
  /* data route */
var url = "/api/batting";
d3.json(url).then(function(response) {

  console.log(response);

  var data = response;
  var layout = {
            title: "Homeruns per Year",
            xaxis: {
              tickangle: -45,
              title: "Decade"
            }
  }

  Plotly.newPlot("batter", [data]);
});
}

buildHomerunPlot()

function buildAttendancePlot() {
  /* data route */
var url = "/api/attendance";
d3.json(url).then(function(response) {

  console.log(response);

  var data = response;
  var layout = {
          title: 'Yearly Attendance for MLB (by Team)',
          xaxis: {
                  tickangle: -45
          },
          annotations: [
    {
      x: 1981,
      y: 26609610,
      xref: 'x',
      yref: 'y',
      text: '81 Player Strike',
      showarrow: true,
      arrowhead: 6,
      ax: 70,
      ay: 0
    },
    {
      x: 1994,
      y: 49984410,
      xref: 'x',
      yref: 'y',
      text: '94-95 Baseball Lockout Season',
      showarrow: true,
      arrowhead: 6,
      ax: 0,
      ay: 50
    }
  ]
  };

  Plotly.newPlot("attendance", [data], layout);
});
}

buildAttendancePlot()

function buildSalaryPlot() {
  /* data route */
var url = "/api/salary";
d3.json(url).then(function(response) {

  console.log(response);

  var data = response;

  Plotly.newPlot("salary", [data]);
});
}

buildSalaryPlot()
