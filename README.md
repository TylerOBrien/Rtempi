# Rtempi

### Note

Rtempi expects to be run as separate instances on unique domains for each app
in the `src/app` directory. 

### Setup

By default the dev server will listen on `0.0.0.0` and port `8080`.

### Dev Server

```bash
yarn admin # Start admin dev server
yarn user  # Start user dev server
```

### Watch

```bash
yarn watch:admin # Watch admin app for changes
yarn watch:user  # Watch admin app for changes
```

### Build for Release

```bash
yarn build:admin # Build admin app
yarn build:user  # Build user app
```
