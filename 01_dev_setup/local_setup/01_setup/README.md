# Shark Hack 2018 - Alexa Skill Workshop
![Setup](../images/SharkHack%202018%20Alexa%20Workshop%20Banner%20-%20Setup.png)
What we need to get going!
## Prerequisites
+ [AWS Account](https://aws.amazon.com/)
+ [AWS Developer Account](https://developer.amazon.com/)
+ Amazon Alexa Mobile App on [Android](https://play.google.com/store/apps/details?id=com.amazon.dee.app) or [iOS](https://itunes.apple.com/us/app/amazon-alexa/id944011620?mt=8)

# Team AWS Account
As each team will have a single AWS Account, we want each team member to have an user on teh account!

## Create an IAM User per Team Memeber
With your Team's AWS account, go to [IAM](https://console.aws.amazon.com/iam/home) in the AWS Console.

Select Create User:

You will want to grant:
+ Programmatic access
+ AWS Management Console access

When you get to Permissions, create a new group.

| Name | Value |
|---|---|
| Group Name | 'SharkHack' |
| Policies | Administrator Access |
 
Email on the CSV file you get to that team member! It has their password, access key, and secret access key!

# Team Developer Account

# Required Software
## NodeJS and NPM
Install NodeJS from [here](https://nodejs.org/en/download/)

## Python
Install Python from [here](https://www.python.org/downloads/)

## AWS CLI
### Install
More information about the AWS CLI can be found in their [documentation](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)

But with Python installed, we only need to run:
```
pip install awscli --upgrade --user
```

### Configure
You want to setup the AWS CLI so that it runs as your IAM user! To do this, run:
```
aws configure
```

## Keyboards At The Ready...
1. Head to [02_code](../02_code) to continue!
