import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  return (
    <div className="chart">
      {props.data.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
