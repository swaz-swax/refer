package features;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"pretty"},tags= {"@tag"},glue= {"com.cg.trg.demo"}
		)
public class LoginTestRunner {

}
