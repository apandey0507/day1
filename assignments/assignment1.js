var p=[10,1,9,2,8,3,7,4,6];
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
console.log(up(p))
console.log(down(p))
console.log(max(p))
console.log(sum(p))
console.log(min(p))
console.log(mean(p))
console.log(median(p))
console.log(stdev(p))