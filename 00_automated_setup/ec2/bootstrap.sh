#!/bin/bash
# Sudo required to install everything
sudo su
# Update all installed packages
yum update -y
# install node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 6.11.5
nvm install --lts
# install pip
curl -O https://bootstrap.pypa.io/get-pip.py
python get-pip.py --user
export PATH=~/.local/bin:$PATH
source ~/.bash_profile
# install awscli
pip install awscli --upgrade --user