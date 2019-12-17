# The GmodStore API documentation

View the full documentation here:

https://docs.gmodstore.com/

## Client libraries

We will add a JavaScript library in the future, but at the moment it seems generation for JavaScript is broken, in the meantime you can use: 
https://github.com/swagger-api/swagger-js as a replacement for an official GmodStore Node.js/JavaScript library. Here the `specUrl` would be:

`https://raw.githubusercontent.com/Everyday-AS/gmodstore-api-docs/master/openapi.yaml`

### Existing libraries

#### PHP

https://github.com/Everyday-AS/gmodstore-php-sdk

#### Java

https://github.com/everyday-as/gmodstore-java-sdk

#### Python

https://github.com/everyday-as/gmodstore-python-sdk

#### CSharp

https://github.com/everyday-as/gmodstore-csharp-sdk

### Generating your own

To generate your own client libraries you can use Swagger and the openapi.yaml found in this repository.

The documentation for Swagger codegen can be found here: https://github.com/swagger-api/swagger-codegen#to-generate-a-sample-client-library

You can generate a Java library for GmodStore using the following command:

```
java -jar swagger-codegen-cli.jar generate \
  -i https://raw.githubusercontent.com/Everyday-AS/gmodstore-api-docs/master/openapi.yaml \
  -l java \
  -o gmodstoresdk/java
```
