<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>결과창</title>
</head>
<body>
	<%
	request.setCharacterEncoding("UTF-8"); //euc-kr
	/* response.setCharacterEncoding("UTF-8"); //euc-kr */
	String name = request.getParameter("irum");
	String pass = request.getParameter("pwd");
	String email = request.getParameter("mail");

	out.print(name + "님 반갑습니다. 비밀번호는 " + pass + "<br>"
	+ "이메일은 " + email + "입니다.");
	%>
	<hr>
	<h2><%=name + "님 반갑습니다. 비밀번호는 " + pass + "<br>"
	+ "이메일은 " + email + "입니다."%></h2>
</body>
</html>