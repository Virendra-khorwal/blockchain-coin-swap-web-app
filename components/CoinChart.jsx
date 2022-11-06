import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../asset/lottie/loading.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useAxios from "../hooks/useAxios";
import moment from "moment";
import { useRouter } from "next/router";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinChart = ({id}) => {
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  console.log(response);
  if (!response) {
    return (
      <div> 
        <Player className="w-32" src={loadingAnimation} autoplay loop />
      </div>
    );
  }

  const coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map((val) => val.y),
        borderColor: "rgb(107, 102, 255)",
        backgroundColor: "rgba(107, 102, 255, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default CoinChart;
