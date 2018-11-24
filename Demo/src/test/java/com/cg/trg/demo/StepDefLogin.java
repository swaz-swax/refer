package com.cg.trg.demo;

import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefLogin {
	WebElement element = null;
	WebDriver wd;
	
	@Given("^User is in Login page$")
	public void user_is_in_Login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
    	
		
		System.setProperty("webdriver.chrome.driver", "D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		wd=new ChromeDriver();//gives only data
    	
    	wd.get("D:\\Swarup Talukdar\\Workspace\\STS\\Demo\\src\\test\\java\\resources\\login.html");
    	
	}

	@When("^user enters accountNumber (\\d+)$")
	public void user_enters_accountNumber(String arg1) throws Throwable {
		element=wd.findElement(By.xpath("//*[@id=\"userName\"]"));
		element.sendKeys(arg1);
			Pattern vName=Pattern.compile("^[0-9]{5}$");
			Matcher match = vName.matcher(arg1);
			Assert.assertTrue(match.matches(), "valid "+arg1);
			
			
	}
	@When("^password (\\d+)$")
	public void password(String arg2) throws Throwable {
	
    	element=wd.findElement(By.xpath("/html/body/div/form/table/tbody/tr[2]/td[2]/input"));
    	element.sendKeys(arg2);
    	Pattern vName=Pattern.compile("^[0-9]{4}$");
		Matcher match = vName.matcher(arg2);
		Assert.assertTrue(match.matches(), "valid "+arg2);
    	
	}

	@When("^clicks on login button$")
	public void clicks_on_login_button() throws Throwable {
		element=wd.findElement(By.xpath("/html/body/div/form/table/tbody/tr[3]/td[2]/input"));
		element.click();
	}

	@Then("^open bank page$")
	public void open_bank_page() throws Throwable {
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		wd.get("D:\\Swarup Talukdar\\Workspace\\STS\\Demo\\src\\test\\java\\resources\\Bank.html");
	}
	



}
