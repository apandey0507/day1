

var p=[]
function up(arr)
{
    return arr.sort((a,b)=>a-b)
}
function down(arr)
{
    ;
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
    var sortedArr=arr.sort((a,b)=>a-b);
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
    var m = mean(arr)
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
        throw new Error('Inputs Must contain numbers and must be Separated by Spaces');
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
            
                    
                    console.log(up(p))
                    console.log("Try another operation Or Quit")
                    break;
                    }
                case "down":
                    {
            
                    
                        console.log(down(p))
                        console.log("Try another operation Or Quit")
                        break;
                    }
                case "max":
                    {
            
                    
                            console.log(max(p))
                            console.log("Try another operation Or Quit")
                            break;
                    }
                case "sum":
                    {
            
                    
                        console.log(sum(p))
                        console.log("Try another operation Or Quit")
                        break;
                    }
                
                case "min":
                    {
            
                    
                            console.log(min(p))
                            console.log("Try another operation Or Quit")
                            
                            break;
                    }
                
                case "mean":
                    {
            
                    
                                console.log(mean(p))
                                console.log("Try another operation Or Quit")
                                break;
                    }
                case "median":
                    {
            
                    
            
                                    console.log(median(p))
                                    console.log("Try another operation Or Quit")
                                    break;
                    }
                 case "stdev":{
                        console.log(stdev(p))
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
    console.error(e);
    
}

