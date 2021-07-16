<template>
  <div>
    <b-jumbotron lead="Daily Trents" id="tr">
      <mdb-container>
        <mdb-line-chart
          :data="lineChartData"
          :options="lineChartOptions"
          :width="600"
          :height="300"
        ></mdb-line-chart>
      </mdb-container>
    </b-jumbotron>
  </div>
</template>

<script>
import { mdbLineChart, mdbContainer } from "mdbvue";
export default {
  name: "ChartPage",
  components: {
    mdbLineChart,
    mdbContainer,
  },
  created() {
    // Replicate the following snippet for dynamic value extraction to chart values
    this.$data.lineChartData.datasets[0].data.push(70)
    this.$data.lineChartData.datasets[0].data.push(59)
    this.$data.lineChartData.datasets[0].data.push(80)
    this.$data.lineChartData.datasets[0].data.push(81)
    this.$data.lineChartData.datasets[0].data.push(55)
    this.$data.lineChartData.datasets[0].data.push(90)
    this.$data.lineChartData.datasets[0].data.push(40)
    //console.log(this.$data.lineChartData.datasets[0].data)
  },
  data() {
    var yesterday = []
    var today = [28, 48, 40, 19, 86, 27, 90]
    return {
      lineChartData: {
        labels: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
        datasets: [
          {
            label: "Yesterday",
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255, 99, 132, 1.5)",
            borderWidth: 0.7,
            data: yesterday
          },
          {
            label: "Today",
            backgroundColor: "rgba(151,187,205,0.6)",
            borderColor: "rgba(151,187,205,1.5)",
            borderWidth: 0.8,
            data: today,
          },
        ],
      },
      lineChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.6)",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.6)",
              },
            },
          ],
        },
      },
    };
  },
};
</script>
<style>
#tr:hover {
  transform: scale(1);
}
</style>
