package com.przedwojski.notes;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // if Spring MVC is on classpath and no CorsConfigurationSource is provided,
                // Spring Security will use CORS configuration provided to Spring MVC
                .cors().and().csrf().disable() // until I disabled csrf, I couldn't perform PUT, POST or DELETE requests
//                .and()
                .authorizeRequests()
                .anyRequest().permitAll();
//                .authenticated()
//                .and()
//                .httpBasic();
    }
}
