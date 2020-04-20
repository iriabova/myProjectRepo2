package stepDefinitions;

import newCore.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.TeckObject;

public class TestEnvoronmentDefinition extends Base{
	
	TeckObject testEnvironment = new TeckObject();
	
	/**
	this is repo pull practise 122334  more changes done to see
	changes done 4/20/20
	*/
	@Given("^User is on Teckshool Page$")
	public void user_is_on_Teckshool_Page() throws Throwable {
	  Base.initializeDriver();
	    
	}

	@When("^User clicks Test Enviromnent page$")
	public void user_clicks_Test_Enviromnent_page() throws Throwable {
		testEnvironment.clickOnTestEnvironment();
	    
	}

	/*
	 * this is my comments for git practise changes done 4/20/20
	 */
	
	
	/*
	 * another change done 4/20/20
	 */
	
	@Then("^User should get test environment title$")
	public void user_should_get_test_environment_title() throws Throwable {
	    System.out.println(driver.getTitle());
	    
	}

}
