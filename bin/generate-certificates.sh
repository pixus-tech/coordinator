#!/bin/bash

openssl req -x509 -out config/pixus.crt -keyout config/pixus.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=pixus.local' -extensions EXT -config <( \
   printf "[dn]\nCN=pixus.local\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:pixus.local\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
