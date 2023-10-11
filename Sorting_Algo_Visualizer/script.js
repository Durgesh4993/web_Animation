const arrayContainer = document.getElementById('array-container');
const generateArrayButton = document.getElementById('generate-array');
const bubbleSortButton = document.getElementById('bubble-sort');
const insertionSortButton = document.getElementById('insertion-sort');
const selectionSortButton = document.getElementById('selection-sort');
const quickSortButton = document.getElementById('quick-sort');
const mergeSortButton = document.getElementById('selection-sort');
const delay = 50; // Delay in milliseconds for visualization

generateArrayButton.addEventListener('click', generateRandomArray);
bubbleSortButton.addEventListener('click', bubbleSort);
insertionSortButton.addEventListener('click', insertionSort);
selectionSortButton.addEventListener('click', selectionSort);
quickSortButton.addEventListener('click', quickSort);
mergeSortButton.addEventListener('click', mergeSort);

function generateRandomArray() {
    const arraySize = 40; // Number of elements in the array
    const minVal = 10;   // Minimum value for array elements
    const maxVal = 200;  // Maximum value for array elements

    clearArrayContainer();
    
    const array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * (maxVal - minVal) + minVal));
    }

    renderArray(array);
}

function renderArray(array) {
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value}px`;
        bar.style.width = '20px';
        arrayContainer.appendChild(bar);
    });
}

function clearArrayContainer() {
    while (arrayContainer.firstChild) {
        arrayContainer.removeChild(arrayContainer.firstChild);
    }
}

async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < bars.length - 1; i++) {
            const bar1 = bars[i];
            const bar2 = bars[i + 1];
            if (parseInt(bar1.style.height) > parseInt(bar2.style.height)) {
                await swapBars(bar1, bar2);
                swapped = true;
            }
        }
    } while (swapped);
}


// Function to perform Insertion Sort
async function insertionSort() {
    const bars = document.querySelectorAll('.bar');
    for (let i = 1; i < bars.length; i++) {
        const key = parseInt(bars[i].style.height);
        let j = i - 1;
        while (j >= 0 && parseInt(bars[j].style.height) > key) {
            await swapBars(bars[j], bars[j + 1]);
            j--;
        }
        bars[j + 1].style.height = `${key}px`;
        await sleep(delay);
    }
}

// Function to perform Selection Sort
async function selectionSort() {
    const bars = document.querySelectorAll('.bar');
    const n = bars.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                minIndex = j;
            }
        }
        await swapBars(bars[i], bars[minIndex]);
    }
}

// Function to perform Quick Sort
async function quickSort() {
    const bars = document.querySelectorAll('.bar');
    const array = Array.from(bars).map(bar => parseInt(bar.style.height));
    await quickSortHelper(array, 0, array.length - 1, bars);
}

async function quickSortHelper(array, low, high, bars) {
    if (low < high) {
        const pivotIndex = await partition(array, low, high, bars);
        await quickSortHelper(array, low, pivotIndex - 1, bars);
        await quickSortHelper(array, pivotIndex + 1, high, bars);
    }
}

async function partition(array, low, high, bars) {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            await swapBars(bars[i], bars[j]);
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    await swapBars(bars[i + 1], bars[high]);
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

// Function to perform Merge Sort
async function mergeSort() {
    const bars = document.querySelectorAll('.bar');
    const array = Array.from(bars).map(bar => parseInt(bar.style.height));
    await mergeSortHelper(array, 0, array.length - 1, bars);
}

async function mergeSortHelper(array, left, right, bars) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSortHelper(array, left, mid, bars);
        await mergeSortHelper(array, mid + 1, right, bars);
        await merge(array, left, mid, right, bars);
    }
}

async function merge(array, left, mid, right, bars) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const leftArray = array.slice(left, left + n1);
    const rightArray = array.slice(mid + 1, mid + 1 + n2);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            await updateBarHeight(bars[k], leftArray[i]);
            i++;
        } else {
            array[k] = rightArray[j];
            await updateBarHeight(bars[k], rightArray[j]);
            j++;
        }
        k++;
    }

    while (i < n1) {
        array[k] = leftArray[i];
        await updateBarHeight(bars[k], leftArray[i]);
        i++;
        k++;
    }

    while (j < n2) {
        array[k] = rightArray[j];
        await updateBarHeight(bars[k], rightArray[j]);
        j++;
        k++;
    }
}

async function updateBarHeight(bar, height) {
    return new Promise(resolve => {
        bar.style.height = `${height}px`;
        setTimeout(resolve, delay);
    });
}

function swapBars(bar1, bar2) {
    return new Promise((resolve) => {
        const temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
        setTimeout(resolve, delay);
    });
}
