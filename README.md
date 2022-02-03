# Cloud Skills Monitoring Server

[![Build Status](https://app.travis-ci.com/Jennas-Lee/cloud-skills-monitoring-client.svg?branch=main)](https://app.travis-ci.com/Jennas-Lee/cloud-skills-monitoring-client)
![License](https://img.shields.io/github/license/Jennas-Lee/cloud-skills-monitoring-client)
![Version](https://img.shields.io/github/v/release/Jennas-Lee/cloud-skills-monitoring-client)


- [Introduction](#introduction)
- [How to Use](#how-to-use)

# Introduction

This project is a server to monitor player's monitor.

# How to Use

## Create a Streaming Client

You can use docker-compose or run only streaming server.

### Use docker-compose with Streaming Server

``` shell
curl -O https://raw.githubusercontent.com/Jennas-Lee/cloud-skills-monitoring-client/main/docker-compose.yml
docker-compose up
```

### Pull and Run Streaming Client Web Server Only

``` shell
docker pull ghcr.io/jennas-lee/cloud-skills-monitoring-client:latest
docker run -itd -p 80:80 ghcr.io/jennas-lee/cloud-skills-monitoring-client:latest
```