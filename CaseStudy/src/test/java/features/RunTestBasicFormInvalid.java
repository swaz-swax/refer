package features;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	plugin = {"pretty","html:html-output"} ,tags= {"@validation-unsuccessful"},glue= {"com.cg.trg.casestudy"}
		)
public class RunTestBasicFormInvalid {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
