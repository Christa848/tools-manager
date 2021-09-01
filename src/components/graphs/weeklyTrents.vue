<template>
  <mdb-container>
    <mdb-bar-chart
      :data="barChartData"
      :options="barChartOptions"
      :width="900"
      :height="300"
    ></mdb-bar-chart>
  </mdb-container>
</template>
<script>
import { mdbBarChart, mdbContainer } from "mdbvue";
export default {
  name: "ChartPage",
  components: {
    mdbBarChart,
    mdbContainer,
  },
  data() {
    return {
      labels: [],
      data: [],
      barChartData: {
        labels: ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            data: [6, 1, 0, 0, 0, 0],
            label: "# of Tickets",
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      barChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
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
