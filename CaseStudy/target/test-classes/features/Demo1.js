
function chkEmpty(){
	var name =/^[A-Z]{1}[A-Za-z]{3,}$/;
	var city=/^[A-Z]{1}[A-Za-z]+$/;
	var password=/^[A-Z]{1}[A-Za-z0-9]+$/;
	var mob = /^[7-9]{1}[0-9]{9}$/;
	var email=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

	if (document.frm1.userName.value == "") {alert("Please fill the Name");}
	else if (name.test(document.frm1.userName.value) == false) { alert("Please enter name (in InitCaps format e.g. Swarup) ");}
	else if (document.frm1.city.value == "") {alert("Please fill the city");}
	else if (city.test(document.frm1.city.value) == false) {alert("Please fill the city");}
	else if (document.frm1.password.value == "") {alert("Please fill the password");}
	else if (password.test(document.frm1.password.value) == false) {alert("Please fill the password in valid format");}
	else if (document.frm1.gender.value == "M") {alert("Please fill the gender F");}
	else if (document.frm1.lang.id == "") {alert("Please fill the Language");}
	
	else if (document.frm1.country.value == "select") {alert("Please fill the country");}
	else if (document.frm1.mynum.value == "") {alert("Please fill the My Number");}
	else if (document.frm1.email.value == "") {alert("Please fill the Email ID");}
	else if (document.frm1.mobile.value == "") {alert("Please fill the Mobile Number");}
	else if (email.test(document.frm1.email.value) == false) { alert("Please enter valid Email Id.");}
	else if (mob.test(document.frm1.mobile.value) == false) { alert("Please enter valid Contact no.");}
	
	/*else if (document.frmReg.txtEmail.value == ""){alert("Please fill the Email");}
	else if (email.test(document.frmReg.txtEmail.value) == false) { alert("Please enter valid Email Id.");}
	else if (document.frmReg.txtPhone.value == "") {alert("Please fill the Mobile No.");}
	else if (mob.test(document.frmReg.txtPhone.value) == false) { alert("Please enter valid Contact no.");}
	else if (document.frmReg.persons.value == ""){alert("Please fill the Number of people attending");}
	else if (document.frmReg.city.value=="Select City"){alert("Please select city")}
	else if (document.frmReg.state.value=="Select State"){alert("Please select state")}
	else if (document.frmReg.txtCardholderName.value == "") {alert("Please fill the Card holder name");}
	else if (document.frmReg.txtDebit.value == ""){alert("Please fill the Debit card Number");}
	else if (document.frmReg.txtCvv.value == "") {alert("Please fill the CVV");}
	else if (document.frmReg.txtMonth.value == ""){alert("Please fill expiration month");}
	else if (document.frmReg.txtYear.value == ""){alert("Please fill the expiration year");}
*/
		else {
	alert(" completed Successfully.");
//	window.location="success.html";
		}
	}