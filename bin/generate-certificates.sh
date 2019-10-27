#!/bin/bash

openssl req -x509 -newkey rsa:4096 -keyout config/pixus.key -out config/pixus.crt -days 365
