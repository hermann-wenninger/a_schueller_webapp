FROM python:latest

WORKDIR /schuellerwebapp

RUN apt-get update -qq && \
    apt-get install -y git python3-pip build-essential

COPY . /schuellerwebapp
RUN python3 -m pip install -r requirements.txt