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
              "@body-background": "#E5E5E5",
              // Base background color for most components
              "@component-background": "#E5E5E5",
              "@table-header-bg": "#E5E5E5",
              "@table-footer-bg": "#E5E5E5",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
