const TASK_DATA = [
    {
        task_id: 1,
        task_timestamp: "1580240201",
        task_title: "Compare the various formats of representing numbers in computers. Discuss briefly with the help of examples. Mention which is the most popular number representation and why do you think so?"
    },

    {
        task_id: 2,
        task_timestamp: "1576240201",
        task_title: "Write a program that computes and prints the 1000th prime number. "
    },
    {
        task_id: 3,
        task_timestamp: "1576240201",
        task_title: "Write a program that computes the sum of the logarithms of all the primes from 2 to some number n, and print out the sum of the logs of the primes, the number n, and the ratio of these two quantities. Test this for different values of n."
    },

    {
        task_id: 4,
        task_timestamp: "1576240201",
        task_title: "Show that it is possible to buy exactly 50, 51, 52, 53, 54, and 55 McNuggets, by finding solutions to the Diophantine equation. You can solve this in your head, using paper and pencil, or writing a program. However you chose to solve this problem, list the combinations of 6, 9 and 20 packs of McNuggets you need to buy in order to get each of the exact amounts. Given that it is possible to buy sets of 50, 51, 52, 53, 54 or 55 McNuggets by combinations of 6, 9 and 20 packs, show that it is possible to buy 56, 57,…, 65 McNuggets. In other words, show how, given solutions for 50-55, one can derive solutions for 56-65.  "
    },

    {
        task_id: 5,
        task_timestamp: "1576240201",
        task_title: "Theorem: If it is possible to buy x, x+1,…, x+5 sets of McNuggets, for some x, then it is possible to buy any number of McNuggets >= x, given that McNuggets come in 6, 9 and 20 packs. Problem 2. Explain, in English, why this theorem is true. Save your answers for problems 1 and 2 as ps2.txt. "
    },

    {
        task_id: 6,
        task_timestamp: "1576240201",
        task_title: "Write an iterative program that finds the largest number of McNuggets that cannot be bought in exact quantity. Your program should print the answer in the following format (where the correct number is provided in place of <n>): “Largest number of McNuggets that cannot be bought in exact quantity: <n>” Hint: your program should follow the outline above. Hint: think about what information you need to keep track of as you loop through possible ways of buying exactly n McNuggets. This will guide you in deciding what state variables you will need to utilize. Save your code for Problem 3 in ps2a.py. "
    },

    {
        task_id: 7,
        task_timestamp: "1576240201",
        task_title: " Assume that the variable packages is bound to a tuple of length 3, the values of which specify the sizes of the packages, ordered from smallest to largest. Write a program that uses exhaustive search to find the largest number (less than 200) of McNuggets that cannot be bought in exact quantity. We limit the number to be less than 200 (although this is an arbitrary choice) because in some cases there is no largest value that cannot be bought in exact quantity, and we don’t want to search forever. Please use ps2b_template.py to structure your code. Have your code print out its result in the following format: “Given package sizes <x>, <y>, and <z>, the largest number of McNuggets that cannot be bought in exact quantity is: <n>” Test your program on a variety of choices, by changing the value for packages. Include the case (6,9,20), as well as some other test cases of your own choosing. Save your code for Problem 4 in ps2b.py."
    },
]


export default TASK_DATA;