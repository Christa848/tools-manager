<template>
  <mdb-container>
    <mdb-horizontal-bar-chart
      :data="horizontalBarChartData"
      :options="horizontalBarChartOptions"
      :width="500"
      :height="300"
    ></mdb-horizontal-bar-chart>
  </mdb-container>
</template>

<script>
  import { mdbHorizontalBarChart, mdbContainer } from "mdbvue";
  export default {
    name: "ChartPage",
    components: {
      mdbHorizontalBarChart,
      mdbContainer
    },
    data() {
      return {
        horizontalBarChartData: {
          labels: [
            "9+",
           
            "5-6hrs",
            "3-4hrs",
            "1-2hrs",
            "30-60min",
            "15-30min",
            " <10min "
          ],
          datasets: [
            {
              label: "# of Tickets",
              data: [12, 19, 3, 5, 2, 3],
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
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        horizontalBarChartOptions: {
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
