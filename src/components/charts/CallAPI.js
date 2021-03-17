import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [
              { 
                label: 'west',
                data: [],
                backgroundColor: '#3e95cd',
                fill: false
              },
              { 
                label: 'national',
                data: [],
                backgroundColor: '#8e5ea2',
                fill: false
              },
              { 
                label: 'east',
                data: [],
                backgroundColor: '#3cba9f',
                fill: false
              },
              { 
                label: 'central',
                data: [],
                backgroundColor: '#e8c3b9',
                fill: false
              },
              { 
                label: 'south',
                data: [],
                backgroundColor: '#c45850',
                fill: false
              },
              { 
                label: 'north',
                data: [],
                backgroundColor: 'blue',
                fill: false
              },
            ]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            response.data.items.forEach(data => { 
                this.datacollection.labels.push(data.timestamp)
                for (let i=0; i < data.readings.psi_twenty_four_hourly.length; i++) {
                  let region = this.datacollection.datasets[i].label
                  this.datacollection.datasets[i].data.push(data.readings.psi_twenty_four_hourly[region])
                }
            })
            
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}