fetch("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json")
    .then(Response => {
        if (!Response.ok) {
            throw new Error("problem");
        }
        return Response.json()
    }
    )
    .then(data => console.log(data))
    .catch(error => console.error(error))