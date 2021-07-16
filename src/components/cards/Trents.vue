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
<style></style>

<script>
import { mdbLineChart, mdbContainer } from "mdbvue";
export default {
  name: "ChartPage",
  components: {
    mdbLineChart,
    mdbContainer
  },
  data() {
    return {
      lineChartData: {
        labels: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
        datasets: [
          {
            label: "Yesterday",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 0.7,
            data: [0, 0, 1, 0, 0, 0, 0]
          },
          {
            label: "Today",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 0.8,
            data: [0, 0, 0, 0, 4, 0, 0]
          }
        ]
      },
      lineChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ]
        }
      }
    };
  }
};
</script>
<style>
#tr:hover {
  transform: scale(1);
}
</style>
