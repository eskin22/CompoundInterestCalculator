function graphPlot (data) {
    const combinedHoverText = data['years'].map((year, index) => {
        return `Year: ${year}<br>Total Principal: $${addDecimals(data['total_principal'][index])}<br>Total Interest: $${addDecimals(data['total_interest'][index])}`;
    });
    
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
            // bgcolor: 'white'
        },
        showlegend: false
    };
    
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
    
    Plotly.newPlot('plot', [trace1, trace2, trace1Legend, trace2Legend], layout);
};

