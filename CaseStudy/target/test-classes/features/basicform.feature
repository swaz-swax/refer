#Author: Swarup
@tag
Feature: Check basic form input

  #Scenario null
  @null-checking
  Scenario: Name is null
    Given check user name
    When enter empty value in user name text box
    Then print error message for name field
  @null-checking
  Scenario: Test city
    Given check user city
    When enter empty value in city text box
    Then print error message for city field
  @null-checking
  Scenario: Test password
    Given check user password
    When enter empty value in password text box
    Then print error message for password field
  @null-checking
  Scenario: Test gender
    Given check user gender
    When user forgot to select gender
    Then print error message for gender field
  @null-checking
  Scenario: Test language
    Given check user language
    When user forgot to check language check box
    Then print error message for language field
  @null-checking
  Scenario: Test My Number
    Given check user MyNumber
    When enter empty value in My number text box
    Then print error message for My number field
  @null-checking
  Scenario: Test email
    Given check user email
    When enter empty value in email text box
    Then print error message for email field
  @null-checking
  Scenario: Test Mobile Number
    Given check user Mobile Number
    When enter empty value in Mobile number text box
    Then print error message for Mobile number field
    
  #Scenario- invalid datas
  @validation-unsuccessful
  Scenario: Invalid name format
    Given validate user name
    When enter value as all small chars in user name text box
    Then print error message to enter valid value for name field
  @validation-unsuccessful
  Scenario: Invalid city format
    Given validate user city
    When enter value as all small chars in city text box
    Then print error message to enter valid value for city field
  @validation-unsuccessful
  Scenario: Invalid password format
    Given validate user password
    When enter value as all small chars in password text box
    Then print error message to enter valid value for password field
  @validation-unsuccessful
  Scenario: Invalid gender
    Given validate user gender
    When user forgot to select gender button
    Then print error message for invalid gender
  @validation-unsuccessful
  Scenario: Invalid language
    Given validate user language
    When user forgot to click on language check box
    Then print error message for invalid language field
  @validation-unsuccessful
  Scenario: Invalid My Number field
    Given validate user MyNumber
    When user entered invalid value in MyNumber field
    Then print error message for invalid MyNumber field
  @validation-unsuccessful
  Scenario: Invalid email format
    Given validate email
    When user entered invalid value in email field
    Then print error message for invalid email format
  @validation-unsuccessful
  Scenario: Invalid Mobile Number
    Given validate Mobile Number
    When user entered invalid value in mobile field
    Then print error message for invalid mobile field
    
  #Scenario-valid datas
  @validation-successful
  Scenario: Registration successful
    Given check user details
    When entered all valid datas
    Then print success message
