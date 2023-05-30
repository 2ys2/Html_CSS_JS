<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ page import="java.util.Date"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Server Test - tomcat 실행</title>
</head>
<body>
	<%-- java코드 표현식
<% %>
<%! %>
<%= %>
--%>

	<%= new Date() %><hr color="red" size="2">
	<%
	for(int i = 0; i <= 10; i++ ){
		out.print(i + " ");
	}
	%><br>

	<% for(int i = 0; i <= 10; i++ ) { %>
	hello <%= i %> <br />
	<% } // for end %>

</body>
</html>