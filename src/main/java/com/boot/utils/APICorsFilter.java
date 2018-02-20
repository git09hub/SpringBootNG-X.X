/**
 * APICorsFilter.Java
 */
package com.boot.utils;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Servlet Filter for Cros domain checks.
 * 
 * @author Cognizant
 *
 */
@WebFilter(filterName = "corsfilter", urlPatterns = "/*", description = "Request  annotated filter")
public class APICorsFilter implements Filter {

    private static final Logger logger = Logger.getLogger(APICorsFilter.class);

    /*
     * 
     * (non-Javadoc)
     * 
     * @see javax.servlet.Filter#destroy()
     */
    @Override
    public void destroy() {
    }

    /*
     * (non-Javadoc)
     * 
     * @see javax.servlet.Filter#doFilter(javax.servlet.ServletRequest,
     * javax.servlet.ServletResponse, javax.servlet.FilterChain)
     */
    @Override
    public void doFilter(final ServletRequest req, final ServletResponse res,
            final FilterChain chain) throws IOException, ServletException {
        final HttpServletResponse response = (HttpServletResponse) res;
        final HttpServletRequest request = (HttpServletRequest) req;
        response.setContentType("application/json;charset=utf-8;*/*;charset=utf-8;");
        response.addHeader("Access-Control-Allow-Credentials", "true");
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods",
                "POST, GET, OPTIONS, DELETE, PUT");
        response.addHeader("Access-Control-Max-Age", "3600");
        response.addHeader("Access-Control-Expose-Headers",
                "x-requested-with,Access-Control-Request-Headers,Content-Type, Authorization");
        response.addHeader(
                "Access-Control-Allow-Headers",
                "Origin,Accept , content-type, accept, authorization, Access-Control-Request-Headers, x-requested-with, Content-Type , Authorization");

        if ("OPTIONS".equals(request.getMethod())) {
        	logger.debug("Method type OPTIONS method" + request.getMethod());

            response.flushBuffer();

        } else {
            chain.doFilter(request, response);
        }

    }

    /*
     * (non-Javadoc)
     * 
     * @see javax.servlet.Filter#init(javax.servlet.FilterConfig)
     */
    @Override
    public void init(final FilterConfig filterConfig) {
    }

}