// Function to sort the data in ascending order
function upData(data) {
    let newData = data.sort(function (a, b) {
      return a - b;
    });
  
    return newData;
  }
  
  // Function to sort the data in descending order
  function downData(data) {
    let newData = data.sort(function (a, b) {
      return b - a;
    });
  
    return newData;
  }
  
  // Function to find the max valued data
  function maxData(data) {
    let maxEle = Math.max(...data);
    return maxEle;
  }
  
  // Function to find the min valued data
  function minData(data) {
    let minEle = Math.min(...data);
  
    return minEle;
  }
  
  // Function to get the sum of the data
  function sumOfData(data) {
    var sum = data.reduce(function (a, b) {
      return a + b;
    });
  
    return sum;
  }
  
  // Function to find the median of the data
  function medianOfData(data) {
    let arr1 = data.sort(function (a, b) {
      a - b;
    });
    let mid = Math.floor(arr1.length / 2);
  
    if (arr1.length % 2) {
      return arr1[mid];
    } else {
      return (arr1[mid - 1] + arr1[mid]) / 2;
    }
  }
  
  // Function to calculate the mean of the data
  function meanOfData(data) {
    let sum = 0;
    if (mymap.get(4) == undefined) {
      sum = mymap.set(4, sumOfData(data));
    }
  
    let length = data.length;
    let mean = (mymap.get(4) / length).toFixed(3);
  
    return mean;
  }
  
  // Function to calculate the standard deviation
  function stdev(data) {
    const mean = meanOfData(data);
    let sumOfSquares = 0;
  
    for (let i = 0; i < data.length; i++) {
      sumOfSquares += (data[i] - mean) * (data[i] - mean);
    }
    const val = sumOfSquares / data.length;
  
    return Math.sqrt(val).toFixed(3);
  }
  
  // Main JS
  let data = [];
  let mymap = new Map();
  
  
  
  var selectEl = document.querySelector("select");
  var goBtn=document.querySelector(".button");
  var divEl = document.querySelector(".result");
  goBtn.addEventListener("click",function()
   {
    data = document.querySelector(".input").value.split(" ");
  
    if (data.length === 1 && data[0] === "") {
      alert("No DATA! No Analysis!");
    }
  
  
    for (let i = 0; i < data.length; i++) {
      data[i] = Number(data[i].trim());
    }
    if(data.some(isNaN) || data.length===1)
    {
      document.querySelector(".result").value="Please Provide Numbers With space (Input Error)";
      document.querySelector(".result").style.borderColor = "red";
     
    }
    else
    {
  
    
    var op = selectEl.value;
    document.querySelector(".result").style.borderColor = "red";
    if (mymap.get(op) != undefined) {
      divEl.innerHTML = mymap.get(op);
    } else if (op == 0) {
      mymap.set(op, upData(data));
    } else if (op == 1) {
      mymap.set(op, downData(data));
    } else if (op == 2) {
      mymap.set(op, maxData(data));
    } else if (op == 3) {
      mymap.set(op, minData(data));
    } else if (op == 4) {
      mymap.set(op, sumOfData(data));
    } else if (op == 5) {
      mymap.set(op, meanOfData(data));
    } else if (op == 6) {
      mymap.set(op, medianOfData(data));
    } else if (op == 7) {
      mymap.set(op, stdev(data));
    }
    console.log(mymap.get(op))
    divEl.value = "Result : " + mymap.get(op);

    }
  
    
    
  });
  