# The GmodStore API documentation

View the full documentation here:

https://docs.gmodstore.com/

### Libraries

#### PHP

https://github.com/Everyday-AS/gmodstore-php-sdk

#### Java

https://github.com/everyday-as/gmodstore-java-sdk

#### Python

https://github.com/everyday-as/gmodstore-python-sdk

#### CSharp

https://github.com/everyday-as/gmodstore-csharp-sdk

#### Javascript

https://github.com/everyday-as/gmodstore-javascript-sdk

### Generating your own

To generate your own client libraries you can use the OpenApi generator and the openapi.yaml found in this repository.

The documentation for Swagger codegen can be found here: https://github.com/OpenAPITools/openapi-generator#2---getting-started

You can generate a PHP library for GmodStore using the following command:

```
java -jar openapi-generator-cli.jar generate \
  -i https://raw.githubusercontent.com/everyday-as/gmodstore-api-docs/master/openapi.yaml \
  -g java \
  -o gmodstoresdk/java
```
