# Shark Hack 2018 - Alexa Skill Workshop
![Code](../images/SharkHack%202018%20Alexa%20Workshop%20Banner%20-%20Code.png)
Here we will write up code our Hello World skill, test it locally, and deploy it to AWS Lambda!
## Setup for the Code

We want to initizlie our project for NodeJS, create a new folder for this project and inside it, run
the following command:
```
npm init
``` 

Accept all the defaults and we now ready to begin our NPM project. You should see the following file:
+ package.json

For this workshop, we are going to leverage the [Serverless]() framework to easily build and deploy AWS Lambda functions.

Install the serverless command via npm:

```
npm install serverless -g
```

With the serverless command installed, generate a new serverless project inside our project folder:

```
serverless create --template aws-nodejs
```

This will give us a barebones project, you should see the following files:
+ serverless.yml
+ handler.js
+ package.json

To interact with Alexa, we will want to use the Alexa SDK! You can install it with the following command:
```
npm install alexa-sdk --save
```

Our folder should now contain:
+ serverless.yml
+ handler.js
+ package.json

## 1's and 0's for Days

Open up handler.js and copy the contents of [this file](handler.js) into it. This is setting up our code to react to a
'Hello' intent!

Create a new file, event-hello.json. This will be our testing file. We want to be able to test locally before deploying our
changes to save time and headaches when the whole team is trying to make changes!

Copy the contents of [this file](event-hello.json) into event-hello.json.

To test our lambda locally, we need one more install! Install lambda-local with the following command:
```
npm install lambda-local -g
```

With this installed we can now run a test with the following command:
```
lambda-local -l handler -h hello -e event-hello.json
```

If everything can gone successfully, we hopefully will see the following:
![Successful Test](../images/Lambda%20Local%20Successful%20Test.png)

## To The Cloud!!

With our function working as intended, now we can push the code out to AWS!

With serverless, we can achieve this with the following command:
```
serverless deploy
```

## To The Mic
1. Head to [03_alexa_skill](../03_alexa_skill) to continue!
