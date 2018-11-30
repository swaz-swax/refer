package com.cg.trg.casestudy;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefBasicFormInvalid {
	private BasicForm pagefactory;
	private WebDriver driver;
	
	@Given("^validate user name$")
	public void validate_user_name() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		pagefactory = new BasicForm(driver);
		driver.get("file://D://Swarup Talukdar//Workspace//STS//CaseStudy//src//test//java//features//Basicform.html");

	}

	@When("^enter value as all small chars in user name text box$")
	public void enter_value_as_all_small_chars_in_user_name_text_box() throws Throwable {
		pagefactory.setName("swarup");
		pagefactory.setButton();
	}

	@Then("^print error message to enter valid value for name field$")
	public void print_error_message_to_enter_valid_value_for_name_field() throws Throwable {
		String alertMessage = driver.switchTo().alert().getText();
		WebElement element=driver.findElement(By.xpath("/html/body/div/form/input[2]"));
		element.getAttribute("name");
		element.getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.quit();
	}

	@Given("^validate user city$")
	public void validate_user_city() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		pagefactory = new BasicForm(driver);
		driver.get("file://D://Swarup Talukdar//Workspace//STS//CaseStudy//src//test//java//features//Basicform.html");

	}

	@When("^enter value as all small chars in city text box$")
	public void enter_value_as_all_small_chars_in_city_text_box() throws Throwable {
		pagefactory.setName("Swarup");
		pagefactory.setCity("kolkata");
		pagefactory.setButton();
		
	}

	@Then("^print error message to enter valid value for city field$")
	public void print_error_message_to_enter_valid_value_for_city_field() throws Throwable {
		String alertMessage = driver.switchTo().alert().getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.quit();
	}

	@Given("^validate user password$")
	public void validate_user_password() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		pagefactory = new BasicForm(driver);
		driver.get("file://D://Swarup Talukdar//Workspace//STS//CaseStudy//src//test//java//features//Basicform.html");

	}
	
	@When("^enter value as all small chars in password text box$")
	public void enter_value_as_all_small_chars_in_password_text_box() throws Throwable {
		pagefactory.setName("Swarup");
		pagefactory.setCity("Kolkata");
		pagefactory.setPassword("swarup");
		pagefactory.setButton();
		
	}

	@Then("^print error message to enter valid value for password field$")
	public void print_error_message_to_enter_valid_value_for_password_field() throws Throwable {
		String alertMessage = driver.switchTo().alert().getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.quit();
	}

	@Given("^validate user gender$")
	public void validate_user_gender() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		pagefactory = new BasicForm(driver);
		driver.get("file://D://Swarup Talukdar//Workspace//STS//CaseStudy//src//test//java//features//Basicform.html");

	}

	@When("^user forgot to select gender button$")
	public void user_forgot_to_select_gender_button() throws Throwable {
		pagefactory.setName("Swarup");
		pagefactory.setCity("Kolkata");
		pagefactory.setPassword("Swaio276");
		
		pagefactory.setLanguageEng();
		pagefactory.setMyNumber("40");
		pagefactory.setEmail("swarup@bvrrn.com");
		pagefactory.setMobileNumber("7894561230");
		pagefactory.setButton();
	}

	@Then("^print error message for invalid gender$")
	public void print_error_message_for_invalid_gender() throws Throwable {
		String alertMessage = driver.switchTo().alert().getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.quit();
	}

	@Given("^validate user language$")
	public void validate_user_language() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		pagefactory = new BasicForm(driver);
		driver.get("file://D://Swarup Talukdar//Workspace//STS//CaseStudy//src//test//java//features//Basicform.html");

	}

	@When("^user forgot to click on language check box$")
	public void user_forgot_to_click_on_language_check_box() throws Throwable {
		pagefactory.setName("Swarup");
		pagefactory.setCity("Kolkata");
		pagefactory.setPassword("Swaio276");
		pagefactory.setGenderF();
		pagefactory.setLanguageEng();
		pagefactory.setMyNumber("40");
		pagefactory.setEmail("swarup@bvrrn.com");
		pagefactory.setMobileNumber("7894561230");
		pagefactory.setButton();
	}

	@Then("^print error message for invalid language field$")
	public void print_error_message_for_invalid_language_field() throws Throwable {
		String alertMessage = driver.switchTo().alert().getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.quit();
	}

	@Given("^validate user MyNumber$")
	public void validate_user_MyNumber() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		pagefactory = new BasicForm(driver);
		driver.get("file://D://Swarup Talukdar//Workspace//STS//CaseStudy//src//test//java//features//Basicform.html");

	}

	@When("^user entered invalid value in MyNumber field$")
	public void user_entered_invalid_value_in_MyNumber_field() throws Throwable {
		pagefactory.setName("Swarup");
		pagefactory.setCity("Kolkata");
		pagefactory.setPassword("Swaio276");
		pagefactory.setGenderF();
		pagefactory.setLanguageEng();
		pagefactory.setMyNumber("45");
		pagefactory.setButton();
	}

	@Then("^print error message for invalid MyNumber field$")
	public void print_error_message_for_invalid_MyNumber_field() throws Throwable {
		String alertMessage = driver.switchTo().alert().getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.quit();
	}

	@Given("^validate email$")
	public void validate_email() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		pagefactory = new BasicForm(driver);
		driver.get("file://D://Swarup Talukdar//Workspace//STS//CaseStudy//src//test//java//features//Basicform.html");

	}

	@When("^user entered invalid value in email field$")
	public void user_entered_invalid_value_in_email_field() throws Throwable {
		pagefactory.setName("Swarup");
		pagefactory.setCity("Kolkata");
		pagefactory.setPassword("Swaio276");
		pagefactory.setGenderF();
		pagefactory.setLanguageEng();
		pagefactory.setMyNumber("40");
		pagefactory.setEmail("swarup");
		pagefactory.setButton();
	}

	@Then("^print error message for invalid email format$")
	public void print_error_message_for_invalid_email_format() throws Throwable {
		String alertMessage = driver.switchTo().alert().getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.quit();
	}

	@Given("^validate Mobile Number$")
	public void validate_Mobile_Number() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		pagefactory = new BasicForm(driver);
		driver.get("file://D://Swarup Talukdar//Workspace//STS//CaseStudy//src//test//java//features//Basicform.html");

	}

	@When("^user entered invalid value in mobile field$")
	public void user_entered_invalid_value_in_mobile_field() throws Throwable {
		pagefactory.setName("Swarup");
		pagefactory.setCity("Kolkata");
		pagefactory.setPassword("Swaio276");
		pagefactory.setGenderF();
		pagefactory.setLanguageEng();
		pagefactory.setMyNumber("40");
		pagefactory.setEmail("swarup@bvrrn.com");
		pagefactory.setMobileNumber("1234567");
	}

	@Then("^print error message for invalid mobile field$")
	public void print_error_message_for_invalid_mobile_field() throws Throwable {
		String alertMessage = driver.switchTo().alert().getText();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		System.out.println("alert :: "+alertMessage);
		Thread.sleep(2000);
		driver.quit();
	}

}
