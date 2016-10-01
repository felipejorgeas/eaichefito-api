define({ "api": [
  {
    "type": "get",
    "url": "/eaichefito/api/recipe",
    "title": "Lista de receitas",
    "version": "1.0.0",
    "group": "Receita",
    "description": "<p>Retorna a lista de receitas conforme os filtros informados na requisição.</p>",
    "success": {
      "fields": {
        "Sucesso": [
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Versão atual da api.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Double",
            "optional": false,
            "field": "time",
            "description": "<p>Tempo de processamento da requisição.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Informa se houve erro ou não no processamento da requisição.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes",
            "description": "<p>Lista de receitas.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes._id",
            "description": "<p>Identificador da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.title",
            "description": "<p>Título da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.time",
            "description": "<p>Tempo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.id_ext",
            "description": "<p>Indentificador externo do parceiro da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Number",
            "optional": false,
            "field": "recipes.rating",
            "description": "<p>Pontuação da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.prepare",
            "description": "<p>Lista de modos de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.prepare.title",
            "description": "<p>Título do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.prepare._id",
            "description": "<p>Identificador do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.prepare.items",
            "description": "<p>Lista de passos do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.ingredients",
            "description": "<p>Lista de ingredientes da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.ingredients.title",
            "description": "<p>Título do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.ingredients._id",
            "description": "<p>Identificador dos ingredientes da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.ingredients.items",
            "description": "<p>Lista de ingredients do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.tags",
            "description": "<p>Palavras-chave da receita.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Example",
          "content": "HTTP/1.1 200 OK\n  {\n      version: \"1.0.0\",\n      time: 0.174,\n      status: true,\n      recipes: [\n          {\n              _id: \"57ef1e184ca1292f123257db\",\n              title: \"Pavê de cereja com ganache\",\n              time: \"40 minutos\",\n              id_ext: \"0\",\n              rating: 0,\n              prepare: [\n                  {\n                      title: \"Calda\",\n                      _id: \"57ef1e184ca1292f123257dc\",\n                      items: [\n                          \"Dissolva as gelatinas no leite quente e reserve\",\n                          \"Bata no liquidificador: o leite gelado, leite condensado, creme de leite e a gelatina reservada\",\n                          \"Bata bem\",\n                          \"Transfira para uma tigela e leve a geladeira ou freezer (se estiver com pressa), por cerca de 20 minutos ou até antes de endurecer\",\n                          \"O ponto ideal é de creme\"\n                      ]\n                  }\n              ],\n              ingredients: [\n                  {\n                      title: \"Calda\",\n                      _id: \"57ef1e184ca1292f123257dd\",\n                      items: [\n                          \"2 pacotes de biscoito maisena\",\n                          \"leite o suficiente para umedecer os biscoitos\",\n                          \"1 lata de leite condensado\"\n                      ]\n                  }\n              ],\n              tags: [\n                  \"pavê\",\n                  \"leite\",\n                  \"maisena\"\n              ]\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro": [
          {
            "group": "Erro",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Versão atual da api.</p>"
          },
          {
            "group": "Erro",
            "type": "Double",
            "optional": false,
            "field": "time",
            "description": "<p>Tempo de processamento da requisição.</p>"
          },
          {
            "group": "Erro",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Informa se houve erro ou não no processamento da requisição.</p>"
          },
          {
            "group": "Erro",
            "type": "Object[]",
            "optional": false,
            "field": "error",
            "description": "<p>Lista de erros.</p>"
          },
          {
            "group": "Erro",
            "type": "String",
            "optional": false,
            "field": "error.desc",
            "description": "<p>Descrição do erro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-Example",
          "content": " HTTP/1.1 400 INVALID\n {\n   \"version\": \"1.0.0\",\n   \"time\": 0.001,\n   \"status\": false,\n   \"error\": [\n       {\n           \"desc\": \"Requisição com dados incorretos.\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/recipe-route.js",
    "groupTitle": "Receita",
    "name": "GetEaichefitoApiRecipe"
  },
  {
    "type": "post",
    "url": "/eaichefito/api/recipe",
    "title": "Adicionar receitas",
    "version": "1.0.0",
    "group": "Receita",
    "description": "<p>Insere uma lista de receitas no banco de dados.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "recipes",
            "description": "<p>Lista de receitas.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipes.title",
            "description": "<p>Título da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipes.time",
            "description": "<p>Tempo de preparo da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "recipes.id_ext",
            "description": "<p>Indentificador externo do parceiro da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "recipes.rating",
            "description": "<p>Pontuação da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.prepare",
            "description": "<p>Lista de modos de preparo da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipes.prepare.title",
            "description": "<p>Título do modo de preparo da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.prepare.items",
            "description": "<p>Lista de passos do modo de preparo da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.ingredients",
            "description": "<p>Lista de ingredientes da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipes.ingredients.title",
            "description": "<p>Título do modo de preparo da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.ingredients.items",
            "description": "<p>Lista de ingredients do modo de preparo da receita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.tags",
            "description": "<p>Palavras-chave da receita.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n    recipes: [\n        {\n            title: \"Pavê de cereja com ganache\",\n            time: \"40 minutos\",\n            id_ext: \"0\",\n            rating: 0,\n            prepare: [\n                {\n                    title: \"Calda\",\n                    items: [\n                        \"Dissolva as gelatinas no leite quente e reserve\",\n                        \"Bata no liquidificador: o leite gelado, leite condensado, creme de leite e a gelatina reservada\",\n                        \"Bata bem\",\n                        \"Transfira para uma tigela e leve a geladeira ou freezer (se estiver com pressa), por cerca de 20 minutos ou até antes de endurecer\",\n                        \"O ponto ideal é de creme\"\n                    ]\n                }\n            ],\n            ingredients: [\n                {\n                    title: \"Calda\",\n                    items: [\n                        \"2 pacotes de biscoito maisena\",\n                        \"leite o suficiente para umedecer os biscoitos\",\n                        \"1 lata de leite condensado\"\n                    ]\n                }\n            ],\n            tags: [\n                \"pavê\",\n                \"leite\",\n                \"maisena\"\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Sucesso": [
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Versão atual da api.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Double",
            "optional": false,
            "field": "time",
            "description": "<p>Tempo de processamento da requisição.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Informa se houve erro ou não no processamento da requisição.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes",
            "description": "<p>Lista de receitas.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes._id",
            "description": "<p>Identificador da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.title",
            "description": "<p>Título da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.time",
            "description": "<p>Tempo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.id_ext",
            "description": "<p>Indentificador externo do parceiro da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Number",
            "optional": false,
            "field": "recipes.rating",
            "description": "<p>Pontuação da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.prepare",
            "description": "<p>Lista de modos de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.prepare.title",
            "description": "<p>Título do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.prepare._id",
            "description": "<p>Identificador do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.prepare.items",
            "description": "<p>Lista de passos do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.ingredients",
            "description": "<p>Lista de ingredientes da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.ingredients.title",
            "description": "<p>Título do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "String",
            "optional": false,
            "field": "recipes.ingredients._id",
            "description": "<p>Identificador dos ingredientes da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.ingredients.items",
            "description": "<p>Lista de ingredients do modo de preparo da receita.</p>"
          },
          {
            "group": "Sucesso",
            "type": "Object[]",
            "optional": false,
            "field": "recipes.tags",
            "description": "<p>Palavras-chave da receita.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Example",
          "content": "HTTP/1.1 200 OK\n  {\n      version: \"1.0.0\",\n      time: 0.174,\n      status: true,\n      recipes: [\n          {\n              _id: \"57ef1e184ca1292f123257db\",\n              title: \"Pavê de cereja com ganache\",\n              time: \"40 minutos\",\n              id_ext: \"0\",\n              rating: 0,\n              prepare: [\n                  {\n                      title: \"Calda\",\n                      _id: \"57ef1e184ca1292f123257dc\",\n                      items: [\n                          \"Dissolva as gelatinas no leite quente e reserve\",\n                          \"Bata no liquidificador: o leite gelado, leite condensado, creme de leite e a gelatina reservada\",\n                          \"Bata bem\",\n                          \"Transfira para uma tigela e leve a geladeira ou freezer (se estiver com pressa), por cerca de 20 minutos ou até antes de endurecer\",\n                          \"O ponto ideal é de creme\"\n                      ]\n                  }\n              ],\n              ingredients: [\n                  {\n                      title: \"Calda\",\n                      _id: \"57ef1e184ca1292f123257dd\",\n                      items: [\n                          \"2 pacotes de biscoito maisena\",\n                          \"leite o suficiente para umedecer os biscoitos\",\n                          \"1 lata de leite condensado\"\n                      ]\n                  }\n              ],\n              tags: [\n                  \"pavê\",\n                  \"leite\",\n                  \"maisena\"\n              ]\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro": [
          {
            "group": "Erro",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Versão atual da api.</p>"
          },
          {
            "group": "Erro",
            "type": "Double",
            "optional": false,
            "field": "time",
            "description": "<p>Tempo de processamento da requisição.</p>"
          },
          {
            "group": "Erro",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Informa se houve erro ou não no processamento da requisição.</p>"
          },
          {
            "group": "Erro",
            "type": "Object[]",
            "optional": false,
            "field": "error",
            "description": "<p>Lista de erros.</p>"
          },
          {
            "group": "Erro",
            "type": "String",
            "optional": false,
            "field": "error.desc",
            "description": "<p>Descrição do erro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response-Example",
          "content": " HTTP/1.1 400 INVALID\n {\n   \"version\": \"1.0.0\",\n   \"time\": 0.001,\n   \"status\": false,\n   \"error\": [\n       {\n           \"desc\": \"Requisição com dados incorretos.\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/recipe-route.js",
    "groupTitle": "Receita",
    "name": "PostEaichefitoApiRecipe"
  }
] });
