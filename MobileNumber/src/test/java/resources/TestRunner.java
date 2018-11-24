package resources;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"pretty","html:htmlop/html-output"},monochrome=true,/*dryRun=true,*//*strict=false,*/tags= {"@tagBalance"} ,glue= {"com.cg.trg.mobile"})
public class TestRunner {

}
