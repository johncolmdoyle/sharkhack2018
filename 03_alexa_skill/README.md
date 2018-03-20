# Shark Hack 2018 - Alexa Skill Workshop
![Alexa Skill](../images/SharkHack%202018%20Alexa%20Workshop%20Banner%20-%20Alexa%20Skill.png)
Time to allow Alexa to call our function!

## Amazon Developer Console

Login to the Alexa [Skill Console](https://developer.amazon.com/alexa/console/ask) and click 'Create Skill':
![Alexa Developer Landing Page](../images/Alexa%20Console%20-%2001%20-%20Landing.png)

Give our skill the name 'Shark Hack 2018':
![Alexa Developer New Skill](../images/Alexa%20Console%20-%2002%20-%20New%20Skill.png)

We have several types of Alexa skills, but with the Echo Dot we want to click the 'Custom Skill':
![Alexa Developer Custom Skill](../images/Alexa%20Console%20-%2003%20-%20Custom%20Skill.png)

From the Skill Dashboard, we want to click Invocation on the right!
![Alexa Developer Skill Dashboard](../images/Alexa%20Console%20-%2004%20-%20Skill%20Dashboard.png)

This is what we will actually say to Alexa, so lets put it down as 'shark hack' and then click 'Save Model':
![Alexa Developer Invocation](../images/Alexa%20Console%20-%2005%20-%20Invocation.png)

Click Intents. There are a lot of Amazon provided intents, but from our Lambda remeber we created the intent 'Hello'. Click Add Intent:
![Alexa Developer Intent List](../images/Alexa%20Console%20-%2006%20-%20Intent%20List.png)

Set the intent name to 'Hello' and click 'Create custom intent':
![Alexa Developer Custom Intent](../images/Alexa%20Console%20-%2007%20-%20Custom%20Intent.png)

For each intent that we set, we need to tell Alexa what the user would say to trigger it - let us kick off 'Hello' whenever the user says 'hello', 'hi', or 'hey'! Click Save Model and then click Build Model:
![Alexa Developer Intent Utterences](../images/Alexa%20Console%20-%2008%20-%20Intent%20Utterences.png)

Before we go to the next step, we want to return to the command line quickly!

Within the project folder, run the following command:
```
serverless info --verbose
``

If successful, we should get the following response:
![Alexa Developer Serverless Lambda ARN](../images/Alexa%20Console%20-%2009%20-%20Serverless%20Lambda%20ARN.png)

We want to copy the ARN from the following line:
```
HelloLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:844612073202:function:aws-nodejs-dev-hello:1
```

Drop the ':1' from it, this refers to the version - we want our skill to always hit the LATEST version.

Back to the Alexa Developer Console, and click Endpoint, and paste this ARN into the default region. Click build:
![Alexa Developer Endpoint](../images/Alexa%20Console%20-%2010%20-%20Endpoint.png)

With this complete, click the Test in the menu, and enter: 'open shark hack hi' and expect to get our response from the lambda:
![Alexa Developer Test](../images/Alexa%20Console%20-%2011%20-%20Test.png)

## Onto the Device
1. Head to [04_echo_dot](../04_echo_dot) to continue!
