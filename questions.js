const questions = [

/* =========================
MCQ - DATABASE CONFIGURATION
========================= */

{
type:"mcq",
question:"Which file is used to configure database in Spring Boot?",
options:[
"application.properties",
"pom.xml",
"config.java",
"settings.xml"
],
answer:"application.properties",
hint:"Contains datasource properties"
},

{
type:"mcq",
question:"Which property defines database URL?",
options:[
"spring.datasource.url",
"spring.url",
"database.url",
"mysql.url"
],
answer:"spring.datasource.url",
hint:"Datasource URL"
},

{
type:"mcq",
question:"Which dependency connects Spring Boot with MySQL?",
options:[
"MySQL Driver",
"Spring Web",
"Lombok",
"Validation"
],
answer:"MySQL Driver",
hint:"JDBC driver"
},

{
type:"mcq",
question:"Which annotation maps class to database table?",
options:[
"@Entity",
"@Table",
"@Column",
"@Id"
],
answer:"@Entity",
hint:"JPA entity"
},

/* =========================
MCQ - PACKAGE STRUCTURE
========================= */

{
type:"mcq",
question:"Which package contains API endpoints?",
options:[
"controller",
"service",
"repository",
"model"
],
answer:"controller",
hint:"Handles requests"
},

{
type:"mcq",
question:"Which package contains business logic?",
options:[
"service",
"controller",
"repository",
"entity"
],
answer:"service",
hint:"Core logic"
},

{
type:"mcq",
question:"Which package communicates with database?",
options:[
"repository",
"service",
"controller",
"dto"
],
answer:"repository",
hint:"Data access layer"
},

{
type:"mcq",
question:"Which package contains entity classes?",
options:[
"model",
"controller",
"service",
"config"
],
answer:"model",
hint:"Database models"
},

/* =========================
MCQ - USER CRUD
========================= */

{
type:"mcq",
question:"Which HTTP method creates user?",
options:["POST","GET","PUT","DELETE"],
answer:"POST",
hint:"Create operation"
},

{
type:"mcq",
question:"Which HTTP method retrieves user?",
options:["GET","POST","PUT","DELETE"],
answer:"GET",
hint:"Read operation"
},

{
type:"mcq",
question:"Which HTTP method deletes user?",
options:["DELETE","POST","PUT","GET"],
answer:"DELETE",
hint:"Remove operation"
},

{
type:"mcq",
question:"Which annotation maps POST API?",
options:[
"@PostMapping",
"@GetMapping",
"@PutMapping",
"@DeleteMapping"
],
answer:"@PostMapping",
hint:"Create endpoint"
},

/* =========================
MCQ - PRODUCT CRUD
========================= */

{
type:"mcq",
question:"Which HTTP method updates product?",
options:["PUT","GET","POST","DELETE"],
answer:"PUT",
hint:"Update data"
},

{
type:"mcq",
question:"Which annotation maps GET request?",
options:[
"@GetMapping",
"@PostMapping",
"@PutMapping",
"@DeleteMapping"
],
answer:"@GetMapping",
hint:"Retrieve API"
},

{
type:"mcq",
question:"Which repository interface provides CRUD methods?",
options:[
"JpaRepository",
"Runnable",
"Comparator",
"Serializable"
],
answer:"JpaRepository",
hint:"JPA repository"
},

{
type:"mcq",
question:"Which method retrieves all records?",
options:[
"findAll()",
"save()",
"delete()",
"update()"
],
answer:"findAll()",
hint:"Fetch all data"
},

/* =========================
MCQ - EXCEPTION HANDLING
========================= */

{
type:"mcq",
question:"Which annotation handles global exceptions?",
options:[
"@ControllerAdvice",
"@RestController",
"@Service",
"@Autowired"
],
answer:"@ControllerAdvice",
hint:"Global handler"
},

{
type:"mcq",
question:"Which annotation handles specific exception?",
options:[
"@ExceptionHandler",
"@ControllerAdvice",
"@Bean",
"@Entity"
],
answer:"@ExceptionHandler",
hint:"Method-level handler"
},

{
type:"mcq",
question:"ResourceNotFoundException is used for?",
options:[
"Missing resource",
"Database creation",
"Authentication",
"Payment"
],
answer:"Missing resource",
hint:"404 scenario"
},

/* =========================
MCQ - CART SYSTEM
========================= */

{
type:"mcq",
question:"What is the purpose of Cart system?",
options:[
"Store selected products",
"Authenticate users",
"Process payments",
"Generate reports"
],
answer:"Store selected products",
hint:"Shopping cart"
},

{
type:"mcq",
question:"Which entity usually connects User and Product?",
options:[
"Cart",
"Order",
"Payment",
"JWT"
],
answer:"Cart",
hint:"Temporary storage"
},

/* =========================
MCQ - ORDER SYSTEM
========================= */

{
type:"mcq",
question:"Order system is mainly used for?",
options:[
"Purchase management",
"Authentication",
"Validation",
"Logging"
],
answer:"Purchase management",
hint:"Order processing"
},

{
type:"mcq",
question:"Which status is common in Order system?",
options:[
"PENDING",
"RUNNING",
"DEBUG",
"STATIC"
],
answer:"PENDING",
hint:"Order state"
},

/* =========================
MCQ - PAYMENT INTEGRATION
========================= */

{
type:"mcq",
question:"Payment integration is used for?",
options:[
"Online transactions",
"Authentication",
"Validation",
"Compilation"
],
answer:"Online transactions",
hint:"Payment gateway"
},

{
type:"mcq",
question:"Which payment gateway is commonly used in Spring Boot projects?",
options:[
"Razorpay",
"Tomcat",
"JUnit",
"Maven"
],
answer:"Razorpay",
hint:"Popular in India"
},

/* =========================
MCQ - JWT AUTHENTICATION
========================= */

{
type:"mcq",
question:"JWT stands for?",
options:[
"JSON Web Token",
"Java Web Token",
"JSON Window Token",
"Java Window Tool"
],
answer:"JSON Web Token",
hint:"Authentication token"
},

{
type:"mcq",
question:"JWT is mainly used for?",
options:[
"Authentication",
"Database",
"UI Design",
"Compilation"
],
answer:"Authentication",
hint:"Secure APIs"
},

{
type:"mcq",
question:"Which header usually contains JWT token?",
options:[
"Authorization",
"Content-Type",
"Accept",
"Host"
],
answer:"Authorization",
hint:"Bearer token"
},

/* =========================
CODING - APPLICATION.PROPERTIES
========================= */

{
type:"code",
question:"Configure MySQL database",

required:["spring.datasource.url"],

hint:"Datasource config",

solution:`spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
spring.datasource.username=root
spring.datasource.password=1234
spring.jpa.hibernate.ddl-auto=update`
},

/* =========================
CODING - ENTITY
========================= */

{
type:"code",
question:"Create User entity",

required:["entity","id"],

hint:"Database model",

solution:`import jakarta.persistence.*;

@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String email;
}`
},

/* =========================
CODING - REPOSITORY
========================= */

{
type:"code",
question:"Create UserRepository",

required:["jparepository"],

hint:"Repository layer",

solution:`import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository 
extends JpaRepository<User, Long>{

}`
},

/* =========================
CODING - SERVICE
========================= */

{
type:"code",
question:"Create UserService",

required:["service","autowired"],

hint:"Business logic",

solution:`import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  UserRepository repo;

  public User saveUser(User user){
    return repo.save(user);
  }
}`
},

/* =========================
CODING - CONTROLLER
========================= */

{
type:"code",
question:"Create UserController POST API",

required:["restcontroller","postmapping"],

hint:"Create user API",

solution:`import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

  @PostMapping
  public String createUser(){
    return "User Created";
  }
}`
},

{
type:"code",
question:"Create GET API",

required:["getmapping"],

hint:"Retrieve users",

solution:`@GetMapping
public String getUsers(){
  return "All Users";
}`
},

{
type:"code",
question:"Create DELETE API",

required:["deletemapping"],

hint:"Delete user",

solution:`@DeleteMapping("/{id}")
public String deleteUser(){
  return "User Deleted";
}`
},

/* =========================
CODING - PRODUCT CRUD
========================= */

{
type:"code",
question:"Create Product entity",

required:["entity"],

hint:"Product model",

solution:`@Entity
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private double price;
}`
},

{
type:"code",
question:"Update Product API",

required:["putmapping"],

hint:"Update product",

solution:`@PutMapping("/{id}")
public String updateProduct(){
  return "Product Updated";
}`
},

{
type:"code",
question:"Retrieve single product",

required:["getmapping"],

hint:"Get one product",

solution:`@GetMapping("/{id}")
public String getProduct(){
  return "Single Product";
}`
},

/* =========================
CODING - EXCEPTION HANDLING
========================= */

{
type:"code",
question:"Create ResourceNotFoundException",

required:["extends runtimeexception"],

hint:"Custom exception",

solution:`public class ResourceNotFoundException 
extends RuntimeException {

  public ResourceNotFoundException(String msg){
    super(msg);
  }
}`
},

{
type:"code",
question:"Global Exception Handler",

required:["controlleradvice"],

hint:"Handle exceptions",

solution:`import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(Exception.class)
  public String handleException(){
    return "Error Occurred";
  }
}`
},

/* =========================
CODING - JWT
========================= */

{
type:"code",
question:"JWT Authorization header example",

required:["authorization"],

hint:"Bearer token",

solution:`Authorization: Bearer eyJhbGciOiJIUzI1NiJ9`
}

];