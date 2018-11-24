package com.cg.trg.demo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefCalc {
	@Given("^entered two numbers (\\d+) and (\\d+)$")
	public void entered_two_numbers_and(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("entered two numbers "+arg1+" and "+arg2);
	}

	@When("^added two numbers (\\d+) and (\\d+)$")
	public void added_two_numbers_and(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("add two numbers "+arg1+" and "+arg2);
	}

	@Then("^show the add result (\\d+) \\+ (\\d+)$")
	public void show_the_add_result(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1+arg2);
	}

	@When("^subtracted two numbers (\\d+) and (\\d+)$")
	public void subtracted_two_numbers_and(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("subtract two numbers "+arg1+" and "+arg2);
	}

	@Then("^show the sub result (\\d+) - (\\d+)$")
	public void show_the_sub_result(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1-arg2);
	}

	@When("^multiplied two numbers (\\d+) and (\\d+)$")
	public void multiplied_two_numbers_and(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("multiply two numbers "+arg1+" and "+arg2);
	}

	@Then("^show the prod result (\\d+) \\* (\\d+)$")
	public void show_the_prod_result(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1*arg2);
	}

	@When("^divided two numbers (\\d+) and (\\d+)$")
	public void divided_two_numbers_and(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("divide two numbers "+arg1+" and "+arg2);
	}

	@Then("^show the div result (\\d+) / (\\d+)$")
	public void show_the_div_result(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(arg1/arg2);
	}
	

	@Given("^entered two numbers (\\d+) and (\\d+) to add$")
	public void entered_two_numbers_and_to_add(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		add_two_numbers_add(arg1,arg2);
	}
	
	@When("^add two numbers <add>$")
	public void add_two_numbers_add(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   int arg3=arg1+arg2;
	   show_the_result_res(arg3);
	}

	@Then("^show the result <res>$")
	public void show_the_result_res(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(arg1);
	}
}
