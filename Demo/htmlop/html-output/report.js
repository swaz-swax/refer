$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/userlogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SWARUP TALUKDAR"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "To check login details",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag3"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Title of your scenario",
  "description": "",
  "id": "login;title-of-your-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters accountNumber \u003cacno\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "password \u003cpass\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "open bank page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login;title-of-your-scenario;",
  "rows": [
    {
      "cells": [
        "acno",
        "pass"
      ],
      "line": 13,
      "id": "login;title-of-your-scenario;;1"
    },
    {
      "cells": [
        "56231",
        "5236"
      ],
      "line": 14,
      "id": "login;title-of-your-scenario;;2"
    },
    {
      "cells": [
        "236521",
        "12369"
      ],
      "line": 15,
      "id": "login;title-of-your-scenario;;3"
    },
    {
      "cells": [
        "15982",
        "523"
      ],
      "line": 16,
      "id": "login;title-of-your-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Title of your scenario",
  "description": "",
  "id": "login;title-of-your-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters accountNumber 56231",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "password 5236",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "open bank page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.user_is_in_Login_page()"
});
formatter.result({
  "duration": 3348658842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56231",
      "offset": 26
    }
  ],
  "location": "StepDefLogin.user_enters_accountNumber(String)"
});
formatter.result({
  "duration": 90564473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5236",
      "offset": 9
    }
  ],
  "location": "StepDefLogin.password(String)"
});
formatter.result({
  "duration": 66593129,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.clicks_on_login_button()"
});
formatter.result({
  "duration": 64287308,
  "status": "passed"
});
formatter.match({
  "location": "StepDefLogin.open_bank_page()"
});
formatter.result({
  "duration": 53926089,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Title of your scenario",
  "description": "",
  "id": "login;title-of-your-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters accountNumber 236521",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "password 12369",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "open bank page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.user_is_in_Login_page()"
});
formatter.result({
  "duration": 2889819849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "236521",
      "offset": 26
    }
  ],
  "location": "StepDefLogin.user_enters_accountNumber(String)"
});
formatter.result({
  "duration": 72448542,
  "error_message": "java.lang.AssertionError: valid 236521 expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat com.cg.trg.demo.StepDefLogin.user_enters_accountNumber(StepDefLogin.java:40)\r\n\tat ✽.When user enters accountNumber 236521(resources/userlogin.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12369",
      "offset": 9
    }
  ],
  "location": "StepDefLogin.password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLogin.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLogin.open_bank_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Title of your scenario",
  "description": "",
  "id": "login;title-of-your-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters accountNumber 15982",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "password 523",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "open bank page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefLogin.user_is_in_Login_page()"
});
formatter.result({
  "duration": 2759165441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15982",
      "offset": 26
    }
  ],
  "location": "StepDefLogin.user_enters_accountNumber(String)"
});
formatter.result({
  "duration": 71292966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "523",
      "offset": 9
    }
  ],
  "location": "StepDefLogin.password(String)"
});
formatter.result({
  "duration": 71018942,
  "error_message": "java.lang.AssertionError: valid 523 expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat com.cg.trg.demo.StepDefLogin.password(StepDefLogin.java:51)\r\n\tat ✽.And password 523(resources/userlogin.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefLogin.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefLogin.open_bank_page()"
});
formatter.result({
  "status": "skipped"
});
});