

var p=[]
var upValue=null;
var downValue=null;
var maxValue=null;
var minValue=null;
var sumValue=null;
var meanValue=null;
var stdevValue=null;
var medianValue=null;

function up(arr)
{

   return arr.sort((a,b)=>a-b)
}

function down(arr)
{
    
    return arr.sort((a,b)=>b-a);
}
function max(arr)
{
    return arr.reduce((a,b)=>Math.max(a,b))
}
function min(arr)
{
    return arr.reduce((a,b)=>Math.min(a,b))
}
function sum(arr)
{
    return arr.reduce((a,b)=>a=a+b)
}
function mean(arr)
{
    var p=arr.reduce((a,b)=>a=a+b)
    var l=arr.length;
    return (p/l).toFixed(3);
}
function median(arr)
{
    var sortedArr=upValue?upValue:up(arr);
   mid=Math.ceil(arr.length/2);
   var l=arr.length;
   if(l%2==0)
   {
       return Math.ceil(sortedArr[mid]+sortedArr[mid-1]/2).toFixed(3);
   }
   else
   {
       return sortedArr[mid-1];
   }


}

// square root of ( sum of (square of (difference of each element and mean)) )
function stdev(arr)
{
    var t=0;

    var m = meanValue?meanValue:mean(arr);
    for (let i = 0; i < arr.length; i++) {
        let cal = Math.pow(parseFloat(arr[i]-m),2);
        t += cal;
      }
    return Math.sqrt(t/arr.length).toFixed(3)
}

var isOp=true;
try{
    var k=prompt("Enter space separated numbers").split(' ');
    for (let j of k)
    {
        p.push(Number(j))

    }
    if(p.some(isNaN))
        throw new Error('Inputs Must contain numbers');
    else
    {

        while(isOp){
    
            var op=prompt("Enter Operations")
            switch(op.toLowerCase())
            {
                case "quit":
                    isOp=false;
                    break;
            
                case "up":
                    {
            
                  if(upValue)
                  console.log(upValue)
                  else
                  {
                      upValue=up(p);
                      console.log(upValue)
                  }
                    console.log("Try another operation Or Quit")
                    break;
                    }
                case "down":
                    {
            
                    
                        if(downValue)
                  console.log(downValue)
                  else
                  {
                      downValue=down(p);
                      console.log(downValue)
                  }
                        console.log("Try another operation Or Quit")
                        break;
                    }
                case "max":
                    {
            
                    
                        if(maxValue)
                        console.log(maxValue)
                        else
                        {
                            maxValue=max(p);
                            console.log(maxValue)
                        }
                            console.log("Try another operation Or Quit")
                            break;
                    }
                case "sum":
                    {
            
                    
                        if(sumValue)
                        console.log(sumValue)
                        else
                        {
                            sumValue=sum(p);
                            console.log(sumValue)
                        }
                        console.log("Try another operation Or Quit")
                        break;
                    }
                
                case "min":
                    {
            
                    
                        if(minValue)
                        console.log(minValue)
                        else
                        {
                            minValue=min(p);
                            console.log(minValue)
                        }
                            console.log("Try another operation Or Quit")
                            
                            break;
                    }
                
                case "mean":
                    {
            
                    
                        if(meanValue)
                        console.log(meanValue)
                        else
                        {
                            meanValue=mean(p);
                            console.log(meanValue)
                        }
                                console.log("Try another operation Or Quit")
                                break;
                    }
                case "median":
                    {
            
                    
                        if(medianValue)
                        console.log(medianValue)
                        else
                        {
                            medianValue=median(p);
                            console.log(medianValue)
                        }
                                    console.log("Try another operation Or Quit")
                                    break;
                    }
                 case "stdev":{
                    if(stdevValue)
                    console.log(stdevValue)
                    else
                    {
                        stdevValue=stdev(p);
                        console.log(stdevValue)
                    }
                        console.log("Try another operation Or Quit")
                                break;}
                default:
                    console.log("Please try Correct operation");
                    
            }
            }
            
            

    }
}
catch(e)
{
    console.error(e)
}

