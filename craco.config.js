//Ant Design customizations instructions at: https://ant.design/docs/react/customize-theme

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#586BA4",
              // Background color for `<body>
              "@body-background": "#EAE6CA",
              // Base background color for most components
              "@component-background": "#EAE6CA",
              "@table-header-bg": "#EAE6CA",
              "@table-footer-bg": "#EAE6CA",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
