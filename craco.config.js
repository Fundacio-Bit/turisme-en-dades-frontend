//Ant Design customizations instructions at: https://ant.design/docs/react/customize-theme

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#586BA4" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
