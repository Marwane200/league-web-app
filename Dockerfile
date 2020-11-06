FROM openjdk:12
ADD target/ball-app.jar ball-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "ball-app.jar"]