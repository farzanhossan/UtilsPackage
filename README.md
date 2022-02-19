# UtilsPackage

For Utils Fuctions

# Features

#### Only Utils Functions.. Just Enjoy..

## Date Time Related

###### - GetStartAndEndDateTime()

    GetStartAndEndDateTime(fromDate, toDate)

        Example:
            fromDate: string | number | Date = "2021-01-01"
            toDate: string | number | Date = "2021-01-02"

###### - SecondsToTime()

    SecondsToTime(seconds)

        Example:
            seconds: number = 5000

###### - GetTimeDifference()

    GetTimeDifference(fromDate, toDate)

        Example:
            fromDate: string | number | Date = "2021-01-01"
            toDate: string | number | Date = "2021-01-02"

## Array Related

###### - ArrayGroupByAttribute()

    ArrayGroupByAttribute( array[] , key )

        Example:
            array[objects]: array[] = [{ name: "Jhon Doe" },{ name: "Alexa" }]
            key: string = "name"

###### - ArrayCountByAttribute()

    ArrayCountByAttribute( array[] , key )

        Example:
            array[objects]: array[] = [{ name: "Jhon Doe", age: 25 },{ name: "Alexa", age: 27 }, { name: "Alexa", age: 28 }]
            key: string = "name"

###### - AsyncForEach()

    AsyncForEach( array[] , callback )

###### - UniqueArrayOfObjects()

    UniqueArrayOfObjects( array[] , attribute )

        Example:
            array[objects]: array[] = [{ name: "Jhon Doe" },{ name: "Alexa" }]
            attribute: string = "name"

###### - UniqueArray()

    UniqueArray( array[])

        Example:
            array: array[] = [ 1, 2, 3, 4]

###### - IntersectionArray()

    IntersectionArray( array1[], array2[])

        Example:
            array1: array[] = [ 1, 2, 3, 4]
            array1: array[] = [ 2, 3, 4, 5]

###### - ParseObjectToArray()

    ParseObjectToArray( object )

        Example:
            object: { a: 1 }

###### - JsonChunkArray()

    JsonChunkArray( array[objects], size )

        Example:
            array[objects]: array[] = [{ a: 1 },{ b: 2 }]
            size: number = 1

## String Related

###### - IsValidEmail()

    IsValidEmail( email )

        Example:
            email: string = "example@example.com"

###### - IsValidBDPhoneNumber()

    IsValidBDPhoneNumber( number )

        Example:
            number: string = "+8801700000000"

###### - IsValidUserName()

    IsValidUserName( username )

        Example:
            username: string = "aamaruf131"

###### - IsValidUUID()

    IsValidUUID( uuid )

        Example:
            uuid: string = "48a2d845-edfa-4681-926e-31f635771da5"

###### - CamelCaseToSeparateString()

    CamelCaseToSeparateString( camelCaseString )

        Example:
            camelCaseString: string = "exampleCamelCase"

###### - GenerateKeyOrCode()

    GenerateKeyOrCode(codeLength, type)

        Example:
            codeLength: number = 5
            type: string = "HEX" || "OCTAL" (optional - DEFAULT "OCTAL")

# Editor

**_Farzan Hossan Shaikat_**
