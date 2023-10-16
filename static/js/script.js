document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            // Extracting data for Plotly
            console.log(data[0])
            let tickerName = [...new Set(data.map(d => d[1]))];

            console.log(tickerName);
            let dates = data[2][2];
            console.log(dates);

            timeStamp = [];

            for (i=0; i < data.length; i++){
                timeStamp.push(data[i][2]);
            }

            console.log(timeStamp)

            let trace = {
                type: "scatter",
                mode : "lines",
                x : timeStamp,
                y : tickerName,
                name : "some name"
            }



            Plotly.newPlot('plotly-graph', [trace]);
            
        })
        .catch(error => console.error('Error:', error));
});
