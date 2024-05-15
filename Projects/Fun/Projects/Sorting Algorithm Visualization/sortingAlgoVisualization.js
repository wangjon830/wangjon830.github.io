var a = [];
var speed = document.getElementById('Speed').value;
for(var i = 0; i < 20; i++){
    a[i] = i+1;
    var boxID = "b" + (i+1);
    document.getElementById(boxID).style.transform = "scale(1," + a[i] + ")";
}
    document.getElementById('Start').onclick = function() {
        switch(document.getElementById('AlgorithmSelect').value) {
          case "Bubble":
             document.getElementById('bubbleKey').style.display = "block";
             document.getElementById('insertionKey').style.display = "none";
             document.getElementById('selectionKey').style.display = "none";
             document.getElementById('mergeKey').style.display = "none";
             document.getElementById('quickKey').style.display = "none";
             document.getElementById('heapKey').style.display = "none";
            bubbleSort(a);
            break;         
          case "Insertion":
             document.getElementById('bubbleKey').style.display = "none";
             document.getElementById('insertionKey').style.display = "block";
             document.getElementById('selectionKey').style.display = "none";
             document.getElementById('mergeKey').style.display = "none";
             document.getElementById('quickKey').style.display = "none";
             document.getElementById('heapKey').style.display = "none"; 
            insertionSort(a);   
            break;          
          case "Selection":
             document.getElementById('bubbleKey').style.display = "none";
             document.getElementById('insertionKey').style.display = "none";
             document.getElementById('selectionKey').style.display = "block";
             document.getElementById('mergeKey').style.display = "none";
             document.getElementById('quickKey').style.display = "none";
             document.getElementById('heapKey').style.display = "none";
            selectionSort(a);   
            break;          
          case "Merge":
             document.getElementById('bubbleKey').style.display = "none";
             document.getElementById('insertionKey').style.display = "none";
             document.getElementById('selectionKey').style.display = "none";
             document.getElementById('mergeKey').style.display = "block";
             document.getElementById('quickKey').style.display = "none";
             document.getElementById('heapKey').style.display = "none";
            mergeSort(a,20); 
            break;          
          case "Quick":
             document.getElementById('bubbleKey').style.display = "none";
             document.getElementById('insertionKey').style.display = "none";
             document.getElementById('selectionKey').style.display = "none";
             document.getElementById('mergeKey').style.display = "none";
             document.getElementById('quickKey').style.display = "block";
             document.getElementById('heapKey').style.display = "none";
            quickSort(a,0,a.length-1);
            break;
          case "Heap":
             document.getElementById('bubbleKey').style.display = "none";
             document.getElementById('insertionKey').style.display = "none";
             document.getElementById('selectionKey').style.display = "none";
             document.getElementById('mergeKey').style.display = "none";
             document.getElementById('quickKey').style.display = "none";
             document.getElementById('heapKey').style.display = "block";
            heapSort(a,20);
            break;
          default:
            break;
        }

        switch(document.getElementById('Speed').value){
            case "0.5":
                speed = 0.5;
                break;
            case "1":
                speed = 1;
                break;
            case "2":
                speed = 2;
                break;
            case "3":
                speed = 3;
                break;
            default:
                speed = 1;
                break;
        }
    };
    document.getElementById('Shuffle').onclick = function() {
       a = shuffle(a);
    };    
    document.getElementById('Reverse').onclick = function() {
       a = reverse(a);
    };    
    document.getElementById('Sorted').onclick = function() {
       a = sort(a);
    };    
