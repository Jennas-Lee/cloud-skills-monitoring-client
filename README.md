# Cloud Skills Monitoring Server

[![build](https://github.com/Jennas-Lee/cloud-skills-monitoring-client/actions/workflows/main.yml/badge.svg)](https://github.com/Jennas-Lee/cloud-skills-monitoring-client/actions/workflows/main.yml)
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
docker-compose up -d
```

### Pull and Run Streaming Client Web Server Only

``` shell
docker pull ghcr.io/jennas-lee/cloud-skills-monitoring-client:latest
docker run -itd -p 80:80 ghcr.io/jennas-lee/cloud-skills-monitoring-client:latest
```