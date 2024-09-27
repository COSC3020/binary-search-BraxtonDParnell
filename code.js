function binarySearch(list, element) {
//returns the index of the element in a sorted list
//returns -1 if the element searched for is not present.

//sets the pivot equal to the middle point of the list, rounded down
var left = 0;
var right = list.length - 1;
var middle = (left + right) /2 | 0;

while (left < right) { 
//iterates through the list until the search parameters are size one


if (element == list[middle]) {
//pivot is the element we are searching for
return middle;
}

else if (element < list[middle]) {
//if the element is less than the pivot, we shrink the search parameters where the right most part 
//of the search parameters is the old pivot and the new pivot is 
//half way between the extremities of the parameter rounded down
right = middle;
middle = (left + right) / 2 | 0;
}

else if (element > list[middle]) {
//if the element is more than the pivot, we shrink the search parameters where the left most part 
//of the search parameters is the old pivot and the new pivot is 
//half way between the extremities of the parameters rounded up
left = middle;
middle = (left + right) / 2 | 1;
}
}
    return -1;
}
