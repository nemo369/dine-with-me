'use strict';

/**
 * import-content.js controller
 *
 * @description: A set of functions called "actions" of the `import-content` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },
  preAnalyzeImportFile: async ctx => {
    const services = strapi.plugins["import-content"].services;
    try {
      const data = await services["import-content"].preAnalyzeImportFile(ctx);
      ctx.send(data);
    } catch (error) {
      console.log(error);
      ctx.response.status = 406;
      ctx.response.message = "could not parse: " + error;
    }
  }
};
