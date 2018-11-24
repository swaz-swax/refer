package com.cg.trg.mobile;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.testng.Assert;

import cucumber.api.DataTable;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class StepDefMobile {
	List<String> list= new ArrayList<String>();
	@Given("^All mobiles$")
	public void all_mobiles(DataTable arg1) throws Throwable 
	{
		list=arg1.asList(String.class);
		list.stream().forEach(System.out::println);
		Assert.assertNotNull(list, "list is not empty");
	}

	/*@Then("^show all mobiles$")
	public void show_all_mobiles() throws Throwable 
	{
	    
	}*/
	
	List<String> list1= new ArrayList<String>();
	@Given("^All mobile numbers$")
	public void all_mobile_numbers(DataTable arg1) throws Throwable 
	{
		list1=arg1.asList(String.class);
		System.out.println("All Mobile Numbers ");
		list1.stream().forEach(System.out::println);
		Assert.assertNotNull(list1, "list is empty");
	}


	@Then("^show all valid mobile numbers$")
	public void show_all_valid_mobile_numbers() throws Throwable 
	{
		System.out.println("Checking Mobile Numbers ");
		
		Pattern vName=Pattern.compile("^[6-9]{1}[0-9]{9}$");
		
		for(String str:list1)
		{
			Matcher match = vName.matcher(str);
			
			if(match.matches())
			{
				System.out.println( "valid " + str);
				Assert.assertEquals(match.matches(), true);
				
			}
			else
			{
				System.out.println( "invalid " + str);
				Assert.assertEquals(match.matches(), true);
				
			}
			
		}
		
	}




}
