const ctx = document.getElementById('benchmarkChart').getContext('2d');

const benchmarkChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Benchmark A', 'Benchmark B', 'Benchmark C', 'Benchmark D'],
        datasets: [{
            label: 'ob1',
            data: [95, 92, 88, 98],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: 'Agent X',
            data: [85, 88, 82, 90],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Agent Y',
            data: [80, 85, 80, 88],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Performance Score'
                }
            }
        }
    }
});
