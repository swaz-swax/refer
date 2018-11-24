package com.cg.trg.mobile;

public class User {
private String fname;
private String lname;
private Integer balance;
private Long mobileNumber;

public User() {
	super();
	
}
public User(String fname, String lname, Integer balance, Long mobileNumber) {
	super();
	this.fname = fname;
	this.lname = lname;
	this.balance = balance;
	this.mobileNumber = mobileNumber;
}
public String getFname() {
	return fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public String getLname() {
	return lname;
}
public void setLname(String lname) {
	this.lname = lname;
}
public Integer getBalance() {
	return balance;
}
public void setBalance(Integer balance) {
	this.balance = balance;
}
public Long getMobileNumber() {
	return mobileNumber;
}
public void setMobileNumber(Long mobileNumber) {
	this.mobileNumber = mobileNumber;
}
@Override
public String toString() {
	return "User [fname=" + fname + ", lname=" + lname + ", balance=" + balance + ", mobileNumber=" + mobileNumber
			+ "]";
}

}
