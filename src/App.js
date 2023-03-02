import { useState } from "react";


function App() {
  const [des, setDes] = useState("");
  var tmpDes = "";
  const [num, setNum] = useState(0);
  const [lastOperation, setLastOperation] = useState("");
  const [IsClear, setIsClear] = useState(false);

  const btnNum = (bt) => {
    if (IsClear) {
      setDes(bt);
      setIsClear(false);
    } else {
      setDes(des + bt);
    }
  }

  const dot = () => {
    if (IsClear) {
      setDes("0.");
      setIsClear(false);
    } else {
      if (des.includes(".") === false) {
        setDes(des + ".");
      }
    }
  }

  const equal = () => {
    setIsClear(true);
    if (lastOperation === "+") {
      setDes(Number.parseFloat(num) + Number.parseFloat(des));
      tmpDes = Number.parseFloat(num) + Number.parseFloat(des);
    }
    if (lastOperation === "-") {
      setDes(Number.parseFloat(num) - Number.parseFloat(des));
      tmpDes = Number.parseFloat(num) - Number.parseFloat(des);
    }
    if (lastOperation === "*") {
      setDes(Number.parseFloat(num) * Number.parseFloat(des));
      tmpDes = Number.parseFloat(num) * Number.parseFloat(des);
    }
    if (lastOperation === "/") {
      setDes(Number.parseFloat(num) / Number.parseFloat(des));
      tmpDes = Number.parseFloat(num) / Number.parseFloat(des);
    }
    setLastOperation("");
  }

  const operation = (bt) => {
    equal();
    if (tmpDes === "") {
      setNum(des);
    } else {
      setNum(tmpDes);
    }
    setLastOperation(bt);
  }

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
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("7"); }}>7</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("8"); }}>8</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("9"); }}>9</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success btn-lg" onClick={() => { operation("/"); }}>/</button>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("4"); }}>4</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("5"); }}>5</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("6"); }}>6</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success btn-lg" onClick={() => { operation("*"); }}>*</button>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("1"); }}>1</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("2"); }}>2</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("3"); }}>3</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success btn-lg" onClick={() => { operation("-"); }}>-</button>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { btnNum("0"); }}>0</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-lg" onClick={() => { dot(); }}>.</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-warning btn-lg" onClick={() => { equal(); }}>=</button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-success btn-lg" onClick={() => { operation("+"); }}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </>
  );
}

export default App;
