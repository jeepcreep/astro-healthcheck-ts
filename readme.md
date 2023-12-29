# Astro Healthcheck

Add healthcheck endpoint to astro site.

## Install

### Automatic (recomended)

```
npx astro add @besomwebcraft/astro-healthcheck
```

## Usage

### Explicit

```http
GET yoursite.com/heathcheck -> 200 { healthy: true }
```

### Less bandwidth 

```http
HEAD yoursite.com/heathcheck -> 204
```
