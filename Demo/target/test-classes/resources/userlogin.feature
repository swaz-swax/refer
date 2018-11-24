#Author: SWARUP TALUKDAR
@tag3
Feature: Login
 To check login details
  Scenario Outline: Title of your scenario
    Given User is in Login page
    When user enters accountNumber <acno> 
    And password <pass>
    And clicks on login button
    Then open bank page
   
   Examples: 
      | acno 		| pass 	|
      | 56231 	| 5236 	|
      | 236521 	| 12369 |
      | 15982 	| 523 	|
    
    
   