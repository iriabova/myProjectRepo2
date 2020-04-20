$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/New.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#@homepage"
    }
  ],
  "line": 3,
  "name": "Test Environment",
  "description": "",
  "id": "test-environment",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6283555000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Get test Page Title",
  "description": "",
  "id": "test-environment;get-test-page-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@test11122"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Teckshool Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User clicks Test Enviromnent page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should get test environment title",
  "keyword": "Then "
});
formatter.match({
  "location": "TestEnvoronmentDefinition.user_is_on_Teckshool_Page()"
});
formatter.result({
  "duration": 2673771600,
  "status": "passed"
});
formatter.match({
  "location": "TestEnvoronmentDefinition.user_clicks_Test_Enviromnent_page()"
});
formatter.result({
  "duration": 1298386200,
  "status": "passed"
});
formatter.match({
  "location": "TestEnvoronmentDefinition.user_should_get_test_environment_title()"
});
formatter.result({
  "duration": 7342900,
  "status": "passed"
});
formatter.after({
  "duration": 615591500,
  "status": "passed"
});
});