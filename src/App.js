import React, { useState } from 'react'

export const App = () => {
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
      <div className='row'>
        <div className="col-4" ></div>
        <div className="col-4">
          <div className="card mt-3">
            <span className='p-2' style={{ fontWeight: 'bold' }}>CASIO Calculator</span>
            <div className='row px-3' style={{ height: '60px' }}>
              <div className="col-10 alert alert-primary" style={{ margin: '0px' }}>
                {des}
              </div>
              <div className="col-2 alert alert-secondary" style={{ margin: '0px' }}>
                {lastOperation}
              </div>
            </div>
            <div class="card-body">
              <div className='row'>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("7"); }}>7</button>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("8"); }}>8</button>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("9"); }}>9</button>
                <button className="w-25 btn btn-success btn-lg border border-secondary" onClick={() => { operation("/"); }}>/</button>
              </div>
              <div className='row'>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("4"); }}>4</button>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("5"); }}>5</button>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("6"); }}>6</button>
                <button className="w-25 btn btn-success btn-lg border border-secondary" onClick={() => { operation("*"); }}>*</button>
              </div>
              <div className='row'>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("1"); }}>1</button>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("2"); }}>2</button>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("3"); }}>3</button>
                <button className="w-25 btn btn-success btn-lg border border-secondary" onClick={() => { operation("-"); }}>-</button>
              </div>
              <div className='row'>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { btnNum("0"); }}>0</button>
                <button className="w-25 btn btn-primary btn-lg border border-secondary" onClick={() => { dot(); }}>.</button>
                <button className="w-25 btn btn-warning btn-lg border border-secondary" onClick={() => { equal(); }}>=</button>
                <button className="w-25 btn btn-success btn-lg border border-secondary" onClick={() => { operation("+"); }}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4" ></div>
      </div>
    </>
  )
}
