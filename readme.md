# 📚 Book API – RESTful API med Node.js, Express, TypeScript & MongoDB

## Deployad version

https://u05-typescript.onrender.com/api/v1/books

---

## Innehåll

- Om Projektet
- Installation och Körning Lokalt
- Miljövariabler
- Projektstruktur
- API Endpoints
- cURL-exempel
- Felhantering
- Datamodell
- Extra Funktionalitet
- Tech Stack
- API-design

---

## Om Projektet

Detta är ett RESTful API för att hantera böcker. Det tillåter att skapa, hämta, uppdatera och radera bokposter från en MongoDB-databas. Byggt med Express, TypeScript och Mongoose.

---

## Installation och Körning Lokalt

1. Klona repot:  
   `git clone <ditt-repo-url>`  
   `cd u05-typescript`

2. Installera beroenden:  
   `npm install`

3. Skapa en `.env`-fil i projektroten och lägg in:  
   `MONGODB_URI=<din MongoDB connection string>`  
   `PORT=5001`

4. Bygg TypeScript:  
   `npm run build`

5. Starta server:  
   `npm start`

---

## Miljövariabler

Exempel på `.env.example`:

```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/books-db?retryWrites=true&w=majority
PORT=5001
```

---

## Projektstruktur

```
.
├── package-lock.json
├── package.json
├── readme.md
├── src
│   ├── app.ts
│   ├── controllers
│   │   └── bookController.ts
│   ├── middleware
│   ├── models
│   │   └── bookModel.ts
│   ├── routes
│   │   └── bookRoutes.ts
│   └── server.ts
└── tsconfig.json
```

---

## API Endpoints

| Metod  | Endpoint                | Beskrivning               |
| ------ | ----------------------- | ------------------------- |
| GET    | /api/v1/books           | Hämta alla böcker         |
| GET    | /api/v1/books/:id       | Hämta bok via ID          |
| POST   | /api/v1/books           | Skapa ny bok              |
| PUT    | /api/v1/books/:id       | Uppdatera bok             |
| DELETE | /api/v1/books/:id       | Radera bok                |
| GET    | /api/v1/books?title=... | Sök bok via titel (extra) |

---

## cURL-exempel

### Lokalt (`http://localhost:5001`)

Hämta alla böcker:  
`curl http://localhost:5001/api/v1/books`

Hämta bok via ID:  
`curl http://localhost:5001/api/v1/books/<id>`

Skapa ny bok:  
`curl -X POST http://localhost:5001/api/v1/books -H "Content-Type: application/json" -d '{"title":"Neuromancer","author":"William Gibson","publishedYear":1984,"genre":"Cyberpunk"}'`

Uppdatera bok:  
`curl -X PUT http://localhost:5001/api/v1/books/<id> -H "Content-Type: application/json" -d '{"title":"Updated Title"}'`

Radera bok:  
`curl -X DELETE http://localhost:5001/api/v1/books/<id>`

Sök bok via titel:  
`curl "http://localhost:5001/api/v1/books?title=Neuromancer"`

### Deployad version

Byt ut `localhost` mot:  
`https://u05-typescript.onrender.com/api/v1/books`

---

## Felhantering

- 400 Bad Request – Felaktig data
- 404 Not Found – Bok finns ej
- 500 Server Error – Något gick fel

---

## Datamodell

- `title`: string
- `author`: string
- `publishedYear`: number
- `genre`: string

---

## Extra Funktionalitet

- Sökning via titel i query-parametern, t.ex.:  
  `curl "http://localhost:5001/api/v1/books?title=Neuromancer"`

---

## Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB Atlas + Mongoose
- Render (deploy)
- dotenv
- CORS

---

## API-design

**Resource URI:s**

- `/api/v1/books`
- `/api/v1/books/:id`

**Resource Representation (JSON):**

```
{
  "title": "Neuromancer",
  "author": "William Gibson",
  "publishedYear": 1984,
  "genre": "Cyberpunk"
}
```

**HTTP Metoder:**

- GET – Läs böcker
- POST – Skapa bok
- PUT – Uppdatera bok
- DELETE – Radera bok
