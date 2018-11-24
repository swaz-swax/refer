#Author: swarup
@tagBalance
Feature: Check Balance

Background: User Details
Given Enter user details

Scenario: Balance is greater than 500
When Balance is greater
Then print user details

Scenario: Balance is less than 500
When Balance is low
Then print error message