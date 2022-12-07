// Copyright © 2022 Ory Corp
// SPDX-License-Identifier: Apache-2.0

module.exports = {
  docs: [
    "welcome",
    {
      type: "category",
      label: "Quickstarts",
      link: { type: "doc", id: "getting-started/overview" },
      items: [
        "getting-started/local-development",
        {
          type: "category",
          label: "Login",
          items: [
            "getting-started/integrate-auth/go",
            "getting-started/integrate-auth/php",
            "getting-started/integrate-auth/expressjs",
            "getting-started/integrate-auth/nextjs",
            "getting-started/integrate-auth/flutter-web-redirect",
            "getting-started/integrate-auth/react",
            "getting-started/integrate-auth/vue",
            "getting-started/integrate-auth/react-native",
          ],
        },
        {
          type: "category",
          label: "OAuth2 / OpenID",
          items: [
            "getting-started/ory-network-oauth2",
            "getting-started/oauth2-openid/expressjs",
          ],
        },
        "guides/permissions/overview",
      ],
    },
    {
      type: "category",
      label: "Identities and sessions",
      items: [
        "identities/native-browser",
        "security-model",
        {
          type: "category",
          label: "Sign-in & registration",
          items: [
            {
              type: "category",
              label: "Passwordless",
              items: [
                {
                  type: "autogenerated",
                  dirName: "kratos/passwordless",
                },
              ],
            },
            {
              type: "category",
              label: "Password",
              items: [
                "kratos/concepts/credentials/username-email-password",
                "concepts/password-policy",
              ],
            },
            {
              type: "category",
              label: "Social sign-in",
              items: [
                "kratos/social-signin/overview",
                {
                  "Integrating providers": [
                    "kratos/social-signin/generic",
                    "kratos/social-signin/google",
                    "kratos/social-signin/facebook",
                    "kratos/social-signin/microsoft",
                    "kratos/social-signin/github",
                    "kratos/social-signin/apple",
                    "kratos/social-signin/gitlab",
                    "kratos/social-signin/auth0",
                    "kratos/social-signin/slack",
                    "kratos/social-signin/spotify",
                    "kratos/social-signin/discord",
                    "kratos/social-signin/twitch",
                    "kratos/social-signin/netid",
                    "kratos/social-signin/yandex",
                    "kratos/social-signin/vk",
                    "kratos/social-signin/dingtalk",
                  ],
                },
                "kratos/social-signin/get-tokens",
                "kratos/social-signin/data-mapping",
                "kratos/social-signin/account-linking",
              ],
            },
            "identities/sign-in/check-session",
          ],
        },
        {
          type: "category",
          label: "Managing identities",
          items: [
            {
              type: "autogenerated",
              dirName: "kratos/manage-identities",
            },
          ],
        },
        {
          type: "category",
          label: "Managing sessions",
          items: [
            {
              type: "autogenerated",
              dirName: "kratos/session-management",
            },
          ],
        },
        "guides/bring-your-user-interface",
        {
          type: "category",
          label: "Multi-factor authentication (MFA)",
          items: [
            {
              type: "autogenerated",
              dirName: "kratos/mfa",
            },
          ],
        },
        {
          type: "category",
          label: "Sending emails",
          items: [
            {
              type: "autogenerated",
              dirName: "kratos/emails-sms",
            },
          ],
        },
        {
          type: "category",
          label: "Hooks",
          items: [
            {
              type: "autogenerated",
              dirName: "kratos/hooks",
            },
          ],
        },
        {
          Concepts: [
            "kratos/concepts/ui-user-interface",
            "kratos/concepts/browser-redirect-flow-completion",
            "kratos/concepts/security",
            {
              label: "Identity Credentials",
              type: "category",
              items: ["kratos/concepts/credentials"],
            },
          ],
        },
        {
          label: "Self-service user flows",
          type: "category",
          items: [
            "kratos/self-service",
            "kratos/self-service/flows/user-registration",
            "kratos/self-service/flows/user-login",
            "kratos/self-service/flows/user-settings",
            "kratos/self-service/flows/verify-email-account-activation",
            "kratos/self-service/flows/account-recovery-password-reset",
            "kratos/self-service/flows/user-logout",
            "kratos/self-service/flows/user-facing-errors",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "OAuth2 & OpenID",
      items: [
        "hydra/index",
        {
          Concepts: [
            "hydra/concepts/before-oauth2",
            "hydra/concepts/oauth2",
            "hydra/concepts/openid-connect-oidc",
            "hydra/concepts/login",
            "hydra/concepts/consent",
            "hydra/concepts/logout",
            "hydra/jwks",
            "hydra/limitations",
          ],
        },
        {
          Guides: [
            "hydra/guides/common-oauth2-openid-connect-flows",
            "hydra/guides/oauth2-public-spa-mobile",
            "hydra/guides/oauth2-clients",
            "hydra/guides/using-oauth2",
            {
              type: "category",
              label: "Implement user interface",
              items: [
                "hydra/guides/custom-ui-oauth2",
                "hydra/guides/login",
                "hydra/guides/consent",
                "hydra/guides/logout",
              ],
            },
            {
              type: "category",
              label: "Configuration",
              items: [
                "hydra/guides/client-token-expiration",
                "hydra/guides/cookies",
                "hydra/guides/cors",
              ],
            },
            {
              type: "category",
              label: "Advanced usage",
              items: [
                {
                  "Advanced flows": [
                    "hydra/guides/openid",
                    "hydra/guides/jwt",
                    "hydra/guides/audiences",
                  ],
                },
                "hydra/guides/openid-connect-dynamic-client-registration",
                "hydra/guides/oauth2-token-introspection",
                "hydra/guides/claims-at-refresh",
              ],
            },
          ],
        },
        {
          "Debug & Help": [
            "hydra/debug",
            "hydra/debug/csrf",
            "hydra/debug/token-endpoint-auth-method",
            "hydra/debug/logout",
            "hydra/faq",
          ],
        },
        {
          "Further Reading": [
            "hydra/case-study",
            "hydra/benchmark",
            "hydra/security-architecture",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Permissions and relationships",
      items: [
        {
          Introduction: [
            "keto/index",
            "keto/install",
            "keto/performance",
            "keto/quickstart",
          ],
        },
        {
          Concepts: [
            "keto/concepts/relation-tuples",
            "keto/concepts/namespaces",
            "keto/concepts/objects",
            "keto/concepts/subjects",
            "keto/concepts/graph-of-relations",
            "keto/concepts/api-overview",
            "keto/concepts/internal-algorithms",
            "keto/concepts/snaptokens-evaluation-consistency",
          ],
        },
        {
          Guides: [
            "keto/secure",
            "keto/guides/simple-access-check-guide",
            "keto/guides/list-api-display-objects",
            "keto/guides/expand-api-display-who-has-access",
            "keto/guides/production",
            "keto/guides/v0.7-migration",
            "keto/guides/migrating-legacy-policies",
            "keto/guides/rbac",
            "keto/guides/userset-rewrites",
            "keto/guides/access-control-inheritance",
            "keto/guides/access-control-list-design-best-practices",
            "keto/guides/upgrade",
          ],
        },
        {
          Examples: ["keto/examples/olymp-file-sharing"],
        },
        {
          Reference: [
            "keto/reference/configuration",
            "keto/reference/configuration-editor",
            "keto/reference/ory-permission-language",
            "keto/reference/rest-api",
            "keto/reference/proto-api",
            {
              "Command Line Interface (CLI)": [
                {
                  type: "autogenerated",
                  dirName: "keto/cli",
                },
              ],
            },
          ],
        },
        {
          SDKs: ["keto/sdk/overview", "keto/sdk/go"],
        },
      ],
    },
    {
      type: "category",
      label: "Actions",
      items: ["guides/integrate-with-ory-cloud-through-webhooks"],
    },
    {
      type: "category",
      label: "Migrating to Ory",
      items: ["hydra/self-hosted/migrating-from-mitreid"],
    },
    {
      type: "category",
      label: "From dev to prod",
      items: ["guides/custom-domains"],
    },
    {
      type: "category",
      label: "Open source",
      items: [
        "open-source",
        "open-source/commitment",
        "ecosystem/contributing",
        "ecosystem/software-architecture-philosophy",
        {
          type: "category",
          label: "Guidelines",
          items: ["open-source/guidelines/rest-api-guidelines"],
        },
      ],
    },
    {
      type: "category",
      label: "Security and compliance",
      items: ["ecosystem/security"],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        {
          type: "autogenerated",
          dirName: "troubleshooting",
        },
      ],
    },
    {
      type: "category",
      label: "Upgrade guides",
      items: [
        {
          type: "autogenerated",
          dirName: "guides/upgrade",
        },
      ],
    },
    {
      type: "category",
      label: "Other",
      items: [
        "getting-started/custom-ui-ory-elements",
        "concepts/terminology",
        "concepts/project",
        "concepts/redirects",
        {
          type: "category",
          label: "Ory CLI",
          items: [
            {
              type: "autogenerated",
              dirName: "guides/cli",
            },
            {
              Reference: [
                {
                  type: "autogenerated",
                  dirName: "cli",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  selfhosting: [
    "ecosystem/projects",
    "self-hosted/examples",
    "ecosystem/roadmap",
    "ecosystem/changelog",
    "ecosystem/versioning",
    "ecosystem/configuring",
    "ecosystem/deployment",
    "ecosystem/upgrading",
    "ecosystem/logging",
    "ecosystem/sqa",
    "ecosystem/community",
    {
      type: "category",
      label: "Projects",
      items: [
        {
          type: "category",
          label: "Ory Hydra",
          items: [
            "hydra/self-hosted/install",
            "hydra/5min-tutorial",
            "hydra/self-hosted/deploy-hydra-example",
            "hydra/self-hosted/upgrade",
            {
              type: "category",
              label: "Configuration",
              items: [
                "hydra/reference/configuration",
                "hydra/reference/configuration-editor",
                "hydra/self-hosted/configure-deploy",
                "hydra/self-hosted/dependencies-environment",
                "hydra/self-hosted/production",
                "hydra/self-hosted/hsm-support",
                "hydra/self-hosted/scaling-hydra",
                "hydra/self-hosted/merge-multiple-db-secrets",
                "hydra/self-hosted/gitlab",
                "hydra/self-hosted/secrets-key-rotation",
                "hydra/self-hosted/kubernetes-helm-chart",
                "hydra/self-hosted/ssl-https-tls",
                "hydra/self-hosted/tracing",
              ],
            },
            {
              type: "category",
              label: "Reference",
              items: [
                "hydra/reference/api",
                {
                  "Command Line Interface (CLI)": [
                    {
                      type: "autogenerated",
                      dirName: "hydra/cli",
                    },
                  ],
                },
                {
                  SDKs: [
                    {
                      type: "autogenerated",
                      dirName: "hydra/sdk",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Ory Kratos",
          items: [
            "kratos/ory-kratos-intro",
            "kratos/install",
            "kratos/quickstart",
            "kratos/guides/deploy-kratos-example",
            "kratos/guides/upgrade",
            {
              type: "category",
              label: "Configuration",
              items: [
                "kratos/configuring",
                "kratos/reference/configuration-editor",
                "kratos/guides/configuring-cookies",
                "kratos/guides/multi-domain-cookies",
                "self-hosted/kratos/configuration/oidc",
                "self-hosted/kratos/configuration/password",
                "kratos/guides/setting-up-password-hashing-parameters",
                "kratos/guides/setting-up-cors",
                "kratos/self-hosted/mail-courier-selfhosted",
                "kratos/self-hosted/account-activation-email-verification",
                "kratos/guides/zero-trust-iap-proxy-identity-access-proxy",
                "kratos/guides/multi-tenancy-multitenant",
                "kratos/guides/select-cipher-algorithm",
                "kratos/guides/secret-key-rotation",
                "kratos/guides/high-availability-ha",
                "kratos/guides/docker",
                "kratos/guides/https-tls",
                "kratos/guides/tracing",
              ],
            },
            {
              type: "category",
              label: "Debugging and help",
              items: [
                "kratos/debug/troubleshooting",
                "kratos/debug/csrf",
                "kratos/debug/performance-out-of-memory-password-hashing-argon2",
                "kratos/debug/debug-docker-delve-ory-kratos",
              ],
            },
            {
              type: "category",
              label: "Reference",
              items: [
                "kratos/reference/api",
                {
                  "Command Line Interface (CLI)": [
                    {
                      type: "autogenerated",
                      dirName: "kratos/cli",
                    },
                  ],
                },
                {
                  SDKs: ["kratos/sdk/overview", "kratos/sdk/go"],
                },
                "kratos/reference/configuration",
                "kratos/reference/json-schema-json-paths",
                "kratos/reference/html-forms",
                "kratos/reference/jsonnet",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Ory Oathkeeper",
          items: [
            {
              Introduction: ["oathkeeper/index", "oathkeeper/install"],
            },
            {
              "Core Concepts": [
                "oathkeeper/api-access-rules",
                {
                  type: "category",
                  label: "Handlers",
                  items: [
                    "oathkeeper/pipeline",
                    "oathkeeper/pipeline/authn",
                    "oathkeeper/pipeline/authz",
                    "oathkeeper/pipeline/mutator",
                    "oathkeeper/pipeline/error",
                  ],
                },
                "oathkeeper/grpc-middleware",
              ],
            },
            {
              Guides: [
                "oathkeeper/configure-deploy",
                "oathkeeper/guides/proxy-websockets",
                "oathkeeper/guides/traefik-proxy-integration",
                "oathkeeper/guides/upgrade",
              ],
            },
            "oathkeeper/reference/api",
            {
              Reference: [
                "oathkeeper/reference/configuration",
                "oathkeeper/reference/configuration-editor",
                {
                  "Command Line Interface (CLI)": [
                    {
                      type: "autogenerated",
                      dirName: "oathkeeper/cli",
                    },
                  ],
                },
              ],
            },
            {
              SDKs: ["oathkeeper/sdk"],
            },
          ],
        },
      ],
    },
  ],
  api: [
    "api/index",
    "concepts/personal-access-token",
    "ecosystem/api-design",
    "concepts/cache",
    "reference/api",
  ],
  sdk: [
    {
      "Ory Kratos": [
        {
          type: "autogenerated",
          dirName: "kratos/sdk",
        },
      ],
    },
    {
      "Ory Hydra": [
        {
          type: "autogenerated",
          dirName: "hydra/sdk",
        },
      ],
    },
    {
      "Ory Keto": [
        {
          type: "autogenerated",
          dirName: "keto/sdk",
        },
      ],
    },
    "oathkeeper/sdk",
  ],
}
