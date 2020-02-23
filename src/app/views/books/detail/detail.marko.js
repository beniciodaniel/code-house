// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/code-house$1.0.0/src/app/views/books/detail/detail.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" href=\"/static/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"/static/css/fontawesome.min.css\"><link rel=\"stylesheet\" href=\"/static/css/casadocodigo.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header class=\"mainHeader\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><h1 class=\"logo\"><img src=\"/static/images/logo-casadocodigo.svg\" alt=\"Casa do Código\"></h1></div><div class=\"mainHeader-nav col-8\"><a href=\"#\" class=\"login\"><i class=\"fas fa-sign-in-alt\"></i>Login</a></div></div></div></header><main class=\"mainContent\"><div class=\"container\"><h1>Book Detail</h1><div class=\"form-group\"><label for=\"title\">Title:</label><input type=\"text\" id=\"title\" name=\"title\" readonly placeholder=\"Title\" value=\"" +
    marko_escapeXmlAttr(data.book.title) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"price\">Price:</label><input type=\"text\" id=\"price\" name=\"price\" readonly placeholder=\"150.25\" value=\"" +
    marko_escapeXmlAttr(data.book.price) +
    "\" class=\"form-control\"></div><div class=\"form-group\"><label for=\"description\">Description:</label><textarea cols=\"20\" rows=\"10\" id=\"description\" name=\"description\" readonly placeholder=\"Books...\" class=\"form-control\">" +
    marko_escapeXml(data.book.description) +
    "</textarea></div></div></main><footer class=\"footer\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-4\"><img src=\"/static/images/logo-rodape.svg\" class=\"logo-rodape\"></div><div class=\"col-8\"><ul class=\"social\"><li><a href=\"http://www.facebook.com/casadocodigo\" class=\"compartilhar-facebook\" target=\"_blank\">/CasaDoCodigo</a></li><li><a href=\"http://www.twitter.com/casadocodigo\" class=\"compartilhar-twitter\" target=\"_blank\">@casadocodigo</a></li></ul></div></div></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/code-house$1.0.0/src/app/views/books/detail/detail.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
