@app.route("/api/attendance")
def attendance():
    print('attendance!', file=sys.stderr)
    results = db.session.query(HomeGames.team, func.sum(HomeGames.attendance)).group_by(HomeGames.year).all()
    print('attendance!', file=sys.stderr)

    team = [result[0] for result in results]
    attendance = [result[1] for result in results]

    trace = {
        "x": team,
        "y": attendance,
        "type": "bar"
    }

    return jsonify(trace)
