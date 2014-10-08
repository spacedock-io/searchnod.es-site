steal(
  'can',
  function(can) {
    return can.fixture({
      "POST /services/players":  function(request, response) {
        response([
          {
            "package": "groovebasin",
            "filename": "lib/web_socket_api_client.js",
            "score": 0.29015115,
            "content": [
              "(JSON.stringify({\n      name: name,\n      args: args,\n    }));\n  } catch (err) {\n    // nothing to do"
            ]
          },
          {
            "package": "sequelize-cli",
            "filename": "test/url.test.js",
            "score": 0.27371186,
            "content": [
              "(JSON.stringify(helpers.getTestConfig()), \"config/config.json\"))\n      .pipe(helpers.runCli(\"db:migrate \" + flag"
            ]
          }
        ]);
      }
    });
  }
);
