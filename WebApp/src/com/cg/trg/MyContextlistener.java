package com.cg.trg;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
@WebListener
public class MyContextlistener implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		ServletContext context=sce.getServletContext();
		context.setInitParameter("param3","Delhi");
		context.setInitParameter("param4","Banga");
		

	}

}
