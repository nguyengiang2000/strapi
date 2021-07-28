const ssoRoutes = strapi.features.isEnabled(strapi.features.SSO)
  ? [
      {
        // Component: SingleSignOn,
        Component: async () => {
          const component = await import(/* webpackChunkName: "sso" */ '../SingleSignOn');

          return component;
        },
        to: '/settings/single-sign-on',
        exact: true,
      },
    ]
  : [];

const customRoutes = [...ssoRoutes];

export default customRoutes;
