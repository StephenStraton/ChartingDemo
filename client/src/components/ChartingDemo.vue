<template>
  <section id="charting-demo">
    <h1>Here's our data</h1>
    <demo-chart v-if="loaded" :chart-data="rawData"> </demo-chart>
  </section>
</template>

<script>
import axios from 'axios'
import DemoChart from './DemoChart'

export default {
  name: 'charting-demo',
  components: {
    DemoChart
  },
  data () {
    return {
      rawData: [],
      loaded: false
    }
  },
  mounted () {
    this.requestData()
  },
  methods: {
    requestData () {
      axios.get('http://localhost:3000/results')
        .then(response => {
          this.rawData = response.data.rows
          this.loaded = true
        })
    }
  }
}
</script>