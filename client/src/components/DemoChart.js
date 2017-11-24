import {
  Line,
  mixins
} from 'vue-chartjs'
import dateformat from 'dateformat'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart({
      labels: this.chartData.map(entry => dateformat(entry.result_day, 'isoDate')),
      datasets: [{
        label: 'Results',
        borderColor: 'DeepSkyBlue',
        pointBackgroundColor: 'DeepSkyBlue',
        borderWidth: 1,
        pointBorderColor: 'DeepSkyBlue',
        backgroundColor: 'transparent',
        pointRadius: 1,
        lineTension: 0,
        data: this.chartData.map(entry => entry.result_value)
      }]
    }, this.options)
  }
}