function disableButtons(){
    document.getElementById('Shuffle').disabled = true;
    document.getElementById('Start').disabled = true;
    document.getElementById('Sorted').disabled = true;
    document.getElementById('Reverse').disabled = true;

}
function enableButtons(){
    document.getElementById('Shuffle').disabled = false;
    document.getElementById('Start').disabled = false;
    document.getElementById('Sorted').disabled = false;
    document.getElementById('Reverse').disabled = false;
}
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
    for(var i = 0; i < array.length; i++){
        var id = "b" + (i+1);
        document.getElementById(id).style.backgroundColor  = "#05386B";
        document.getElementById(id).style.transform = "scale(1," + a[i] + ")";
    }
  return array;
}
function sort(array) {
    var a = [];
    for(var i = 0; i < 20; i++){
        a[i] = i+1;
        var boxID = "b" + (i+1);
        document.getElementById(boxID).style.transform = "scale(1," + a[i] + ")";
    }
    array = a;
    return array;
}
function reverse(array) {
    var a = [];
    for(var i = 0; i < 20; i++){
        a[i] = 20-i;
        var boxID = "b" + (i+1);
        document.getElementById(boxID).style.transform = "scale(1," + a[i] + ")";
    }
    array = a;
    return array;
}
async function swap(id1,id2,timer, rate) {
    if(id1 === id2){
        return;
    }
    var box1 = document.getElementById("p" + id1.substr(1));
    var box2 = document.getElementById("p" + id2.substr(1));
    var bar1 = document.getElementById("b" + id1.substr(1));
    var bar2 = document.getElementById("b" + id2.substr(1));
    
    var boxOffset1 = box1.offsetLeft;
    var boxOffset2 = box2.offsetLeft;
    var boxLeft1 = parseInt(box1.style.left);
    if(isNaN(boxLeft1)) boxLeft1 = 0;
    var boxLeft2 = parseInt(box2.style.left);
    if(isNaN(boxLeft2)) boxLeft2 = 0;
    
    var boxHeight1 = parseInt(bar1.style.transform.substr(bar1.style.transform.indexOf(",")+1));
    var boxHeight2 = parseInt(bar2.style.transform.substr(bar2.style.transform.indexOf(",")+1));
    
    if(boxOffset2 > boxOffset1){
          var pos = 0;
          while(pos < boxOffset2 - boxOffset1){
              pos+=rate;
              box1.style.left = boxLeft1 + pos + 'px';
              box2.style.left = boxLeft2 - pos + 'px';
              await delay(timer);
          }
              bar1.style.transform = "scale(1," + boxHeight2 + ")";
              bar2.style.transform = "scale(1," + boxHeight1 + ")";
              box1.style.left = boxLeft1 + 'px';
              box2.style.left = boxLeft2 + 'px';
    } else if (boxOffset2 < boxOffset1){
          var pos = 0;
          while(pos < boxOffset1 - boxOffset2){
              pos+=rate;
              box1.style.left = boxLeft1 - pos + 'px';
              box2.style.left = boxLeft2 + pos + 'px';
              await delay(timer);
          }
              bar1.style.transform = "scale(1," + boxHeight2 + ")";
              bar2.style.transform = "scale(1," + boxHeight1 + ")";
              box1.style.left = boxLeft1 + 'px';
              box2.style.left = boxLeft2 + 'px';
    }
}
function requestTimeout(fn, delay) {
			
	var start = new Date().getTime(),
		handle = new Object();
		
	function loop(){
		var current = new Date().getTime(),
			delta = current - start;
			
		delta >= delay ? fn.call() : handle.value = requestAnimationFrame(loop);
	};
	
	handle.value = requestAnimationFrame(loop);
	return handle;
};
function delay(ms) {
    return new Promise(resolve => requestTimeout(resolve, ms));
}
async function bubbleSort(array){
    disableButtons();
    var length = array.length;
    var swapped = false;
    for (var i = 0; i < length - 1; i++) { 
        swapped = false;
        for (var j = 0; j < (length - i - 1); j++) {
            var bar1 = document.getElementById("b" + (j+1));
            var bar2 = document.getElementById("b" + (j+2));
            bar1.style.backgroundColor = "#084a8b";
            bar2.style.backgroundColor = "#084a8b";
            await delay(100/speed);
            if(array[j] > array[j+1]) {
                bar1.style.backgroundColor = "#379683";
                bar2.style.backgroundColor = "#379683";
                await delay(200/speed);
                var tmp = array[j];  
                array[j] = array[j+1]; 
                array[j+1] = tmp;
                swap("p" + (j+1), "p" + (j+2), 10/speed, 15*speed);
                swapped = true;
                await delay(window.innerWidth/(10*speed));
            }
            bar1.style.backgroundColor = "#05386B";
            bar2.style.backgroundColor = "#05386B";
        } 
        document.getElementById("b" + (length - i)).style.backgroundColor = "#05386B";
        if(!swapped){
            break;
        }
    }
    enableButtons();
}
async function insertionSort(array){
    disableButtons();
    for(var i = 1; i < array.length; i++){
        var barPrev = document.getElementById("b" + (i));
        var barCurr = document.getElementById("b" + (i+1));
        barPrev.style.backgroundColor = "#084a8b";
        barCurr.style.backgroundColor = "#084a8b";
        await delay(300/speed);
        
        var curr = array[i];
        var prev = i - 1;
        
        while(prev >= 0 && array[prev] > curr){
            array[prev+1] = array[prev];
            swap("p" + (prev+1), "p" + (prev+2), 10/speed, 10*speed);
            document.getElementById("b" + (prev+1)).style.backgroundColor = "#379683";
            document.getElementById("b" + (prev+2)).style.backgroundColor = "#379683";
            await delay(window.innerWidth/6.5/speed);
            document.getElementById("b" + (prev+1)).style.backgroundColor = "#26675a";
            document.getElementById("b" + (prev+2)).style.backgroundColor = "#26675a";
            prev = prev-1;
        }
        for(var k = 1; k < array.length; k++){
            document.getElementById("b" + (k)).style.backgroundColor = "#05386B";
        }
        array[prev+1] = curr;
        
        barPrev.style.backgroundColor = "#05386B";
        barCurr.style.backgroundColor = "#05386B";
    }
    enableButtons();
}
async function selectionSort(array){
        disableButtons();
        for (var i = 0; i < array.length-1; i++) 
        { 
            var min = i; 
            var minBar = document.getElementById("b" + (i+2));
            minBar.style.backgroundColor = "#EDF5E1";
            var iBar = document.getElementById("b" + (i+1));
            iBar.style.backgroundColor = "#EDF5E1";
            
            for (var j = i+1; j < array.length; j++){
                    var activeBar = document.getElementById("b" + (j+1));
                    activeBar.style.backgroundColor = "#084a8b";
                    await delay(100/speed);
                    activeBar.style.backgroundColor = "#05386B";
                
                
                if (array[j] < array[min]) {
                    minBar.style.backgroundColor = "#05386B";
                    min = j; 
                    minBar = document.getElementById("b" + (min+1));
                    minBar.style.backgroundColor = "#EDF5E1";
                    await delay(200/speed);
                }
            }
            var bar = document.getElementById("b" + (min+1));
            iBar.style.backgroundColor = "#379683";
            bar.style.backgroundColor = "#379683";
            var temp = array[min]; 
            array[min] = array[i]; 
            array[i] = temp; 
            swap("p" + (min+1), "p" + (i+1), 5/speed,30*speed);
            await delay(window.innerWidth/2.4/speed);
            iBar.style.backgroundColor = "#05386B";
            bar.style.backgroundColor = "#05386B";
        } 
        document.getElementById("b" + (array.length)).style.backgroundColor = "#05386B";
        enableButtons();
}

