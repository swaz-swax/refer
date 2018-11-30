package com.capg.training.SeleniumDemo;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	WebElement element = null;
    	System.setProperty("webdriver.chrome.driver", "D:\\Swarup Talukdar\\Softwares\\chrome driver\\chromedriver.exe");
    	WebDriver wd=new ChromeDriver();//gives only data
    	
    	
    	
    	wd.get("D:\\Swarup Talukdar\\Workspace\\STS\\SeleniumDemo\\src\\main\\java\\com\\capg\\training\\SeleniumDemo\\Bank.html");
    	
    	
    	element=wd.findElement(By.xpath("/html/body/div[2]/form/table/tbody/tr[1]/td[1]"));
    	wd.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    	element.click();
    	wd.navigate().back();
    	
    	wd.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    	//wd.get("D:\\Swarup Talukdar\\Workspace\\STS\\SeleniumDemo\\src\\main\\java\\com\\capg\\training\\SeleniumDemo\\register.html");
    	
    	
    	element = wd.findElement(By.xpath("//*[@id=\"uid\"]"));
        element.sendKeys("Swarup");
        element = wd.findElement(By.xpath("//*[@id=\"aid\"]"));
        element.sendKeys("5");
        element = wd.findElement(By.xpath("/html/body/form/table/tbody/tr[4]/td[2]/input"));
        element.sendKeys("swarup@gmail.com");
    	element = wd.findElement(By.xpath("/html/body/form/table/tbody/tr[5]/td[2]/input[2]"));
        element.click();
        element = wd.findElement(By.xpath("/html/body/form/table/tbody/tr[6]/td[2]/input[3]"));
        element.click();
        element = wd.findElement(By.xpath("/html/body/form/table/tbody/tr[7]/td[2]/select/option[5]"));
        element.click();
        element = wd.findElement(By.xpath("/html/body/form/table/tbody/tr[8]/td[2]/textarea"));
        element.sendKeys("Selenium");
        
        
        
        WebElement button =null;
      wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
       //element.clear();
        button = wd.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div/div[3]/center/input[1]"));
       button=wd.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div/div[3]/center/input[1]"));
        button=wd.findElement(By.name("btnK"));
        button.click();
    	
       /* String str=wd.getTitle();
        System.out.println(str);
        
        str=wd.getCurrentUrl();
        System.out.println(str);
        
        str=wd.getPageSource();
        //System.out.println(str);
        
        wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        //wd.close();
        wd.navigate().refresh();
        wd.get("https://yahoo.com");
        //wd.quit();
        */        	
    	//wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    	
    	/*WebElement element = wd.findElement(By.name("q"));
    	
    
        element.sendKeys("selenium");
        WebElement button =null;
      wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
       //element.clear();
        button = wd.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div/div[3]/center/input[1]"));
       button=wd.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div/div[3]/center/input[1]"));
        button=wd.findElement(By.name("btnK"));
        button.click();*/
        /*wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        wd.navigate().to("http://flipkart.com");
        wd.navigate().back();
        wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        wd.navigate().forward();
        wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
       wd.close();
        button = wd.findElement(By.cssSelector("#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type=\"submit\"]:nth-child(1)"));
       
        button.click();*/
    }
}
