import logo from "./logo.svg";
import "./App.css";
import video from "./video.mp4";

function App() {
  return (
    <div>
      <div className="happy">İYİ Kİ DOĞDUN LAN ŞEREFSİZZZ</div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "grid",
          justifyContent: "center",
          placeItems: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <video
          style={{ overflow: "hidden" }}
          width="400%"
          height="100%"
          autoPlay
          muted
          controls={false}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
