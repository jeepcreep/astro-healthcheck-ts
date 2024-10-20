# Astro Healthcheck

Add healthcheck endpoint to astro site (typescript compatible)

## Install

### Automatic (recomended)

```
npx astro add astro-healthcheck-ts
```

## Usage

### Explicit

```http
GET yoursite.com/healthcheck -> 200 { healthy: true }
```

### Less bandwidth 

```http
HEAD yoursite.com/healthcheck -> 204
```
