from backend.__init__ import app
from backend.models import Articles, db, article_schema, articles_schema
from flask import jsonify, request


@app.route('/get', methods=['GET'])
def getArticles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return results


@app.route('/get/<id>/', methods=['GET'])
def articleDetails(id):
    article = Articles.query.get(id)
    return article_schema.jsonify(article)


@app.route('/update/<id>/', methods=['PUT'])
def articleUpdate(id):
    article = Articles.query.get(id)
    title = request.json['title']
    body = request.json['body']
    article.title = title
    article.body = body
    db.session.commit()
    return article_schema.jsonify(article)


@app.route('/add', methods=['POST'])
def addArticle():
    title = request.json['title']
    body = request.json['body']
    articles = Articles(title, body)
    db.session.add(articles)
    db.session.commit()
    return article_schema.jsonify(articles)


@app.route('/delete/<id>/', methods=['DELETE'])
def deleteArticle(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    db.session.commit()
    return article_schema.jsonify(article)
