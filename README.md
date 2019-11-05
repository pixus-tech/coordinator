# pixus server

This component is wrapping [`Blockstack radiks`](https://github.com/blockstack-radiks/radiks) for deployment and local development. Although this is a centrally-hosted database, it is still fundamentally a decentralized application since all data is also stored in your Gaia and the server only stores encrypted data that is necessary for sharing.

## Development

- Add `127.0.0.1 pixus.local` to your `/etc/hosts` file.
- Generate certificates for local development
  with`./bin/generate-certificates.sh` and set `pixus` as the password.
- Start the server with `docker-compose up`
