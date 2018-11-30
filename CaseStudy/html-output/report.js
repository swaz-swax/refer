$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/basicform.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Swarup"
    }
  ],
  "line": 3,
  "name": "Check basic form input",
  "description": "",
  "id": "check-basic-form-input",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 47,
      "value": "#Scenario- invalid datas"
    }
  ],
  "line": 49,
  "name": "Invalid name format",
  "description": "",
  "id": "check-basic-form-input;invalid-name-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@validation-unsuccessful"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "validate user name",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "enter value as all small chars in user name text box",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "print error message to enter valid value for name field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBasicFormInvalid.validate_user_name()"
});
formatter.result({
  "duration": 5157879235,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.enter_value_as_all_small_chars_in_user_name_text_box()"
});
formatter.result({
  "duration": 160096895,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.print_error_message_to_enter_valid_value_for_name_field()"
});
formatter.result({
  "duration": 20499609,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Please enter name (in InitCaps format e.g. Swarup) }\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027CHNSIPDT0T536\u0027, ip: \u002710.219.35.5\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\swtalukd\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 58295d5c7ed791be9298f177c6f53b4c\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/form/input[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.cg.trg.casestudy.StepDefBasicFormInvalid.print_error_message_to_enter_valid_value_for_name_field(StepDefBasicFormInvalid.java:39)\r\n\tat ✽.Then print error message to enter valid value for name field(features/basicform.feature:52)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 54,
  "name": "Invalid city format",
  "description": "",
  "id": "check-basic-form-input;invalid-city-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@validation-unsuccessful"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "validate user city",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "enter value as all small chars in city text box",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "print error message to enter valid value for city field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBasicFormInvalid.validate_user_city()"
});
formatter.result({
  "duration": 2844575533,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.enter_value_as_all_small_chars_in_city_text_box()"
});
formatter.result({
  "duration": 197690861,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.print_error_message_to_enter_valid_value_for_city_field()"
});
formatter.result({
  "duration": 4649313186,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Invalid password format",
  "description": "",
  "id": "check-basic-form-input;invalid-password-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@validation-unsuccessful"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "validate user password",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "enter value as all small chars in password text box",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "print error message to enter valid value for password field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBasicFormInvalid.validate_user_password()"
});
formatter.result({
  "duration": 2800929973,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.enter_value_as_all_small_chars_in_password_text_box()"
});
formatter.result({
  "duration": 312107085,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.print_error_message_to_enter_valid_value_for_password_field()"
});
formatter.result({
  "duration": 4670638162,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Invalid gender",
  "description": "",
  "id": "check-basic-form-input;invalid-gender",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@validation-unsuccessful"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "validate user gender",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "user forgot to select gender button",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "print error message for invalid gender",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBasicFormInvalid.validate_user_gender()"
});
formatter.result({
  "duration": 2896464913,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.user_forgot_to_select_gender_button()"
});
formatter.result({
  "duration": 546378664,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.print_error_message_for_invalid_gender()"
});
formatter.result({
  "duration": 4783171877,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Invalid language",
  "description": "",
  "id": "check-basic-form-input;invalid-language",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@validation-unsuccessful"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "validate user language",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "user forgot to click on language check box",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "print error message for invalid language field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBasicFormInvalid.validate_user_language()"
});
formatter.result({
  "duration": 2864079124,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.user_forgot_to_click_on_language_check_box()"
});
formatter.result({
  "duration": 632112992,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.print_error_message_for_invalid_language_field()"
});
formatter.result({
  "duration": 4663404308,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Invalid My Number field",
  "description": "",
  "id": "check-basic-form-input;invalid-my-number-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@validation-unsuccessful"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "validate user MyNumber",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "user entered invalid value in MyNumber field",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "print error message for invalid MyNumber field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBasicFormInvalid.validate_user_MyNumber()"
});
formatter.result({
  "duration": 2850331357,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.user_entered_invalid_value_in_MyNumber_field()"
});
formatter.result({
  "duration": 455710186,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.print_error_message_for_invalid_MyNumber_field()"
});
formatter.result({
  "duration": 2804688,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no alert open\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027CHNSIPDT0T536\u0027, ip: \u002710.219.35.5\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\swtalukd\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 332445337023c4524d3c0dd7a432641d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:928)\r\n\tat com.cg.trg.casestudy.StepDefBasicFormInvalid.print_error_message_for_invalid_MyNumber_field(StepDefBasicFormInvalid.java:200)\r\n\tat ✽.Then print error message for invalid MyNumber field(features/basicform.feature:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 79,
  "name": "Invalid email format",
  "description": "",
  "id": "check-basic-form-input;invalid-email-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 78,
      "name": "@validation-unsuccessful"
    }
  ]
});
formatter.step({
  "line": 80,
  "name": "validate email",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "user entered invalid value in email field",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "print error message for invalid email format",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBasicFormInvalid.validate_email()"
});
formatter.result({
  "duration": 4342105382,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.user_entered_invalid_value_in_email_field()"
});
formatter.result({
  "duration": 518010588,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.print_error_message_for_invalid_email_format()"
});
formatter.result({
  "duration": 2403900,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no alert open\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027CHNSIPDT0T536\u0027, ip: \u002710.219.35.5\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\swtalukd\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: a269bf7db4940877e046440488cd43f0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:928)\r\n\tat com.cg.trg.casestudy.StepDefBasicFormInvalid.print_error_message_for_invalid_email_format(StepDefBasicFormInvalid.java:233)\r\n\tat ✽.Then print error message for invalid email format(features/basicform.feature:82)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 84,
  "name": "Invalid Mobile Number",
  "description": "",
  "id": "check-basic-form-input;invalid-mobile-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@validation-unsuccessful"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "validate Mobile Number",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "user entered invalid value in mobile field",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "print error message for invalid mobile field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefBasicFormInvalid.validate_Mobile_Number()"
});
formatter.result({
  "duration": 4779138575,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.user_entered_invalid_value_in_mobile_field()"
});
formatter.result({
  "duration": 672760650,
  "status": "passed"
});
formatter.match({
  "location": "StepDefBasicFormInvalid.print_error_message_for_invalid_mobile_field()"
});
formatter.result({
  "duration": 4785238,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no alert open\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027CHNSIPDT0T536\u0027, ip: \u002710.219.35.5\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\swtalukd\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 5ab4dc988d6e9ed4eb4fc066a6b12c63\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:928)\r\n\tat com.cg.trg.casestudy.StepDefBasicFormInvalid.print_error_message_for_invalid_mobile_field(StepDefBasicFormInvalid.java:266)\r\n\tat ✽.Then print error message for invalid mobile field(features/basicform.feature:87)\r\n",
  "status": "failed"
});
});