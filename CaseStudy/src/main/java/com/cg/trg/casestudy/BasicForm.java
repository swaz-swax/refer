package com.cg.trg.casestudy;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class BasicForm {
	WebDriver driver;

	@FindBy(how = How.NAME, using = "companyName")
	@CacheLookup
	WebElement companyName;

	@FindBy(xpath = "/html/body/div/form/input[2]")
	@CacheLookup
	WebElement name;

	@FindBy(xpath = "/html/body/div/form/input[3]")
	@CacheLookup
	WebElement city;

	@FindBy(xpath = "/html/body/div/form/input[4]")
	@CacheLookup
	WebElement password;

	@FindBy(xpath = "/html/body/div/form/input[5]")
	@CacheLookup
	WebElement genderM;

	@FindBy(xpath = "/html/body/div/form/input[6]")
	@CacheLookup
	WebElement genderF;

	@FindBy(xpath = "//*[@id=\"engid\"]")
	@CacheLookup
	WebElement languageEng;

	@FindBy(xpath = "//*[@id=\"tamid\"]")
	@CacheLookup
	WebElement languageTam;

	@FindBy(xpath = "//*[@id=\"telid\"]")
	@CacheLookup
	WebElement languageTel;

	@FindBy(name = "country")
	@CacheLookup
	WebElement country;

	@FindBy(xpath = "/html/body/div/form/input[11]")
	@CacheLookup
	WebElement myNumber;

	@FindBy(xpath = "/html/body/div/form/input[12]")
	@CacheLookup
	WebElement email;

	@FindBy(xpath = "/html/body/div/form/input[13]")
	@CacheLookup
	WebElement mobileNumber;

	@FindBy(xpath = "/html/body/div/form/input[14]")
	@CacheLookup
	WebElement alternatenumber;

	@FindBy(xpath = "/html/body/div/form/input[15]")
	@CacheLookup
	WebElement button;

	public WebElement getButton() {
		return button;
	}

	public void setButton() {
		button.click();
	}

	public WebElement getCompanyName() {
		return companyName;
	}

	public WebElement getName() {
		return name;
	}

	public WebElement getCity() {
		return city;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getGenderM() {
		return genderM;
	}

	public WebElement getLanguageEng() {
		return languageEng;
	}

	public WebElement getCountry() {
		return country;
	}

	public WebElement getMyNumber() {
		return myNumber;
	}

	public WebElement getEmail() {
		return email;
	}

	public WebElement getMobileNumber() {
		return mobileNumber;
	}

	public WebElement getAlternatenumber() {
		return alternatenumber;
	}

	public void setCompanyName(String companyName) {
		// this.companyName = companyName;
		this.companyName.sendKeys(companyName);
	}

	public void setName(String name) {
		// this.name = name;
		this.name.sendKeys(name);
	}

	public void setCity(String city) {
		this.city.sendKeys(city);// this.city = city;
	}

	public void setPassword(String password) {
		this.password.sendKeys(password);
		// this.password = password;
	}

	public void setGenderM() {
		this.genderM.click();
		// this.gender = gender;
	}


	public void setLanguageEng() {
		this.languageEng.click();
		// this.language = language;
	}

	public void setCountry(String country) {
		this.country.sendKeys(country);
		// this.country = country;
	}

	public void setMyNumber(String myNumber) {
		this.myNumber.sendKeys(myNumber);
		// this.myNumber = myNumber;
	}

	public void setEmail(String email) {
		this.email.sendKeys(email);
		// this.email = email;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber.sendKeys(mobileNumber);
		// this.mobileNumber = mobileNumber;
	}

	public void setAlternatenumber(String alternatenumber) {
		this.alternatenumber.sendKeys(alternatenumber);
		// this.alternatenumber = alternatenumber;
	}

	public WebElement getGenderF() {
		return genderF;
	}

	public WebElement getLanguageTam() {
		return languageTam;
	}

	public WebElement getLanguageTel() {
		return languageTel;
	}

	public void setGenderF() {
		this.genderF.click();
	}

	public void setLanguageTam() {
		this.languageTam.click();
	}

	public void setLanguageTel() {
		this.languageTel.click();
	}

	public BasicForm() {

	}

	public BasicForm(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

}