async function mergeSort(array, n)  
{
    disableButtons();
      var curr_size;
      var left_start;
      for (curr_size = 1; curr_size <= n-1; curr_size = 2*curr_size) 
      { 
          for (left_start = 0; left_start < n-1;left_start += 2*curr_size) 
          { 
              
              var mid = Math.min(left_start + curr_size - 1, n-1); 
              var right_end = Math.min(left_start + 2*curr_size - 1, n-1); 
              var borderLeft = document.getElementById("l" + (left_start));
              borderLeft.style.backgroundColor="#EDF5E1";
              var borderRight = document.getElementById("l" + (right_end+1)); 
              borderRight.style.backgroundColor="#EDF5E1";
              for(var x = left_start; x <= right_end; x++){
                var barTemp = document.getElementById("b" + (x+1)); 
                barTemp.style.backgroundColor = "#0a529a";
              }
              
              var n1 = mid - left_start + 1; 
              var n2 = right_end - mid; 
              var L = [];
              var L_Index = [];
              var R = [];
              var R_Index = [];
              
                for (var i = 0; i < n1; i++) {
                    L[i] = array[left_start + i];
                    L_Index[i] = left_start + i;
                }
                for (var j = 0; j < n2; j++) {
                    R[j] = array[mid + 1 + j]; 
                    R_Index[j] = mid + 1 + j;
                }
                i = 0, j = 0; 
                var k = left_start; 
                while (i < n1 && j < n2) { 
                    if (L[i] <= R[j]) { 
                        array[k] = L[i]; 
                        var barTemp = document.getElementById("b" + (L_Index[i]+1));
                        for(var iterator = L_Index[i]; iterator > k; iterator--){
                            var barTemp = document.getElementById("b" + (iterator+1));
                            var barPrev = document.getElementById("b" + (iterator));
                            barTemp.style.backgroundColor = "#379683";
                            barPrev.style.backgroundColor = "#379683";
                            swap("b" + (iterator+1), "b" + (iterator), 10/speed,15*speed);
                            await delay(300/speed);
                            barTemp.style.backgroundColor = "#0a529a";
                            barPrev.style.backgroundColor = "#0a529a";
                        }
                        i++; 
                    } 
                    else { 
                        array[k] = R[j]; 
                        var barTemp = document.getElementById("b" + (R_Index[j]+1));
                        for(var iterator = R_Index[j]; iterator > k; iterator--){
                            var barTemp = document.getElementById("b" + (iterator+1));
                            var barPrev = document.getElementById("b" + (iterator));
                            barTemp.style.backgroundColor = "#379683";
                            barPrev.style.backgroundColor = "#379683";
                            swap("b" + (iterator+1), "b" + (iterator), 10/speed,15*speed);
                            await delay(300/speed);
                            barTemp.style.backgroundColor = "#0a529a";
                            barPrev.style.backgroundColor = "#0a529a";
                        }
                        j++;
                    } 
                    k++; 
                }
                while (i < n1) { 
                    array[k] = L[i]; 
                    var barTemp = document.getElementById("b" + (L_Index[i]+1));
                    for(var iterator = L_Index[i]; iterator > k; iterator--){
                        var barTemp = document.getElementById("b" + (iterator+1));
                        var barPrev = document.getElementById("b" + (iterator));
                            barTemp.style.backgroundColor = "#379683";
                            barPrev.style.backgroundColor = "#379683";
                        swap("b" + (iterator+1), "b" + (iterator), 10/speed,15*speed);    
                        await delay(300/speed);
                            barTemp.style.backgroundColor = "#0a529a";
                            barPrev.style.backgroundColor = "#0a529a";
                    }
                    i++; 
                    k++; 
                } 

                while (j < n2) { 
                    array[k] = R[j]; 
                    var barTemp = document.getElementById("b" + (R_Index[j]+1));
                    for(var iterator = R_Index[j]; iterator > k; iterator--){
                        var barTemp = document.getElementById("b" + (iterator+1));
                        var barPrev = document.getElementById("b" + (iterator));
                            barTemp.style.backgroundColor = "#379683";
                            barPrev.style.backgroundColor = "#379683";
                        swap("b" + (iterator+1), "b" + (iterator), 10/speed,15*speed);
                        await delay(300/speed);
                            barTemp.style.backgroundColor = "#0a529a";
                            barPrev.style.backgroundColor = "#0a529a";
                       }
                    j++; 
                    k++; 
                }
              await delay(300/speed);
              borderLeft = document.getElementById("l" + (left_start));
              borderLeft.style.backgroundColor="rgba(237, 245, 225, 0)";
              borderRight = document.getElementById("l" + (right_end+1)); 
              borderRight.style.backgroundColor="rgba(237, 245, 225, 0)";
              for(var x = left_start; x <= right_end; x++){
                var barTemp = document.getElementById("b" + (x+1)); 
                barTemp.style.backgroundColor = "#05386B";
              }
          } 
      }
    enableButtons();
}
async function quickSort(array,l,h){
    disableButtons();
    var stack = [];
    var top = -1;
    stack[++top] = l; 
    stack[++top] = h; 
        while (top >= 0) { 
            h = stack[top--]; 
            l = stack[top--]; 
  
            // Set pivot element at its correct position 
            // in sorted array 
            var pivot = array[h];
            var pivotBar = document.getElementById("b" + (h+1));
            pivotBar.style.backgroundColor = "#EDF5E1";
            await delay(150/speed);
            var i = (l-1);
            for (var j = l; j < h; j++) 
            {   
                var bar1 = document.getElementById("b" + (j+1));
                var bar2 = document.getElementById("b" + (j+1));
                bar2.style.backgroundColor="#084a8b";
                await delay(100/speed);
                if (array[j] < pivot) 
                { 
                    i++; 
                    if(i>=0){
                        bar1 = document.getElementById("b" + (i+1));
                        bar1.style.backgroundColor="#084a8b";
                    }
                    await delay(100/speed);
                    var temp1 = array[i]; 
                    array[i] = array[j]; 
                    array[j] = temp1; 
                    if(i+1 != j+1){
                        var tempBar1 = document.getElementById("b" + (i+1));
                        var tempBar2 = document.getElementById("b" + (j+1));
                        swap("b" + (i+1),"b" + (j+1),5/speed,30*speed);
                        tempBar1.style.backgroundColor="#379683";
                        tempBar2.style.backgroundColor="#379683";
                        await delay(window.innerWidth/3/speed); 
                        tempBar1.style.backgroundColor="#084a8b";
                        tempBar2.style.backgroundColor="#084a8b";
                    }
                } 
                bar1.style.backgroundColor="#05386B";
                bar2.style.backgroundColor="#05386B";
            } 
            var temp2 = array[i+1]; 
            array[i+1] = array[h]; 
            array[h] = temp2; 
            if(i+2!=h+1){
                var bar1 = document.getElementById("b" + (i+2));
                var bar2 = document.getElementById("b" + (h+1));
                bar1.style.backgroundColor="#379683";
                bar2.style.backgroundColor="#379683";
                swap("b" + (i+2),"b" + (h+1),5/speed,30*speed);
                await delay(200/speed);
                bar1.style.backgroundColor="#05386B";
                bar2.style.backgroundColor="#05386B";
            }

            var p = i+1;
  
            if (p - 1 > l) { 
                stack[++top] = l; 
                stack[++top] = p - 1; 
            } 
  
            // If there are elements on right side of pivot, 
            // then push right side to stack 
            if (p + 1 < h) { 
                stack[++top] = p + 1; 
                stack[++top] = h; 
            } 
            await delay(100/speed);
            pivotBar.style.backgroundColor = "#05386B";
        } 
    enableButtons();
}
async function heapSort(array, n){
    disableButtons();
        for (var i = 1; i < n; i++) 
        { 
          if (array[i] > array[Math.floor((i - 1) / 2)]) 
          { 
            var j = i; 

            while (array[j] > array[Math.floor((j - 1) / 2)]) 
            {
              var temp = array[j]; 
              array[j]=array[Math.floor((j - 1) / 2)]; 
              array[Math.floor((j - 1) / 2)] = temp;
              var varBar1 = document.getElementById("b" + (j+1));
              var varBar2 = document.getElementById("b" + (Math.floor((j - 1) / 2)+1));
              varBar1.style.backgroundColor = "#379683";
              varBar2.style.backgroundColor = "#379683";
              swap("b" + (j+1), "b" + (Math.floor((j - 1) / 2)+1), 5/speed, 40*speed);
              j = Math.floor((j - 1) / 2); 
              await delay(window.innerWidth/3.5/speed);
              varBar1.style.backgroundColor = "#EDF5E1";
              varBar2.style.backgroundColor = "#EDF5E1";
            } 
          } 
        }
        for(var x = 0; x <20; x++){
          var barTemp = document.getElementById("b" + (x+1)); 
          barTemp.style.backgroundColor = "#d7e2c9";
          await delay(25/speed);
        }
        await delay(300/speed);
        for(var x = 0; x <20; x++){
          var barTemp = document.getElementById("b" + (x+1)); 
          barTemp.style.backgroundColor = "#05386B";
        }
        for (i = n - 1; i > 0; i--) 
        { 
          var temp = array[0]; 
          array[0]=array[i]; 
          array[i] = temp;
          var varBar1 = document.getElementById("b" + (1));
          var varBar2 = document.getElementById("b" + (i+1));
          varBar1.style.backgroundColor = "#379683";
          varBar2.style.backgroundColor = "#379683";
          swap("b" + (1), "b" + (i+1), 5/speed, 30*speed);
          await delay(window.innerWidth/2/speed);
          varBar1.style.backgroundColor = "#05386B";
          varBar2.style.backgroundColor = "#05386B";
            
          var j = 0, index; 

          do
          { 
            index = (2 * j + 1); 

            if (index < (i - 1) && array[index] < array[index + 1]) {
              index++; 
            }
            if (index < i && array[j] < array[index]){
              var temp = array[j]; 
              array[j]=array[index]; 
              array[index] = temp; 
              var tempBar1 = document.getElementById("b" + (j+1));
              var tempBar2 = document.getElementById("b" + (index+1));
              tempBar1.style.backgroundColor = "#379683";
              tempBar2.style.backgroundColor = "#379683";
              swap("b" + (j+1), "b" + (index+1), 10/speed, 40*speed);
              await delay(window.innerWidth/3.5/speed);
              tempBar1.style.backgroundColor = "#EDF5E1";
              tempBar2.style.backgroundColor = "#EDF5E1";
            }
            j = index; 

          } while (index < i); 
            for(var x = 0; x < i; x++){
              var barTemp = document.getElementById("b" + (x+1)); 
              barTemp.style.backgroundColor = "#d7e2c9";
              await delay(25/speed);
            }
            await delay(300/speed);
            for(var x = 0; x <20; x++){
              var barTemp = document.getElementById("b" + (x+1)); 
              barTemp.style.backgroundColor = "#05386B";
            }
        } 
    enableButtons();
}