module.exports = function (app, apiName, controllers) {
    /**
     * @api {get} /eaichefito/api/recipe Lista de receitas
     * @apiVersion 1.0.0
     * @apiGroup Receita
     * @apiDescription Retorna a lista de receitas conforme os filtros informados na requisição.
     * 
     * @apiSuccess (Sucesso) {String} version Versão atual da api.
     * @apiSuccess (Sucesso) {Double} time Tempo de processamento da requisição.
     * @apiSuccess (Sucesso) {Boolean} status Informa se houve erro ou não no processamento da requisição.
     * @apiSuccess (Sucesso) {Object[]} recipes Lista de receitas.
     * @apiSuccess (Sucesso) {String} recipes._id Identificador da receita.
     * @apiSuccess (Sucesso) {String} recipes.title Título da receita.
     * @apiSuccess (Sucesso) {String} recipes.time Tempo de preparo da receita.
     * @apiSuccess (Sucesso) {String} recipes.id_ext Indentificador externo do parceiro da receita.
     * @apiSuccess (Sucesso) {Number} recipes.rating Pontuação da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.prepare Lista de modos de preparo da receita.
     * @apiSuccess (Sucesso) {String} recipes.prepare.title Título do modo de preparo da receita.
     * @apiSuccess (Sucesso) {String} recipes.prepare._id Identificador do modo de preparo da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.prepare.items Lista de passos do modo de preparo da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.ingredients Lista de ingredientes da receita.
     * @apiSuccess (Sucesso) {String} recipes.ingredients.title Título do modo de preparo da receita.
     * @apiSuccess (Sucesso) {String} recipes.ingredients._id Identificador dos ingredientes da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.ingredients.items Lista de ingredients do modo de preparo da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.tags Palavras-chave da receita.
     * @apiSuccessExample {json} Success-Response-Example
     *    HTTP/1.1 200 OK
     *      {
     *          version: "1.0.0",
     *          time: 0.174,
     *          status: true,
     *          recipes: [
     *              {
     *                  _id: "57ef1e184ca1292f123257db",
     *                  title: "Pavê de cereja com ganache",
     *                  time: "40 minutos",
     *                  id_ext: "0",
     *                  rating: 0,
     *                  prepare: [
     *                      {
     *                          title: "Calda",
     *                          _id: "57ef1e184ca1292f123257dc",
     *                          items: [
     *                              "Dissolva as gelatinas no leite quente e reserve",
     *                              "Bata no liquidificador: o leite gelado, leite condensado, creme de leite e a gelatina reservada",
     *                              "Bata bem",
     *                              "Transfira para uma tigela e leve a geladeira ou freezer (se estiver com pressa), por cerca de 20 minutos ou até antes de endurecer",
     *                              "O ponto ideal é de creme"
     *                          ]
     *                      }
     *                  ],
     *                  ingredients: [
     *                      {
     *                          title: "Calda",
     *                          _id: "57ef1e184ca1292f123257dd",
     *                          items: [
     *                              "2 pacotes de biscoito maisena",
     *                              "leite o suficiente para umedecer os biscoitos",
     *                              "1 lata de leite condensado"
     *                          ]
     *                      }
     *                  ],
     *                  tags: [
     *                      "pavê",
     *                      "leite",
     *                      "maisena"
     *                  ]
     *              }
     *          ]
     *      }
     *   
     * @apiError (Erro) {String} version Versão atual da api.
     * @apiError (Erro) {Double} time Tempo de processamento da requisição.
     * @apiError (Erro) {Boolean} status Informa se houve erro ou não no processamento da requisição.
     * @apiError (Erro) {Object[]} error Lista de erros.
     * @apiError (Erro) {String} error.desc Descrição do erro.
     * @apiErrorExample {json} Error-Response-Example
     *    HTTP/1.1 400 INVALID
     *    {
     *      "version": "1.0.0",
     *      "time": 0.001,
     *      "status": false,
     *      "error": [
     *          {
     *              "desc": "Requisição com dados incorretos."
     *          }
     *      ]
     *   }
     */
    app.get(apiName + '/recipe', controllers.Recipe.find);
    
    /**
     * @api {post} /eaichefito/api/recipe Adicionar receitas
     * @apiVersion 1.0.0
     * @apiGroup Receita
     * @apiDescription Insere uma lista de receitas no banco de dados.
     * 
     * @apiParam {Object[]} recipes Lista de receitas.
     * @apiParam {String} recipes.title Título da receita.
     * @apiParam {String} recipes.time Tempo de preparo da receita.
     * @apiParam {String} [recipes.id_ext] Indentificador externo do parceiro da receita.
     * @apiParam {Number} [recipes.rating] Pontuação da receita.
     * @apiParam {Object[]} recipes.prepare Lista de modos de preparo da receita.
     * @apiParam {String} recipes.prepare.title Título do modo de preparo da receita.
     * @apiParam {Object[]} recipes.prepare.items Lista de passos do modo de preparo da receita.
     * @apiParam {Object[]} recipes.ingredients Lista de ingredientes da receita.
     * @apiParam {String} recipes.ingredients.title Título do modo de preparo da receita.
     * @apiParam {Object[]} recipes.ingredients.items Lista de ingredients do modo de preparo da receita.
     * @apiParam {Object[]} recipes.tags Palavras-chave da receita.
     * 
     * @apiParamExample {json} Request-Example
     *      {
     *          recipes: [
     *              {
     *                  title: "Pavê de cereja com ganache",
     *                  time: "40 minutos",
     *                  id_ext: "0",
     *                  rating: 0,
     *                  prepare: [
     *                      {
     *                          title: "Calda",
     *                          items: [
     *                              "Dissolva as gelatinas no leite quente e reserve",
     *                              "Bata no liquidificador: o leite gelado, leite condensado, creme de leite e a gelatina reservada",
     *                              "Bata bem",
     *                              "Transfira para uma tigela e leve a geladeira ou freezer (se estiver com pressa), por cerca de 20 minutos ou até antes de endurecer",
     *                              "O ponto ideal é de creme"
     *                          ]
     *                      }
     *                  ],
     *                  ingredients: [
     *                      {
     *                          title: "Calda",
     *                          items: [
     *                              "2 pacotes de biscoito maisena",
     *                              "leite o suficiente para umedecer os biscoitos",
     *                              "1 lata de leite condensado"
     *                          ]
     *                      }
     *                  ],
     *                  tags: [
     *                      "pavê",
     *                      "leite",
     *                      "maisena"
     *                  ]
     *              }
     *          ]
     *      }
     * 
     * @apiSuccess (Sucesso) {String} version Versão atual da api.
     * @apiSuccess (Sucesso) {Double} time Tempo de processamento da requisição.
     * @apiSuccess (Sucesso) {Boolean} status Informa se houve erro ou não no processamento da requisição.
     * @apiSuccess (Sucesso) {Object[]} recipes Lista de receitas.
     * @apiSuccess (Sucesso) {String} recipes._id Identificador da receita.
     * @apiSuccess (Sucesso) {String} recipes.title Título da receita.
     * @apiSuccess (Sucesso) {String} recipes.time Tempo de preparo da receita.
     * @apiSuccess (Sucesso) {String} recipes.id_ext Indentificador externo do parceiro da receita.
     * @apiSuccess (Sucesso) {Number} recipes.rating Pontuação da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.prepare Lista de modos de preparo da receita.
     * @apiSuccess (Sucesso) {String} recipes.prepare.title Título do modo de preparo da receita.
     * @apiSuccess (Sucesso) {String} recipes.prepare._id Identificador do modo de preparo da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.prepare.items Lista de passos do modo de preparo da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.ingredients Lista de ingredientes da receita.
     * @apiSuccess (Sucesso) {String} recipes.ingredients.title Título do modo de preparo da receita.
     * @apiSuccess (Sucesso) {String} recipes.ingredients._id Identificador dos ingredientes da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.ingredients.items Lista de ingredients do modo de preparo da receita.
     * @apiSuccess (Sucesso) {Object[]} recipes.tags Palavras-chave da receita.
     * @apiSuccessExample {json} Success-Response-Example
     *    HTTP/1.1 200 OK
     *      {
     *          version: "1.0.0",
     *          time: 0.174,
     *          status: true,
     *          recipes: [
     *              {
     *                  _id: "57ef1e184ca1292f123257db",
     *                  title: "Pavê de cereja com ganache",
     *                  time: "40 minutos",
     *                  id_ext: "0",
     *                  rating: 0,
     *                  prepare: [
     *                      {
     *                          title: "Calda",
     *                          _id: "57ef1e184ca1292f123257dc",
     *                          items: [
     *                              "Dissolva as gelatinas no leite quente e reserve",
     *                              "Bata no liquidificador: o leite gelado, leite condensado, creme de leite e a gelatina reservada",
     *                              "Bata bem",
     *                              "Transfira para uma tigela e leve a geladeira ou freezer (se estiver com pressa), por cerca de 20 minutos ou até antes de endurecer",
     *                              "O ponto ideal é de creme"
     *                          ]
     *                      }
     *                  ],
     *                  ingredients: [
     *                      {
     *                          title: "Calda",
     *                          _id: "57ef1e184ca1292f123257dd",
     *                          items: [
     *                              "2 pacotes de biscoito maisena",
     *                              "leite o suficiente para umedecer os biscoitos",
     *                              "1 lata de leite condensado"
     *                          ]
     *                      }
     *                  ],
     *                  tags: [
     *                      "pavê",
     *                      "leite",
     *                      "maisena"
     *                  ]
     *              }
     *          ]
     *      }
     *   
     * @apiError (Erro) {String} version Versão atual da api.
     * @apiError (Erro) {Double} time Tempo de processamento da requisição.
     * @apiError (Erro) {Boolean} status Informa se houve erro ou não no processamento da requisição.
     * @apiError (Erro) {Object[]} error Lista de erros.
     * @apiError (Erro) {String} error.desc Descrição do erro.
     * @apiErrorExample {json} Error-Response-Example
     *    HTTP/1.1 400 INVALID
     *    {
     *      "version": "1.0.0",
     *      "time": 0.001,
     *      "status": false,
     *      "error": [
     *          {
     *              "desc": "Requisição com dados incorretos."
     *          }
     *      ]
     *   }
     */
    app.post(apiName + '/recipe', controllers.Recipe.save);
};