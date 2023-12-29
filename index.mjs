/**
 * @returns {import('astro').AstroIntegration}
 */
export default function createIntegration() {
  return {
    name: "@besomwebcraft/astro-healthcheck",
    hooks: {
      "astro:config:setup": ({ injectRoute }) => {
        injectRoute({
          pattern: "healthcheck",
          entrypoint: "@besomwebcraft/astro-healthcheck/healthcheck.mjs",
        });
      },
    },
  };
}
