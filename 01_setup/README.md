# Shark Hack 2018 - Alexa Skill Workshop
![Setup](../images/SharkHack%202018%20Alexa%20Workshop%20Banner%20-%20Setup.png)
What we need to get going!
## Prerequisites
+ [AWS Account](https://aws.amazon.com/)
+ [AWS Developer Account](https://developer.amazon.com/)
+ [NodeJS](https://nodejs.org/en/download/) with [NPM](https://docs.npmjs.com/getting-started/installing-node)
+ Amazon Alexa Mobile App on [Android](https://play.google.com/store/apps/details?id=com.amazon.dee.app) or [iOS](https://itunes.apple.com/us/app/amazon-alexa/id944011620?mt=8)
+ [Python](https://www.python.org/downloads/)

# Team AWS Account
## Create an IAM User per Team Memeber
As each team will have a single AWS Account, we want each team member to have a unique IAM User - an account on AWS!

One person should log in with their AWS Account and create [IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) for each member of the team.

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
Install NodeJS from [here]()

## Python
Install Python from [here]()

## AWS CLI
### Install
More information about the AWS CLI can be found in their [documentation](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)

But with Python installed, we only need to run:
```angularjs
pip install awscli --upgrade --user
```

### Configure
You want to setup the AWS CLI so that it runs as your IAM user! To do this, run:
```angularjs
aws configure
```

## Keyboards At The Ready...
1. Head to [02_code](02_code) to continue!