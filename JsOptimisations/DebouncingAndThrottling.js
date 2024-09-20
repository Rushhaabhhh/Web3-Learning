const myDebounce = (func, delay) => {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    }
};


const myThrottle = (func, delay) => {
    let last = 0;

    return function (...args) {
        let now = new Date().getTime();

        if (now - last < delay) return;

        last = now;
        return func.apply(this, args);
    }
}

```
Debouncing and Throttling are techniques used to control the rate at which a function is executed. They help improve performance and manage resource usage, especially when dealing with events that can trigger multiple function calls in a short period.

Debouncing : Debouncing ensures that a function is executed only after a certain period of inactivity. It delays the execution of the function until after a specified delay period has elapsed since the last call.
It's often used to limit the number of times a function is executed in response to user input or events, such as typing in a search box or resizing a window.

Throttling : Throttling is a technique that limits the rate at which a function is executed. It ensures that a function is called at most once within a specified interval of time.
It's often used to limit the number of times a function is executed in response to user input or events, such as scrolling a page or changing the value of a slider.


Debouncing Implementation:

Parameters:
func: The function to be debounced.
delay: The delay period (in milliseconds) before func is executed.

Behavior:
clearTimeout(timer): Clears the previous timer to reset the debounce period.
setTimeout(() => func.apply(this, args), delay): Sets a new timer to execute func after the specified delay.


Throttling Implementation:

Parameters:
func: The function to be throttled.
delay: The interval (in milliseconds) between allowed executions of func.

Behavior:
let now = new Date().getTime(): Gets the current time.
if (now - last < delay) return: Checks if the time since the last execution is less than the delay period; if so, it returns without calling func.
last = now: Updates the last timestamp to the current time.
return func.apply(this, args): Calls func with the provided arguments.

```

