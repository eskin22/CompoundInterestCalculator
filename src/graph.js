/*
This file defines a function for graphing the results from the CompoundInterestCalculator;
it graphs the growth of the principal and interest over time
*/

function graphPlot (data) {

    // define the hovertext as the total principal and total interest at each respective year
    const combinedHoverText = data['years'].map((year, index) => {
        return `Year: ${year}<br>Total Principal: $${formatNumber(data['total_principal'][index])}<br>Total Interest: $${formatNumber(data['total_interest'][index])}`;
    });
    
    // create a trace for graphing the total principal
    const trace1 = {
        x: data['years'],
        y: data['total_principal'],
        type: 'scatter',
        mode: 'lines+markers',
        fill: 'tozeroy',
        marker: { color: '#4BCBFF' },
        text: combinedHoverText,
        hoverinfo: 'text',
        hoverlabel: {
            align: 'left',
            bordercolor: 'white',
            font: {
                color: 'white'
            }
        },
        showlegend: false
    };
    
    // in order to have a better looking legend, we have to create invisible traces with 
    // square markers instead of lines+markers to show a legend different from the traces we're using
    // we do this for both traces on the graph
    const trace1Legend = {
        x : [null],
        y : [null],
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#4BCBFF',
            symbol: 'square'
        },
        name: 'Total Principal',
        hoverinfo: 'none'
    };
    
    // create a trace to graph the total balance
    const trace2 = {
        x: data['years'],
        y: data['total_balance'],
        type: 'scatter',
        mode: 'lines+markers',
        fill: 'tonexty',
        marker: { color: '#57E77A' },
        text: combinedHoverText,
        hoverinfo: 'text',
        hoverlabel: {
            align: 'left',
            bordercolor: 'white',
            font: {
                color: 'white'
            }
        },
        showlegend: false
    };
    
    // add another (invisible) trace to change the legend
    const trace2Legend = {
        x : [null],
        y : [null],
        type: 'scatter',
        mode: 'markers',
        marker: {
            color: '#57E77A',
            symbol: 'square'
        },
        name: 'Total Interest',
        hoverinfo: 'none'
    };
    
    const layout = {
        xaxis: { showgrid: false },
        yaxis: { showgrid: false },
        hovermode: 'closest',
        legend: {
            x: 1,
            xanchor: 'right',
            y: -0.5,
            yanchor: 'bottom',
            orientation: 'h'
        }
    };
    
    // use Plotly to create the plot and display it on the webpage
    Plotly.newPlot('plot', [trace1, trace2, trace1Legend, trace2Legend], layout);
};

