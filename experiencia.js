var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope) {
	$scope.experiences = [

		{ "field" : "Fecha" , "data" : "24/07/2018-Actualidad", "experience" : [{
			"field" : "Empresa" , "data" : "SII Concatel"
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Banco Santander. Boadilla del Monte."
		}, {	
			"field" : "Departamento" , "data" : "Arquitectura Seguridad"
		}, {	
			"field" : "Proyectos" , "data" : "Security-Oauth-server (Servidor de autorización compatible con OAuth2). Creación/mantenimiento de Apis y librerías de seguridad basadas en el protocolo Oauth2, Spring Security, almacén de claves JKS, Single Sign-on"
		}, {	
			"field" : "Funciones" , "data" : "Colaboración en el diseño técnico de las soluciones propuestas, control de 				calidad del código. Construcción y pruebas unitarias, estres, rendimiento y 				funcionales. Integración contínua."
		}, {	
			"field" : "Herramientas" , "data" : "Java8, Spring Tool Suite, Spring Boot 1.4.1, Spring Boot 2.1, Spring 4, Spring JPA, Spring Security, Spring Cloud, Spring Session, Spring Zuul, Spring cloud config, Ribbon, Flyway, OpenShift (Pass), Ldap, Jenkins, Postgres, Redis,Postgresql, MySQL, H2, JUnit, JMeter, SoapUi, Git, GitLab, GitHub, Hystrix, Sleuth/Zipkin, Scrum, Jira, Lombok, Sonar, SonarQube, Dbeaver, Eureka Server Nexus, Alm2, Confluence, Apache Directory Studio, Postman, Maven, Remedi, Json, Json Web Tokens, Asciidoctor, Microservicios, RestFull, Lambdas, WSO2IS, Azure, Kubernetes, Docker, Harbor, Azure Devops, Swagger, Cloudbees, SSL/TLS, Certificados, HTTPS, Nginx, OpenSSL, Linux, POO, POA, Azure Key Vault, programación reactiva Spring WebFlux"
		}, {	
			"field" : "Metodología" , "data" : "Scrum"
		}]},
		
		{ "field" : "Fecha" , "data" : "01/09/2016 – 23/07/2018", "experience" : [{
			"field" : "Empresa" , "data" : "Tecnocom/Indra"
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Ministerio de Sanidad, Servicios Sociales e Igualdad."
		}, {	
			"field" : "Proyectos" , "data" : "Servicios de desarrollo de las aplicaciones FSE (GESRESWEB, SIREF)"
		}, {	
			"field" : "Funciones" , "data" : "Colaboración en el diseño técnico de las soluciones propuestas, control de 				calidad del código, construcción y pruebas unitarias, pruebas generales, 				implantación en el entorno de PRE y DES resolución de incidencias, documentación de casos de usos."
		}, {	
			"field" : "Herramientas" , "data" : "Html5, javascript, css3, jquery, jsf2.2, jdk 1.6, jdk1.8, maven, sql server, sql 			developer,  jdbc, myBatis 3.2.7, Eclipse, sonar, jenkins, Subversion, Redmain, 			Latex, jasperreports, 5.6,filezilla, putty, Oracle 11g.Argo UML, DBDesigner, 			Weblogic 10, Weblogic 12, junit, Documentum, Primefaces"
		}, {	
			"field" : "Metodología" , "data" : "Scrum"
		}, {	
			"field" : "Otros" , "data" : "Certificados digitáles"
		}]},	
		
		{ "field" : "Fecha" , "data" : "17/01/2011 – 19/01/2016", "experience" : [{
			"field" : "Empresa" , "data" : "Isoft a Distancia S.L."
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Portel Servicios Telemáticos S.A."
		}, {	
			"field" : "Proyectos" , "data" : "AirFreight. Proyecto para la gestión de envío de mercancías aéreas."
		}, {	
			"field" : "Funciones" , "data" : "Desarrollo de la capa cliente mediante el framework Spring-boot, Spring, JSF, Primefaces."
		}, {	
			"field" : "Herramientas" , "data" : "JSF, PrimeFaces, Spring-boot, Spring-Security Spring, Mongo, RoboMongo, CSS, Javascript, Html, SQL Server, Eclipse, SVN, jdk1.8, maven"
		}, {	
			"field" : "Metodología" , "data" : "Scrum"
		}]},
	
		{ "field" : "Fecha" , "data" : "17/01/2011 – 19/01/2016", "experience" : [{
			"field" : "Empresa" , "data" : "Isoft a Distancia S.L."
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Portel Servicios Telemáticos S.A."
		}, {	
			"field" : "Proyectos" , "data" : "Integra. Proyecto para la gestión de la prestación de servicios en los puertos de interés general."
		}, {	
			"field" : "Funciones" , "data" : "Desarrollo de nuevas funcionalidades en la capa cliente mediante el framework JSF. Pruebas unitarias. Gestión de incidencias"
		}, {	
			"field" : "Herramientas" , "data" : "J2EE, JSF 1.2, Hibernate, JavaScript, RichFaces 3.3, Eclipse, Oracle 9i, jdk1.5, Ejb3.0, CVS, Weblogic 12c, Mantis, Redmine, Scrum ,Svn Tortoise, Visual Source Safe."
		}]},
	
		{ "field" : "Fecha" , "data" : "28/06/2010 – 10/12/2010", "experience" : [{
			"field" : "Empresa" , "data" : "Cmmi Project Technologies."
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Software Factory."
		}, {	
			"field" : "Proyectos" , "data" : "Proyectos propios de la compañía (Gestor de contenidos y Portal)."
		}, {	
			"field" : "Funciones" , "data" : "Generación de cuadernos de carga. Codificación.  Pruebas unitarias."
		}, {	
			"field" : "Herramientas" , "data" : "J2EE, MySQL, JSF, Hibernate, JavaScript, DBDesigner, Css, Herramientas de OCR y tratamiento de imágenes en .net, CVS."
		}]},
	
	
		{ "field" : "Fecha" , "data" : "11/01/2010 – 25/06/2010", "experience" : [{
			"field" : "Empresa" , "data" : "Cmmi Project Technologies."
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Everis."
		}, {	
			"field" : "Proyectos" , "data" : "Sistema de intercambio de información entre el ayuntamiento de Madrid y las empresas de contratación de licencias urbanísticas."
		}, {	
			"field" : "Funciones" , "data" : "Desarrollo de servicios web. Gestión y seguimiento de incidencias en las solicitudes de contratación de licencias."
		}, {	
			"field" : "Herramientas" , "data" : "Jdk1.5 Axis, Eclipse, Hibernate, Apache tomcat, SQL, SQLServer, Struts, Jsp, Servlets, Log4j, Junit, Web Service Security, JTrack, CVS."
		}]},
	
		{ "field" : "Fecha" , "data" : "11/03/2009 – 8/01/2010", "experience" : [{
			"field" : "Empresa" , "data" : "Cmmi Project Technologies."
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Software Factory."
		}, {	
			"field" : "Proyectos" , "data" : "Proyectos propios de la compañía (Gestor de contenidos y Portal)."
		}, {	
			"field" : "Funciones" , "data" : "Generación de cuadernos de carga. Codificación.  Pruebas unitarias."
		}, {	
			"field" : "Herramientas" , "data" : "J2EE, MySQL, JSF, Hibernate, JavaScript, DBDesigner, Css, Herramientas de OCR y tratamiento de imágenes en .net, CVS."
		}]},
	
		{ "field" : "Fecha" , "data" : "14/08/2006 – 10/03/2009", "experience" : [{
			"field" : "Empresa" , "data" : "Cmmi Project Technologies."
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Indra."
		}, {	
			"field" : "Proyectos" , "data" : "Orange. Gestión de Servicios telefónicos enfocados a grandes corporaciones."
		}, {	
			"field" : "Funciones" , "data" : "Análisis y Desarrollo de nuevas funcionalidades, Análisis e Integración de diferentes aplicativos de las empresas Amena y Wanadoo. Apoyo técnico a becarios."
		}, {	
			"field" : "Herramientas" , "data" : "Struts, Html, Jsp, Xml, Jstl, Servlet, Oracle 9i, Toad, SQL, jdk1.4, Jbuilder, CVS."
		}]},
	
	
		{ "field" : "Fecha" , "data" : "13/02/2006 – 10/08/2006", "experience" : [{
			"field" : "Empresa" , "data" : "Getronics"
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Intervención General de la Administración del Estado (IGAE)."
		}, {	
			"field" : "Proyectos" , "data" : "Nexux. Gestión de Fondos Europeos para Empresas y Organismos Públicos."
		}, {	
			"field" : "Funciones" , "data" : "Desarrollo de nuevas funcionalidades del negocio, Análisis y desarrollo de objetos Web mediante el framework Java Server Face."
		}, {	
			"field" : "Herramientas" , "data" : "JSF,  Jdk1.3,  Junit, Html, Dhtml, Jsp, Xml, Xsl, Racional Rouse, Uml, Servlet, Oracle 9i, Toad, Pl/Sql, Jdeveloper. Diferentes patrones para la realización de los objetos lado servidor (Singleton, delegation, Dao,etc.), CVS."
		}]},
	
		{ "field" : "Fecha" , "data" : "01/07/2005 – 10/02/2006", "experience" : [{
			"field" : "Empresa" , "data" : "Getronics"
		}, {	
			"field" : "Categoría" , "data" : "Analista-Orgánico"
		}, {	
			"field" : "Cliente" , "data" : "Correos"
		}, {	
			"field" : "Proyectos" , "data" : "Sistema de Gestión Integral de Envíos on-line con tecnología J2EE."
		}, {	
			"field" : "Funciones" , "data" : "Análisis de las diferentes funcionalidades de la aplicación y diseño técnico de las mismas, dirección de equipo de trabajo de 5 personas, ayuda al desarrollo y diseño de componentes. Estimación de horas para el desarrollo de las nuevas especificaciones."
		}, {	
			"field" : "Herramientas" , "data" : "Rational-Rose, UML, Word, Websphere Application Server, iReport, Eclipse, Oracle 9i, Toad, SQL/Server, PL/SQL, Struts, Ajax, Html, JavaScript, Servlet, Ejb, Jsp, Xml, Xsl, Jndi, Patrones DAO, MVC, CVS, Clear case."
		}]},
	
		{ "field" : "Fecha" , "data" : "01/01/2003 – 30/06/2005", "experience" : [{
			"field" : "Empresa" , "data" : "Omnisoft"
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "BBVA"
		}, {	
			"field" : "Proyectos" , "data" : "Gestión integral de Help-Desk. on-line, Módulo estadístico con tecnología J2EE"
		}, {	
			"field" : "Funciones" , "data" : "Análisis módulos estadísticos, toma de requisitos estadísticos, diseño técnico,  control y seguimiento de equipo de trabajo constituidos por 4 personas. Ayuda al desarrollo."
		}, {	
			"field" : "Herramientas" , "data" : "WebSphere Application Server Developer, Oracle 9i, Toad, Html, Dhtml, JavaScript, Jsp, Servlets, Ejb, Jndi, Jdbc, JFreeChart, Word, CVS"
		}]},
	
		{ "field" : "Fecha" , "data" : "15/01/2001 - 24/12/2002", "experience" : [{
			"field" : "Empresa" , "data" : "Omnisoft"
		}, {	
			"field" : "Categoría" , "data" : "Analista-Programador"
		}, {	
			"field" : "Cliente" , "data" : "Teleinformática/Azertia"
		}, {	
			"field" : "Proyectos" , "data" : "Sistema Integral de tesorería bancaria para países de la U.E así como para países de América del Sur"
		}, {	
			"field" : "Funciones" , "data" : "Análisis y desarrollo de diferentes módulos bancarios."
		}, {	
			"field" : "Herramientas" , "data" : "Delphi 1, Delphi 3, Delphi 5, visual source safe, SQL, plantillas y herramientas propias del cliente para la documentación."
		}]},
	
	
		{ "field" : "Fecha" , "data" : "01/03/1998 - 30/12/2000", "experience" : [{
			"field" : "Empresa" , "data" : "IFA-DEVELOPMENT S.L"
		}, {	
			"field" : "Categoría" , "data" : "Programador / Analista-Programador"
		}, {	
			"field" : "Proyectos" , "data" : "Software para la investigación Grafotécnica que contempla la recogida de firmas captando forma, presión y velocidad usando tabletas digitalizadoras.Software de autoventa conectado con balanzas POS (CAMPESA). Se trata de una aplicación de gestión de almacén y facturación de las ventas recogidas de las balanzas.Agenda electrónica para grupos de trabajo dirigido al mundo de notaría.Desarrollo en equipo de software integral destinado a la hostelería (www.sistemas-táctiles.com ). Se trata de una aplicación de gestión y terminal punto de venta táctil.Desarrollo en equipo de software integral destinado a cadenas de calzado y textil. Se trata de una aplicación de gestión de compras, stock, ventas y análisis donde los distintos puntos de venta están conectados vía modem a una central.Desarrollo de software para la gestión y facturación de grandes volúmenes de llamadas de telefonía móvil para intermediarios Airtel y Telefónica."
		}, {	
			"field" : "Funciones" , "data" : "Desarrollo de los diferentes aplicativos mencionados anteriormente, creaci&oacute;n de objetos mediante la programaci&oacute;n orientada."
		}, {	
			"field" : "Herramientas" , "data" : "Delphi 3, Delphi 5, SQL, Api win 32, cristal reports, Interbase"
		}]}
	];
});


