from flask import Flask

from dashboard_database.backend.routes.database import database_routes

# create flask app 
app = Flask(__name__)
app.debug = True

app.register_blueprint(database_routes, url_prefix='/db/')

if __name__ == "__main__":
    # run app
    app.run(debug=True)