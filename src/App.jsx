function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            background: "red",
            width: "100px",
            height: "100px",
            margin: "10px",
          }}
        ></div>
        <div
          style={{
            background: "green",
            width: "100px",
            height: "100px",
            margin: "10px",
          }}
        ></div>
        <div
          style={{
            background: "yellow",
            width: "100px",
            height: "100px",
            margin: "10px",
          }}
        ></div>
      </div>
      <div className="flex justify-between">
        <div className="bg-red-500 w-20 h-20 m-2"></div>
        <div className="bg-green-500 w-20 h-20 m-2"></div>
        <div className="bg-yellow-500 w-20 h-20 m-2"></div>
      </div>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-5 ">hi</div>
        <div className="bg-green-500  col-span-2">hi</div>
        <div className="bg-yellow-500  ">hi</div>
        <div className="bg-orange-500 ">hi</div>
      </div>
    </>
  );
}

export default App;
