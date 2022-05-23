# The GmodStore API documentation

View the full documentation here:

https://docs.gmodstore.com/

### V3 API Libraries

Please use the documentation and interface with the GmodStore API yourself in your own preferred way. We do not maintain SDKs for version 3 (or greater) of the API.

### Libraries (Legacy V2 API Only)

> Use at your own risk. API V2 is deprecated and will soon be deleted (Cutoff date TBD).

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

#### Generating your own (V2 only. V3 SDKs can not be generated with OpenAPI generator, they will not work properly)

To generate your own client libraries you can use the OpenApi generator and the openapi.yaml found in this repository.

The documentation for OpenAPI generator can be found here: https://github.com/OpenAPITools/openapi-generator#2---getting-started

You can generate a PHP library for GmodStore using the following command:

```
java -jar openapi-generator-cli.jar generate \
  -i https://www.gmodstore.com/openapi \
  -g java \
  -o gmodstoresdk/java
```
