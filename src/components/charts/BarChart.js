import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Total Number of Each Dish",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of Each Dish'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      var totalItems = {}
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            var order = doc.data()
            for (var food in order) {
              if (totalItems[food]) {
                totalItems[food] += order[food]
              } else {
                totalItems[food] = order[food]
              }
            }
        })
        for (var food of Object.keys(totalItems).sort()) {
          this.datacollection.labels.push(food)
          this.datacollection.datasets[0].data.push(totalItems[food])
        }
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}