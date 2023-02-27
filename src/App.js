import { useState } from "react";


function App() {
  const [des, setDes] = useState("");
  const [num, setNum] = useState(0);
  const [lastOperation, setLastOperation] = useState("");
  const [IsClear, setIsClear] = useState(false);


  return (
    <>
      <div className="container p-2">
        <div className="col-md-5"></div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-8">
              <div className="alert alert-primary" role="alert">
                {des}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">7</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">8</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">9</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success btn-lg">/</button>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">4</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">5</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">6</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success btn-lg">*</button>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => {
                if (IsClear) {
                  setDes("1");
                } else {
                  setDes(des + "1");
                }
              }}>1</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">2</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">3</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success btn-lg">-</button>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">0</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg">.</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-warning btn-lg">=</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success btn-lg" onClick={() => {
                setIsClear(true);
                if (lastOperation == "+") {
                  setNum(num + Number.parseInt(des));
                  setDes(num + Number.parseInt(des));
                  setLastOperation("");
                }
                if (lastOperation == "-") {
                  setNum(num - Number.parseInt(des));
                  setDes(num - Number.parseInt(des));
                  setLastOperation("");
                }
                if (lastOperation == "*") {
                  setNum(num * Number.parseInt(des));
                  setDes(num * Number.parseInt(des));
                  setLastOperation("");
                }
                if (lastOperation == "/") {
                  setNum(num / Number.parseInt(des));
                  setDes(num / Number.parseInt(des));
                  setLastOperation("");
                }
                if (lastOperation == "") {
                  setNum(Number.parseInt(des));
                }
                setLastOperation("+");
              }}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </>
  );
}

export default App;
