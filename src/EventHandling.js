import React from 'react';
import "./App.css"

function EventHandling() {

  var ele = document.getElementsByTagName("div");
  for (let i = 0; i < ele.length; i++)
  {
    ele[i].addEventListener("click", clickHandler,false);
  }

  function clickHandler(){
    alert(this.getAttribute("id"));
  }
    return (
      // <form onClick={() => alert("jii")}>
      //   FORM
      //   <div onClick={() => alert("hii")}>
      //     DIV
      //     <p onClick={() => alert("prii")}>P</p>
      //   </div>
      // </form>
      <div id="d1" className="style">
        DIV1
        <div id="d2" className="style">
          DIV2
          <div id="d3" className="style">
            DIV3
          </div>
        </div>
      </div>
    );
}

export default EventHandling;