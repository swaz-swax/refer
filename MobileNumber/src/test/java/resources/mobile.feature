#Author: Swarup Talukdar

Feature: Mobile

  @tag1
  Scenario: Mobile check
    Given All mobiles
    |'Nokia'|
    |'Samsung'|
    |'iPhone'|
    |'BlackBerry'|
   	Then show all mobiles
   	
  @tag2
  Scenario: Mobile number check
    Given All mobile numbers
    |9863214570|
    |8632145709|
    |6321457054|
    |7321457024|
    |1321457024|
   	Then show all valid mobile numbers