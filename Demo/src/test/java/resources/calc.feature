#Author: SWARUP TALUKDAR


Feature: CALCULATOR

Scenario Outline: Add
    Given entered two numbers <num1> and <num2>
    When added two numbers <num1> and <num2>
    Then show the add result <num1> + <num2>

    Examples: 
      | num1  | num2 |
      | 2     | 2    |
      | 5     | 6    |
      | 7     | 2    |

Scenario Outline: Subtract
    Given entered two numbers <num1> and <num2>
    When subtracted two numbers <num1> and <num2>
    Then show the sub result <num1> - <num2>

    Examples: 
      | num1  | num2 |
      | 2     | 2    |
      | 6     | 5    |
      | 7     | 2    |
    
Scenario Outline: Multiply
 		Given entered two numbers <num1> and <num2>
    When multiplied two numbers <num1> and <num2>
    Then show the prod result <num1> * <num2>

    Examples: 
      | num1  | num2 |
      | 2     | 2    |
      | 5     | 6    |
      | 7     | 2    |
    
 Scenario Outline: Divide
 		Given entered two numbers <num1> and <num2>
    When divided two numbers <num1> and <num2>
    Then show the div result <num1> / <num2>

    Examples: 
      | num1  | num2 |
      | 2     | 2    |
      | 5     | 6    |
      | 7     | 2    |
      
    Scenario Outline: Add call
    Given entered two numbers <num1> and <num2> to add 
    When add two numbers <add> 
    Then show the result <res>
    Examples: 
      | num1  | num2 |
      | 2     | 2    |
      | 5     | 6    |
      | 7     | 2    |
