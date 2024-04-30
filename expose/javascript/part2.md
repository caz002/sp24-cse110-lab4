1. 3, or the length of the prices array, will be printed to the console. Since i is a variable of type var, it can be accessed anywhere in the function it was declared. The variable i is initialized to equal 0, and will increment by 1 each iteration of the for loop on line 6, which runs 3 times, as prices.length = 3. Thus, the final value of i printed to the console at line 12 will be 3.

2. 150 will be printed to the console. Since discountedPrice has type var, it can be accessed anywhere in the function it was declared, including outside of its block's scope. The value of discountedPrice is declared and updated on line 7 as the value of i increases by 1 each iteration of the loop, and will update for the last time when i equals prices.length-1, or the index value of the last element in prices. Thus, the discounted price value of the last element in the inputed array will be printed.

3. 150, or the value of finalPrice will be printed to the console. The value of finalPrice will equal the discountedPrice value of the last element in prices multipled by 100 and then divided by 100, as finalPrice will be last updated when i equals prices.length-1, or the index value of the last element in prices. Since the last value in prices is 300, and the discount applied is 0.5, the final price will be 150.

4. The function will return [50, 100, 150] as it calculates in the for loop on line 6 the discounted price of each of the items in the original prices array [100, 200, 300] at 50% off.

5. The code will cause an error, as since line 12 is outside of the block i was declared in, and i is of type let, i cannot be accessed on line 12.

6. The code causes an error, as since discountedPrice was declared with the "let" keyword, it can only be accessed within the same block it was declared in. Line 13 is outside the for loop discountedPrice was initialized in, making it impossible to access discountedPrice in line 13.

7. 150 will be printed to the console, as finalPrice is set to the rounded discountedPrice of the last element in the array prices, or 300*0.5=150, multipled and then divided by 100. This becomes 150.

8. The function returns [50, 100, 150]. The codes iterates through each of the values in the prices array, or [100, 200, 300], calculating the discounted value and final price, and pushing it to the discounted array. Since a 0.5 discount is applied, the discounted array becomes the prices array with halved values.

9. The code causes an error, because it is trying to access i, which was declared with the keyword "let", outside of the scope of the for loop i was declared in.

10. The code causes an error because discountedPrice is being reassigned to a new value each iteration of the for loop, which is not allowed since discountedPrice was initalized with the "const" keyword.

11. The code causes an error instead of returning, as since discountedPrice is being reassigned a value each iteration of the for loop. This will cause an error since discountedPrice was initalized with the "const" keyword, which makes reassignment not allowed.

12. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]

13.
    A. '32', the 2 is converted into the string '2', and then concatenated with '3' to form '32'
    B. 1, the '3' is converted from a string to a number and the subtraction operation is formed to get 3-2 = 1
    C. 3, since 3 is a number, the null is converted to the number 0, making the expression 3 + 0 = 3
    D. '3null', since '3' is a string, the null is converted to the string 'null' and concatenated to the end of '3'
    E. 4, true is converted to a number to perform true + 3. Since true maps to 1, the expression becomes 1+3=4
    F. 0, both false and null are converted to numbers to perform the addition operation, and since they both map to 0, the expression becomes 0 + 0 = 0
    G. '3undefined', since '3' is a string, the undefined is converted into a string and concatenated at the end of '3'
    H. NaN, to perform the subtraction operation the '3' and undefined both are converted into numbers, but since undefined does not have a corresponding numerical value, the expression evaluates to NaN, or Not a Number.
14.
    A. true, since 1 is a number, the '2' is converted into a number to compare the two values, making the expression evaluate as 2 > 1, which is true
    B. false, since '2' and '12' are both strings, the two strings are compared to see which one falls ealier in lexographic order. since 1 comes before 2, '2' is of greater value than '12', making the statement false.
    C. true, since 2 is a number, the string '2' is converted into a number to perform the comparision, and 2 equals 2 is true
    D. false, the strict equality operator automatically returns false when there are 2 values of different types being compared
    E. false, since the two values being compared are of different types, the true is converted to a 1, and 1 does not equal 2
    F. true, Boolean(2) registers as true since Boolean() returns true for any nonzero numeric value, and true equals true
15.  '==' uses type conversion to evaluate whether values of different types are equal. However '===' is a strict equality operator that automatically returns false if the two values being compared are of different types.
17.  The result will be the array [2, 4, 6]. The function modifyArray creates a new array newArr. It then iterates through the elements in the array passed in by the parameters, or [1, 2, 3], and pushes to newArr the elements modified by the callback function. The callback function doSomething returns the inputed value multipled by 2, so the value of newArr returned is [2, 4, 6].
19.  The output is 1 4 3 2, with each number on a separate line in the console. The code finishes excecuting the lines without a setTimeout function in order, which is why 1 and 4 print first. Since 2 has a 1 second longer delay than 3, 3 prints before 2.