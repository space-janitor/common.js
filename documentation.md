<a name="Common"></a>

## Common

Common functionality class

**Kind**: global class

- [Common](#Common)
  - [new Common()](#new_Common_new)
  - [.configuration](#Common+configuration)
  - [.initialize(config)](#Common+initialize)
  - [.initializeLogging(configuration)](#Common+initializeLogging)
  - [.getLog4JSLogger(moduleFilename)](#Common+getLog4JSLogger)
  - [.getPackageInfo(moduleFileName)](#Common+getPackageInfo)
  - [.clone(value)](#Common+clone)

<a name="new_Common_new"></a>

### new Common()

Common's constructors

<a name="Common+configuration"></a>

### common.configuration

Configuration getter

**Kind**: instance property of [<code>Common</code>](#Common)  
<a name="Common+initialize"></a>

### common.initialize(config)

Initialization function.

**Kind**: instance method of [<code>Common</code>](#Common)

| Param  | Type                | Description                         |
| ------ | ------------------- | ----------------------------------- |
| config | <code>object</code> | Configuration to initialize Common. |

<a name="Common+initializeLogging"></a>

### common.initializeLogging(configuration)

Initiailizes log4js

**Kind**: instance method of [<code>Common</code>](#Common)

| Param         | Type            | Description                |
| ------------- | --------------- | -------------------------- |
| configuration | <code>\*</code> | Valid log4js configuration |

<a name="Common+getLog4JSLogger"></a>

### common.getLog4JSLogger(moduleFilename)

Gets logger given a module filename

**Kind**: instance method of [<code>Common</code>](#Common)

| Param          | Type            | Description     |
| -------------- | --------------- | --------------- |
| moduleFilename | <code>\*</code> | module filename |

<a name="Common+getPackageInfo"></a>

### common.getPackageInfo(moduleFileName)

Get package info for a given module filename

**Kind**: instance method of [<code>Common</code>](#Common)

| Param          | Type            | Description     |
| -------------- | --------------- | --------------- |
| moduleFileName | <code>\*</code> | module filename |

<a name="Common+clone"></a>

### common.clone(value)

Deep copy a value

**Kind**: instance method of [<code>Common</code>](#Common)

| Param | Type              | Description    |
| ----- | ----------------- | -------------- |
| value | <code>deep</code> | value to clone |
