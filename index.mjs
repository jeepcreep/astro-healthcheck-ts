/**
 * @returns {import('astro').AstroIntegration}
 */
export default function createIntegration() {
  return {
    name: "astro-healthcheck-ts",
    hooks: {
      "astro:config:setup": ({ injectRoute }) => {
        injectRoute({
          pattern: "healthcheck",
          entrypoint: "astro-healthcheck-ts/healthcheck.mjs",
        });
      },
    },
  };
}
