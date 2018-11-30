package features;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	plugin = {"pretty","html:html-output"} ,tags= {"@null-checking"},glue= {"com.cg.trg.casestudy"}
		)
public class RunTestBasicFormNull {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
