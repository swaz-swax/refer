package com.cg.trg.demo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stepdef {

	@Given("^enter username and password$")
	public void enter_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		System.out.println("1st method");
	}

	@Then("^navigate to main page$")
	public void navigate_to_main_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		System.out.println("2nd method");
	}


}
