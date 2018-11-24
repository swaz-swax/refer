$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/balance.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: swarup"
    }
  ],
  "line": 3,
  "name": "Check Balance",
  "description": "",
  "id": "check-balance",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tagBalance"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "User Details",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Enter user details",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefBal.enter_user_details()"
});
formatter.result({
  "duration": 16347363546,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Balance is greater than 500",
  "description": "",
  "id": "check-balance;balance-is-greater-than-500",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Balance is greater",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "print user details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBal.balance_is_greater()"
});
formatter.result({
  "duration": 11940865,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat com.cg.trg.mobile.StepDefBal.balance_is_greater(StepDefBal.java:32)\r\n\tat ✽.When Balance is greater(resources/balance.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefBal.print_user_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 5,
  "name": "User Details",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Enter user details",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefBal.enter_user_details()"
});
formatter.result({
  "duration": 55801993877,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Balance is less than 500",
  "description": "",
  "id": "check-balance;balance-is-less-than-500",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Balance is low",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "print error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBal.balance_is_low()"
});
formatter.result({
  "duration": 55788,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBal.print_error_message()"
});
formatter.result({
  "duration": 128397,
  "status": "passed"
});
});