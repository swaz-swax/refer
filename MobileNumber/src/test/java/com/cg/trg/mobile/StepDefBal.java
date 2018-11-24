package com.cg.trg.mobile;

import java.util.Scanner;

import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefBal {
	User user=new User();
	Scanner sc= new Scanner(System.in);
	
	@Given("^Enter user details$")
	public void enter_user_details() throws Throwable {
	   System.out.println("Enter user first name: ");
	   user.setFname(sc.next());
	   System.out.println("Enter user last name: ");
	   user.setLname(sc.next());
	   System.out.println("Enter balance: ");
	   user.setBalance(sc.nextInt());
	   System.out.println("Enter mobile number: ");
	   user.setMobileNumber(sc.nextLong());
	   
	   
	}

	@When("^Balance is greater$")
	public void balance_is_greater() throws Throwable {
	    Assert.assertTrue(user.getBalance()>=500);
	}

	@Then("^print user details$")
	public void print_user_details() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(user);
	}

	@When("^Balance is low$")
	public void balance_is_low() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 Assert.assertTrue(user.getBalance()<500);
	}

	@Then("^print error message$")
	public void print_error_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.err.println("error message: "+"Balance is less than 500");
	}


}
